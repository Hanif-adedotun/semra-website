/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
          remotePatterns: [
               {
                    protocol: 'https',
                    hostname: 'uxat7lu2fpipwkob.public.blob.vercel-storage.com',
                    port: '',
                    pathname: '/**',
               },
               
          ]
     }
};

export default nextConfig;