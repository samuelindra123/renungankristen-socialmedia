/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...mungkin sudah ada konfigurasi lain di sini

  // TAMBAHKAN BLOK INI:
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;