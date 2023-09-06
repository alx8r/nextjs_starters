import createMiddleware from 'next-intl/middleware';
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'en'
});