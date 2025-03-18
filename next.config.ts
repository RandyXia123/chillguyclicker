import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'existing-domain.com',
      'another-domain.com',
      'cdn2.scratch.mit.edu'
    ],
  },
  eslint: {
    // This allows you to deploy with linting errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
