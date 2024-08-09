/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: `/:path*`,
            },
            {
                source: '/micro-one',
                destination: `http://localhost:3001/micro-one/:path*`,
            }
        ]
      },
};


export default nextConfig;
