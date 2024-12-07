/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zachj.xyz",
        pathname: "/**", // Match all paths (optional; adjust as needed)
      },
    ],
  },
};

export default nextConfig;
