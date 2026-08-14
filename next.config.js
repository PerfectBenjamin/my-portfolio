/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // The home page is the hydrating snapshot in public/snapshot. Its JS bundle
    // re-inserts the original site's head tags on hydration, requesting
    // /favicon/* at the site root. Map those onto the real icon so the home page
    // shows the same favicon as every other route.
    return [
      {
        source: "/favicon/site.webmanifest",
        destination: "/snapshot/favicon/site.webmanifest",
      },
      { source: "/favicon/:path*", destination: "/favicon.png" },
      { source: "/favicon.ico", destination: "/favicon.png" },
    ];
  },
};

module.exports = nextConfig;
