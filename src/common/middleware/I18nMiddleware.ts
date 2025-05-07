import { createI18nMiddleware } from 'next-international/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { CustomMiddleware } from './chain';

// Create the I18nMiddleware
const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'kh'],
  defaultLocale: 'kh',
});

export function i18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    // Call the I18nMiddleware function
    await I18nMiddleware(request);

    // Continue to the next middleware in the chain
    return middleware(request, event, response);
  };
}

// Configuration for Next.js to exclude API, static files, and specific paths
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
