/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Browsers probe /favicon.ico on root navigations; serve the real icon.
    return [{ source: "/favicon.ico", destination: "/favicon/favicon-32x32.png" }];
  },
};

module.exports = nextConfig;
