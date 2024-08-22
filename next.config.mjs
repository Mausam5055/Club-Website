/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'www.yudiz.com',
              port: '',
              pathname: '**/codepen/gsap-slider/**',
            },
          ],
    }
};

export default nextConfig;
