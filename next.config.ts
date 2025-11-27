/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [], // isi dengan domain eksternal jika ada image remote
  },
  experimental: {
    appDir: true // enable App Router
  }
}

module.exports = nextConfig;
