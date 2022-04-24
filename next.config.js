/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // white listed image domains
  // white listed means trusted
  images: {
    // no https://
    domains: ['placekitten.com', 'i.imgur.com']
  }
}

module.exports = nextConfig
