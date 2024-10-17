import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react({
      jsxRuntime: 'classic', // Add this line
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx']
      }
    }),
    commonjs({
      requireReturnsDefault: 'auto',
      include: [
        'node_modules/prop-types/**',
        'node_modules/react-transition-group/**'
      ],
      requireReturnsDefault: 'namespace'
    })
  ],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
      'prop-types': path.resolve(__dirname, 'node_modules/prop-types/index.js'),
      'react/jsx-runtime': 'react/jsx-runtime.js'
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
      'prop-types',
      'react-transition-group',
      'react',
      'react-dom',
      'react/jsx-runtime'
    ]
  }, 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
      exclude: [/\.(js|mjs|json|css|less|sass|scss|styl|png|jpe?g|gif|svg|ico)$/]
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
