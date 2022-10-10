/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rickandmortyapi.com"]
  },
  experimental: {
    newNextLinkBehavior: true
  }
};

module.exports = nextConfig;
