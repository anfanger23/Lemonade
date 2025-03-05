import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Lemonade/", // ✅ Correct placement
  build: {
    outDir: "dist",  // Ensure it's outputting to 'dist/'
  },
  server: {
    port: 3000,
  },
});