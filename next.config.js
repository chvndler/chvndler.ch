const { withContentlayer } = require('next-contentlayer');
const withMDX = require('@next/mdx')();

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /**
   * eventually transition to this:
   * assetPrefix: isProd ? 'https://cdn.chvndler.ch' : undefined,
   *
   */
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['*.chvndler.ch', 'pbs.twimg.com', 'source.boringavatars.com'],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/chvndler',
        permanent: false,
      },
    ];
  },
};

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.chvndler.ch api.chvndler.ch *.spotify.com vitals.vercel-insights.com stream.mux cdn.usefathom.com *.usefathom.com *.mux.com;
    child-src *.chvndler.ch api.chvndler.ch *.youtube.com *.google.com vitals.vercel-insights.com *.twitter.com stream.mux image.mux.com cdn.usefathom.com *.usefathom.com;
    style-src 'self' 'unsafe-inline' *.chvndler.ch api.chvndler.ch *.mux.com vitals.vercel-insights.com;
    img-src * blob: data: *.chvndler.ch api.chvndler.ch imagedelivery.net chvn.me image.mux.com vitals.vercel-insights.com;
    media-src data: *.chvndler.ch api.chvndler.ch *.scdn.co stream.mux imagedelivery.net chvn.me image.mux.com *.mux.com cdn.usefathom.com *.usefathom.com vitals.vercel-insights.com;
    connect-src data: * *.chvndler.ch api.chvndler.ch vitals.vercel-insights.com *.usefathom.com;
    font-src 'self';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: '*',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

module.exports = withContentlayer(withMDX(nextConfig));
