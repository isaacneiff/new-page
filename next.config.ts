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
    loader: 'default',
    path: '/_next/image',
    domains: ['picsum.photos', 'isaacneiff.github.io', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'isaacneiff.github.io',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/public/assets/**'
      }
    ],
  },
};

export default nextConfig;