/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '10.28.164.119',
        port: '8000',
        pathname: '/media/images/**',
      },
    ],
  },
}

module.exports = nextConfig
