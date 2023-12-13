import { defineConfig, loadEnv } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: { 'process.env': process.env },
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
});
