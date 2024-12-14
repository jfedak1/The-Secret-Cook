import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs', // Ensure PostCSS is configured
  },
  server: {
    host: '0.0.0.0', // Allows binding to all network interfaces
    port: 5173,      // Optional: Specify the port
  },
});
