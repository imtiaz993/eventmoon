import webpackBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: [
      'www.ticketcity.com',
      'cdn2.aptivada.com',
      'm.eventmoon.com',
      'api.eventmoon.com',
    ],
  },
};

const withBundleAnalyzer = webpackBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
