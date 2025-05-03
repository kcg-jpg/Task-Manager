// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mantine/core', '@mantine/hooks']
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Forward /api requests to backend
    }
  }
});
