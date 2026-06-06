import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  distDir: isVercel ? '.next' : isProduction ? '.next-prod' : '.next',
};

export default nextConfig;
