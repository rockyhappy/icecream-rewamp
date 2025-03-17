/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  output: 'standalone',
  // Ensure SWC is used for compilation
  transpilePackages: [],
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
};

module.exports = nextConfig; 