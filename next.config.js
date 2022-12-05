const withBundleAnalyzer = require('@next/bundle-analyzer');
const withTM = require('next-transpile-modules');

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
            'cdn.ady.systems',
            'pbs.twimg.com',
            'market-assets.fra1.cdn.digitaloceanspaces.com',
            's3.amazonaws.com',
            'avatars.githubusercontent.com'
        ]
    },
    experimental: {}
};

module.exports = (_phase, { defaultConfig: _ }) => {
    const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }), withTM(['three'])];
    // return plugins.reduce((acc, plugin) => plugin(acc), {...config });
    return config;
};

// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.spotify.com *.plausible.io stream.mux;
    child-src *.youtube.com *.google.com *.twitter.com stream.mux;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src data: *.scdn.co stream.mux;
    connect-src data: * stream.mux market-assets.fra1.cdn.digitaloceanspaces.com;
    font-src 'self';
`;

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, '')
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
    },
    {
        key: 'Access-Control-Allow-Origin',
        value: '*'
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    }
];