import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      external: (id) => {
        // Exclude Next.js specific imports from @vercel/analytics
        if (id.includes('next/navigation')) {
          return true;
        }
        return false;
      },
    },
  },
  optimizeDeps: {
    exclude: ['@vercel/analytics/next'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});

