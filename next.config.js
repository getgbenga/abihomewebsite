// next.config.js optimization
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    // Optimize image loading
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
  },
  // Enable production optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize bundle size
  experimental: {
    // Disable optimizeCss to avoid critters dependency
    // optimizeCss: true,
    optimizePackageImports: [
      'react', 
      'react-dom',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      'lucide-react',
      'class-variance-authority',
    ],
    // Enable modern JavaScript features
    craCompat: false,
    // Disable nextScriptWorkers to avoid Partytown dependency
    // nextScriptWorkers: true,
  },
  // Improve build performance
  webpack: (config, { dev, isServer }) => {
    // Only run in production builds
    if (!dev) {
      // Split chunks more aggressively
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 244000, // Add max size to prevent large chunks
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            priority: 40,
            enforce: true,
          },
          radix: {
            name: 'radix-ui',
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            priority: 35,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name: false,
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
        },
      };

      // Add TerserPlugin options for better minification
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            compress: {
              drop_console: true,
              ecma: 5,
              keep_classnames: false,
              keep_fnames: false,
              passes: 3,
            },
            mangle: {
              safari10: false,
            },
            format: {
              comments: false,
            },
          };
        }
      });

      // Add compression for assets
      config.optimization.realContentHash = true;
    }

    // Fix alias configuration
    if (config.resolve.alias) {
      config.resolve.alias['@'] = config.resolve.alias['@'] || '';
      if (config.resolve.alias['@'] === '') {
        config.resolve.alias['@'] = process.cwd() + '/src';
      }
    }

    return config;
  },
  // Enable gzip compression
  compress: true,
  // Improve production performance
  productionBrowserSourceMaps: false,
  // Improve page loading
  poweredByHeader: false,
  // Improve asset caching
  generateEtags: true,
};
