/** @format */

const withBundleAnalyzer = require('@next/bundle-analyzer')

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: [
            'imagedelivery.net',
            'chvn.me',
            'images.mirror-media.xyz',
            'cdn.ady.systems',
            'pbs.twimg.com',
            'market-assets.fra1.cdn.digitaloceanspaces.com',
            's3.amazonaws.com',
            'avatars.githubusercontent.com'
        ]
    },
    experimental: {},
    transpileModules: ['three']
}

module.exports = (_phase, { defaultConfig: _ }) => {
    const plugins = [withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })]
    return plugins.reduce((acc, plugin) => plugin(acc), {...config })
}

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.chvndler.ch *.spotify.com *.plausible.io stream.mux cdn.usefathom.com *.usefathom.com *.mux.com;
    child-src *.chvndler.ch *.youtube.com *.google.com *.twitter.com stream.mux image.mux.com cdn.usefathom.com *.usefathom.com;
    style-src 'self' 'unsafe-inline' *.chvndler.ch *.mux.com;
    img-src * blob: data: *.chvndler.ch imagedelivery.net chvn.me image.mux.com;
    media-src data: *.chvndler.ch *.scdn.co stream.mux imagedelivery.net chvn.me image.mux.com *.mux.com cdn.usefathom.com *.usefathom.com;
    connect-src data: * *.chvndler.ch stream.mux market-assets.fra1.cdn.digitaloceanspaces.com imagedelivery.net image.mux.com *.mux.com cdn.usefathom.com *.usefathom.com;
    font-src 'self';
`

const securityHeaders = [{
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, '')
    },
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
    },
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload'
    },
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
]