/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for Turbopack
  experimental: {
    turbo: {
      rules: {
        // Your turbo rules here if needed
      }
    }
  }
};

export default nextConfig;
