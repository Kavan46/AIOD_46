import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
          'auth': ['./src/context/AuthContext.tsx'],
          'theme': ['./src/context/ThemeContext.tsx'],
          'analytics': ['./src/context/AnalyticsContext.tsx'],
          'categories': ['./src/data/categories.ts', './src/data/productCategories.ts']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  server: {
    hmr: {
      overlay: false
    }
  }
});