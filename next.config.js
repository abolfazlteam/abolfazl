/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

const { withContentLayer } = require("next-contentlayer");

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  basePath: "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = withContentLayer(nextConfig);
