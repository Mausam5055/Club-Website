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
            {
              protocol: 'https',
              hostname: 'media.licdn.com',
              port: '',
              pathname:"**/dms/image/v2/D4D03AQHcmgOH1C86ww/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/**",
            },
          ],
    }
};

export default nextConfig;
