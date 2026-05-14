/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/FanVerse-AI",
  assetPrefix: "/FanVerse-AI/",
};

module.exports = nextConfig;
