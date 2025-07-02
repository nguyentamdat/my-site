import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export for GitHub Pages
  output: "export",
  basePath: "/my-site",
  assetPrefix: "/my-site",
};

export default nextConfig;
