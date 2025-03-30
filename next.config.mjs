/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'core-js/modules': 'core-js/stable',
      'core-js/features': 'core-js/stable'
    };
    return config;
  }
};

export default nextConfig;