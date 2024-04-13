const { withContentlayer } = require('next-contentlayer');
const withMDX = require('@next/mdx');

const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: { NODE_ENV: isDev ? 'development' : 'production' },
  pageExtensions: ['ts', 'tsx', 'mdx'],

  /**
   * eventually transition to this:
   * assetPrefix: isProd ? 'https://cdn.chvndler.ch' : undefined,
   *
   */
  images: {
    domains: ['cdn.chvndler.ch', 'pbs.twimg.com', 'chvn.me', 'image.mux.com'],
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.chvndler.ch',
        port: '',
        pathname: '/assets/**/*',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
    ],
  },
};

const ContentSecurityPolicy = `
    default-src 'self' *;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.chvndler.ch api.chvndler.ch vitals.vercel-insights.com *.usefathom.com *.mux.com stream.mux;
    child-src *.chvndler.ch api.chvndler.ch *.google.com vitals.vercel-insights.com *.twitter.com stream.mux image.mux.com cdn.usefathom.com *.usefathom.com;
    style-src 'self' 'unsafe-inline' *.chvndler.ch api.chvndler.ch *.mux.com vitals.vercel-insights.com;
    img-src * blob: data: *.chvndler.ch api.chvndler.ch imagedelivery.net chvn.me cdn.chvndler.ch image.mux.com vitals.vercel-insights.com;
    media-src data: *.chvndler.ch api.chvndler.ch *.scdn.co stream.mux chvn.me cdn.chvndler.ch stream.video.chvndler.com *.mux.com vitals.vercel-insights.com;
    connect-src data: * *.chvndler.ch api.chvndler.ch cdn.chvndler.ch vitals.vercel-insights.com *.usefathom.com;
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
