/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  // basePath 명시
  basePath: isProduction ? '/portfolio' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  assetPrefix: !isProduction ? `/portfolio/` : "",
};

export default nextConfig;
