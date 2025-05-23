
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // 项目根路径
  plugins: [react()],
  build: {
    // 打包配置项
    outDir: 'dist', // 输出目录
    assetsDir: 'assets', // 静态资源目录
    sourcemap: true, // 生成 source map 文件，便于调试
    minify: 'esbuild', // 使用 esbuild 进行压缩
    rollupOptions: {
      output: {
        // 其他 Rollup 输出配置项
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});
