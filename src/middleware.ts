import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    if (authValue) {
      try {
        const [user, pwd] = atob(authValue).split(':')
        if (user === 'admin' && pwd === 'PromoR3g!2026') {
          return NextResponse.next()
        }
      } catch (e) {
        // Fail silently and return 401 if base64 decoding fails
      }
    }
  }

  return new NextResponse('Authentication Required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: ['/admin/:path*'],
}
