/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'swiperjs.com',
              port: '',
              pathname: '**/demos/images/**',
            },
            {
              protocol: 'https',
              hostname: 'in.mathworks.com',
              port: '',
              pathname: '**/videos/**',
            },
            {
              protocol: 'https',
              hostname: 'www.overleaf.com',
              port: '',
              pathname:"**/videos/**",
            },
          ],
    }
};

export default nextConfig;
