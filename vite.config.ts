import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Fix: Cast process to any to avoid TypeScript error "Property 'cwd' does not exist on type 'Process'"
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // 这一步非常关键：它让浏览器环境能够读取到你在 Vercel 后台设置的 API_KEY
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});