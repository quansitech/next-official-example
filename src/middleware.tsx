import type { NextRequest } from 'next/server'

import { NextResponse } from 'next/server'

const setHeader = (request: NextRequest) => {
  const headers = new Headers(request.headers);
  headers.set("x-search", request.nextUrl.search);
  return headers;
}

export async function middleware(request: NextRequest) {
    
    const requestHeaders = setHeader(request);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })

    return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|txt|css|svg|ttf|woff|woff2)$).*)',
  ],
}