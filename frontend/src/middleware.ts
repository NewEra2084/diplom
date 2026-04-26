import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// Сначала проверяем, есть ли локаль в URL
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = pathname.startsWith('/en') || pathname.startsWith('/ru');

  if (!hasLocale) {
    // Если локаль не указана — редиректим на /ru (или /en)
    const url = new URL(`/ru${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  // Далее стандартная логика next-intl
  const handleI18n = createMiddleware({
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  });

  return handleI18n(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};