import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const NOINDEX_PATTERNS = [
  /^\/api\//,
  /^\/admin\//,
  /^\/dashboard\//,
  /^\/checkout\//,
  /^\/thank-you\//,
  /^\/cart\//,
  /^\/temp\//,
  /^\/private\//,
];

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';
  const forwardedProto = req.headers.get('x-forwarded-proto');

  // Force HTTPS if protocol is HTTP (from x-forwarded-proto)
  if (!hostname.includes('localhost') && forwardedProto === 'http') {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 308);
  }

  // Trailing slash normalization (strip trailing slash except root /)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, 308);
  }

  const { pathname } = req.nextUrl;

  if (NOINDEX_PATTERNS.some(p => p.test(pathname))) {
    const res = NextResponse.next();
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return res;
  }

  const host = req.headers.get('host') || '';
  if (host.includes('.vercel.app')) {
      const res = NextResponse.next();
      res.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return res;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};