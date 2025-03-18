import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/search', '/private/'], // Add any private routes you want to exclude
    },
    sitemap: 'https://www.chillguyclicker.us/sitemap.xml',
  }
} 