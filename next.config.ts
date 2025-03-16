import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'existing-domain.com',
      'another-domain.com',
      'cdn2.scratch.mit.edu'
    ],
  },
};

export default nextConfig;
