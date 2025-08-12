
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent bundling of Node.js core modules on the client
      config.resolve.fallback = {
        ...config.resolve.fallback, // Spread existing fallbacks if any
        fs: false,
        child_process: false,
        net: false,
        tls: false,
        dns: false, 
        timers: false,
      };
    }
    return config;
  },
};

export default nextConfig;
