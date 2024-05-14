/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        webVitalsAttribution: ['CLS', 'LCP'],
    },
}

export default nextConfig
