import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import rewriteAll from 'vite-plugin-rewrite-all'; // ✅ DEFAULT import, no {}

export default defineConfig({
  plugins: [react(), rewriteAll()], // ✅ works now!
  build: {
    outDir: 'dist',
  },
});
