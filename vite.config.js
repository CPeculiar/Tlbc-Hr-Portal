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
    react(),
    commonjs(), // Include commonjs plugin here
  ],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ]
  }, 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})
