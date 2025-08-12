import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ===== IMAGES CONFIGURATION =====
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '/images/**',
      },
    ],
    // Image formats to optimize
    formats: ['image/webp', 'image/avif'],
    // Image sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache time for optimized images (in seconds)
    minimumCacheTTL: 60,
    // Disable static imports in favor of dynamic imports
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ===== TYPESCRIPT CONFIGURATION =====
  typescript: {
    // Ignore TypeScript errors during build (not recommended for production)
    ignoreBuildErrors: false,
  },

  // ===== ESLINT CONFIGURATION =====
  eslint: {
    // Ignore ESLint errors during build (not recommended for production)
    ignoreDuringBuilds: false,
    // Specify directories to run ESLint on
    dirs: ['pages', 'components', 'lib', 'src'],
  },

  // ===== ENVIRONMENT VARIABLES =====
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // ===== REDIRECTS =====
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/posts/:slug*',
        permanent: false,
      },
    ]
  },

  // ===== REWRITES =====
  async rewrites() {
    return [
      {
        source: '/api/proxy/:path*',
        destination: 'https://external-api.com/:path*',
      },
      {
        source: '/docs/:path*',
        destination: '/documentation/:path*',
      },
    ]
  },

  // ===== HEADERS =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ]
  },

  // ===== WEBPACK CONFIGURATION =====
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Custom webpack configuration
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
      type: 'asset',
    })

    // Add polyfills for Node.js modules in browser
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }

    return config
  },

  // ===== EXPERIMENTAL FEATURES =====
  experimental: {
    // Enable server components (App Router)
    // appDir: true,
    // Enable Turbopack for faster development builds
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // Enable edge runtime for API routes
    // runtime: 'nodejs',
    // Server actions
    // serverActions: true,
    // Partial prerendering
    ppr: false,
  },

  // ===== OUTPUT CONFIGURATION =====
  output: 'standalone', // For Docker deployments
  // output: 'export', // For static export

  // ===== RUNTIME CONFIGURATION =====
  // Compress responses with gzip
  compress: true,
  
  // Power by header
  poweredByHeader: false,

  // Generate sitemap
  generateEtags: true,

  // Page extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // ===== STATIC OPTIMIZATION =====
  trailingSlash: false,
  
  // Asset prefix for CDN
  // assetPrefix: 'https://cdn.example.com',

  // Base path for application
  // basePath: '/my-app',

  // ===== SECURITY HEADERS =====
  // Content Security Policy
  // csp: {
  //   'default-src': ["'self'"],
  //   'script-src': ["'self'", "'unsafe-inline'"],
  //   'style-src': ["'self'", "'unsafe-inline'"],
  // },

  // ===== LOGGING =====
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // ===== SERVER CONFIGURATION =====
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },

  // ===== CUSTOM SERVER =====
  // distDir: '.next', // Custom build directory
  // cleanDistDir: true, // Clean the build directory before building

  // ===== INTERNATIONALIZATION =====
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL', 'es'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'example.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.fr',
        defaultLocale: 'fr',
      },
    ],
  },

  // ===== BUNDLE ANALYZER =====
  // Uncomment to analyze bundle size
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // },
}

export default nextConfig