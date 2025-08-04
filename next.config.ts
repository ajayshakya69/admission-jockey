import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any HTTPS domain
      },
      {
        protocol: "http",
        hostname: "**", // allow any HTTP domain (less secure, use only if needed)
      },
    ],
  },
};

export default nextConfig;
