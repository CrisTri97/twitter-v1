/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["help.twitter.com", "icon-library.com"],
    hostname: ["icon-library.com"],
  },
};

module.exports = nextConfig;
