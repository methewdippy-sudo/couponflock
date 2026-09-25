$t = Get-Content 'nb4.js' -Raw
$blank = ([regex]::Matches($t,'_blank')).Count
$anchor = ([regex]::Matches($t,'"a",\{href')).Count
$btn = ([regex]::Matches($t,'"button",\{type:"button"')).Count
$noopener = ([regex]::Matches($t,'noopener')).Count
$iphone = ([regex]::Matches($t,'iPhone')).Count
Write-Host "nb4.js (16-0g9q.9g5j2.js):"
Write-Host "  _blank count    = $blank"
Write-Host "  <a href>  count = $anchor  (card is anchor if >0)"
Write-Host "  <button>  count = $btn     (old card button if >0)"
Write-Host "  noopener  count = $noopener"
Write-Host "  iPhone    count = $iphone"
