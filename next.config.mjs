/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
            pathname: '/images/**',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            pathname: '/photos/**',
          }

          
        ],
      },
};

export default nextConfig;
