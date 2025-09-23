/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    // qualities: [75, 90, 100], // <-- add the qualities you want to allow
     domains: ["cdn.builder.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // images: {
  //   unoptimized: true,
  // },
  // trailingSlash: true,
};

export default nextConfig;
