/** @type {import('next').NextConfig} */

let nextConfig = {};
if(process.env.NODE_ENV === 'development'){
  nextConfig = {
      images: {
        remotePatterns: [
          {
            hostname: '**',
          },
        ],
      }
  };
}

if(process.env.NODE_ENV === 'production'){
  nextConfig = {
      images: {
        remotePatterns: [
            {
              hostname: '**',
            },
          ],
      },
  };
}

export default nextConfig;
