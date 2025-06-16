import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.iso",
        port: ""
      },
      {
        protocol: "https",
        hostname: "*.ufs.sh"
      }
    ]
  }
};

export default nextConfig;
