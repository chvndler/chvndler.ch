const withBundleAnalyzer = require('@next/bundle-analyzer');
const withTM = require('next-transpile-modules');

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['cdn.ady.systems', 'pbs.twimg.com', 'market-assets.fra1.cdn.digitaloceanspaces.com']
    },
    experimental: {}
};

module.exports = (_phase, { defaultConfig: _ }) => {
    const plugins = [
        withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' }),
        withTM(['three'])
    ];
    // return plugins.reduce((acc, plugin) => plugin(acc), {...config });
    return config;
};