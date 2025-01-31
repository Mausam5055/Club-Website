/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
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
    },
    rewrites: async () => {
      return [
        {
          source: "/api/py/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/api/py/:path*"
              : "/api/",
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/api/py/docs"
              : "/api/py/docs",
        },
        {
          source: "/openapi.json",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/api/py/openapi.json"
              : "/api/py/openapi.json",
        },
      ];
    },  
};

export default nextConfig;
