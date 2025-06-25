import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/dx6ecncex/**")],
  },
};

export default nextConfig;
