/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
    experimental: {
      appDir: true,
      fontLoaders: [
        { loader: '@next/font/google' },
      ],
    }
}

module.exports = nextConfig
