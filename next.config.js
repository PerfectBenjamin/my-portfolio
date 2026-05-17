/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/snapshot/index.html",
        },
      ],
    };
  },
};

module.exports = nextConfig;
