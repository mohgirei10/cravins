import type { NextConfig } from "next";
const nextConfig: NextConfig = { poweredByHeader: false, images: { formats: ["image/avif", "image/webp"], qualities: [60, 75, 85] } };
export default nextConfig;
