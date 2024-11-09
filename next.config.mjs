/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        mdxRs: true,
    },
    images: {
        remotePatterns: [
            { hostname: "*", protocol: "http" },
            { hostname: "*", protocol: "https" },
        ],
    },
};

export default nextConfig;
