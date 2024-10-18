import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  plugins: [
    react(),
    commonjs({
      requireReturnsDefault: 'namespace',
      include: [
        'node_modules/**',  // Include all node_modules
        /node_modules\/(prop-types|react-transition-group)\//
      ]
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tailwindConfig': path.resolve(__dirname, './tailwind.config.js'),
      'prop-types': 'prop-types/prop-types.js'
    },
    extensions: ['.js', '.jsx', '.json']
  },
  optimizeDeps: {
    include: [
      'prop-types',
      'react-transition-group',
      'react',
      'react-dom'
    ],
    esbuildOptions: {
      target: 'es2020',
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    commonjsOptions: {
      transformMixedEsModules: true
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})