import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist', // Ensure Vite outputs to dist/
    chunkSizeWarningLimit: 2000, // Optional: Increase chunk size limit warnings
  },
}));
