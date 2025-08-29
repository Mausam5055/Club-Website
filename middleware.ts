import { kv } from '@vercel/kv'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}

export default function middleware(request: NextRequest, context: NextFetchEvent) {
  const response = NextResponse.next()

  // Background visitor count update - only if KV is configured
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    context.waitUntil(
      (async () => {
        try {
          await kv.incr('all_views')
        } catch (error) {
          console.error('Failed to update views:', error)
        }
      })()
    )
  }

  return response
}