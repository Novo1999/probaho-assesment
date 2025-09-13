import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    domains: ['api.placeholder.com', 'm.media-amazon.com'],
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3001',
  },
  typedRoutes: true,
}

export default withNextIntl(nextConfig)
