import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Unrelated lockfiles exist in parent folders; pin the root to this app.
  turbopack: { root: __dirname },
};

export default nextConfig;
