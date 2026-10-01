const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if present
const envLocalPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envLocalPath)) {
    const envContent = fs.readFileSync(envLocalPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
            const key = match[1];
            let value = match[2] || '';
            if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
            if (!process.env[key]) process.env[key] = value;
        }
    });
}

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID || 'prj_2na1k0POXPf4h6B9LYwb0Ivv6j0H';
const MAX_THRESHOLD = 10;   // Trigger auto-prune whenever builds exceed 10
const KEEP_LATEST_COUNT = 5; // Keep active prod + 4 latest recent builds

const isForced = process.argv.includes('--force');

if (!VERCEL_TOKEN) {
    console.error('❌ Error: VERCEL_TOKEN environment variable is not defined in .env.local or process.env.');
    process.exit(1);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getActiveProductionDeploymentId() {
    const res = await fetch(`https://api.vercel.com/v9/projects/${PROJECT_ID}`, {
        headers: { Authorization: `Bearer ${VERCEL_TOKEN}` }
    });
    const data = await res.json();
    return data.targets?.production?.id;
}

async function getAllDeployments() {
    let allDeployments = [];
    let until = null;

    for (let page = 0; page < 5; page++) {
        let url = `https://api.vercel.com/v6/deployments?projectId=${PROJECT_ID}&limit=100`;
        if (until) url += `&until=${until}`;

        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${VERCEL_TOKEN}` }
        });
        const data = await res.json();
        const list = data.deployments || [];
        if (list.length === 0) break;
        allDeployments.push(...list);
        if (list.length < 100) break;
        until = list[list.length - 1].created;
    }

    return allDeployments;
}

async function checkAndPruneDeployments() {
    console.log('🔍 Checking CouponFlock deployment count...');
    const allDeployments = await getAllDeployments();
    console.log(`📊 Current Deployments Count: ${allDeployments.length}`);

    if (!isForced && allDeployments.length <= MAX_THRESHOLD) {
        console.log(`✅ Deployments count (${allDeployments.length}) is within the safe limit (<= ${MAX_THRESHOLD}). No cleanup needed yet.`);
        return;
    }

    console.log(`⚠️ Deployments count (${allDeployments.length}) has reached/exceeded threshold (${MAX_THRESHOLD}). Running automated prune...`);

    const activeProdId = await getActiveProductionDeploymentId();
    console.log(`⭐ Active Production Deployment ID: ${activeProdId}`);

    // Sort newest to oldest
    allDeployments.sort((a, b) => b.created - a.created);

    // Identify deployments to keep
    const toKeep = new Set();
    if (activeProdId) toKeep.add(activeProdId);

    // Keep the top N most recent deployments
    for (let i = 0; i < Math.min(KEEP_LATEST_COUNT, allDeployments.length); i++) {
        toKeep.add(allDeployments[i].uid);
    }

    const toDelete = allDeployments.filter(d => !toKeep.has(d.uid));

    console.log(`\n🛡️ Preserving ${toKeep.size} deployments (Active Production + Recent ${KEEP_LATEST_COUNT - 1}):`);
    allDeployments.filter(d => toKeep.has(d.uid)).forEach(d => {
        const isProd = d.uid === activeProdId;
        console.log(`  - [KEEP] ${d.uid} | ${d.state} | ${new Date(d.created).toLocaleString()} ${isProd ? '⭐ ACTIVE PROD' : ''}`);
    });

    console.log(`\n🗑️ Deleting ${toDelete.length} older previous deployments...`);

    let deletedCount = 0;
    let failedCount = 0;

    for (const d of toDelete) {
        if (d.uid === activeProdId) {
            console.error(`🚨 CRITICAL SAFETY GUARD: Skipped delete for active production: ${d.uid}`);
            continue;
        }

        try {
            const delRes = await fetch(`https://api.vercel.com/v13/deployments/${d.uid}`, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${VERCEL_TOKEN}` }
            });
            const resJson = await delRes.json();
            if (resJson.state === 'DELETED') {
                deletedCount++;
                console.log(`✅ [${deletedCount}/${toDelete.length}] Deleted: ${d.uid} (${new Date(d.created).toLocaleDateString()})`);
            } else {
                failedCount++;
                console.warn(`⚠️ Could not delete ${d.uid}:`, resJson);
            }
        } catch (err) {
            failedCount++;
            console.error(`❌ Error deleting ${d.uid}:`, err.message);
        }

        await sleep(150);
    }

    console.log('\n========================================');
    console.log(`🎉 Auto-Prune Complete!`);
    console.log(`Total Deleted: ${deletedCount}`);
    console.log(`Total Preserved: ${toKeep.size}`);
    console.log(`Failed: ${failedCount}`);
    console.log('========================================');
}

checkAndPruneDeployments().catch(console.error);
