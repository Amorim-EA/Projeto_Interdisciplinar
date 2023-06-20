/** @type {import('next').NextConfig} */
const nextConfig = {

      async rewrites() {
        return[
            {
                source: '/api/:path*',
                destination: 'http://localhost:3004/',
            },
        ]
      },

      images : {
        domains : ['http2.mlstatic.com']
      },

}

module.exports = nextConfig
