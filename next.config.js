/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic configuration
  reactStrictMode: true,
  swcMinify: true,
  
  // Allow server actions from the browser preview domain during development
  experimental: {
    allowedDevOrigins: ['127.0.0.1']
  }
}

module.exports = nextConfig
