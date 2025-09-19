import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_PATHS = ['/', '/event'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (PUBLIC_PATHS.includes(pathname)) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }
  if (pathname.startsWith('/files')) {
    const status = request.cookies.get('status')?.value;
    if (status !== '1') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!_next|api|static|.*\\..*).*)'],
};
