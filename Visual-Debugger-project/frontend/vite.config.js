import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // 👈 set frontend port to 3000
    strictPort: true, // fail if 3000 is already in use
    cors: true        // allow CORS for HTTP testing
  }
});
