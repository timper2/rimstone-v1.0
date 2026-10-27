import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // The hosted preview supplies its own live-reload channel. Disable Vite's
    // client-side websocket fallback, which cannot resolve the proxied preview URL.
    hmr: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
