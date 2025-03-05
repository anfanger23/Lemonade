import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Lemonade/", // Move this to the root level
  server: {
    port: 3000,
  },
});