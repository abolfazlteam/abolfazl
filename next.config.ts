import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cache Components: enables Partial Prerendering and the `unstable_instant`
  // route export that validates instant client-side navigations at build time.
  cacheComponents: true,
  images: {
    qualities: [75, 100],
  },
  output: "standalone",
};

export default nextConfig;
