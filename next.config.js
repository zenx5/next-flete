/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["localhost", "fastly.picsum.photos", "picsum.photos", "tailwindui.com", "detallesorballo.com"],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
