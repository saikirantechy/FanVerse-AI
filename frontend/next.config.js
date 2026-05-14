/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/FanVerse-AI",
  assetPrefix: "/FanVerse-AI/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
