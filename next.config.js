/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["placeholder.com"],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

