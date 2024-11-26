import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
    matcher: [
        '/',
        '/((?!_next|api|static|favicon.ico|public|images|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.svg).*)',
        '/en/:path*',
        '/vi/:path*',
    ],
};