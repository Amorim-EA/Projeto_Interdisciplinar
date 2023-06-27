/** @type {import('next').NextConfig} */
const nextConfig = {

      async rewrites() {
        return[
            {
                source: '/api/:path*',
                destination: 'https://projeto-interdisciplinar-seven.vercel.app/produtos',
            },
        ]
      },

      images : {
        domains : ['http2.mlstatic.com']
      },

}

module.exports = nextConfig
