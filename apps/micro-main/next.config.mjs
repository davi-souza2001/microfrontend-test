/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/micro-one',
                destination: `http://localhost:3001/micro-one`,
            }
        ]
      },
};


export default nextConfig;
