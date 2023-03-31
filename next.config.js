/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    minimumCacheTTL: 86400,
    remotePatterns: [{ protocol: "https", hostname: "*.bungie.net" }],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
