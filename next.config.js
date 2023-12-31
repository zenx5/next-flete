/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "fastly.picsum.photos", "picsum.photos", "tailwindui.com", "detallesorballo.com", "www.comparapps.com","images.unsplash.com"],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
