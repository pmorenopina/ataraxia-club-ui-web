/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { loader: 'custom', loaderFile: './cloudinary-image-loader.js' },
}

module.exports = nextConfig
