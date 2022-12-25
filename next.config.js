/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    experimental: {
      appDir: true,
      nftTracing: true
    }
}

module.exports = nextConfig
