/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  images: {
    remotePatterns: [
      {
    
        hostname: 'bootstrapmade.com',
       
      },
    ],
  },
}

const withVideos = require('next-videos')

module.exports = withVideos()
