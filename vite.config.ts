import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 设置基础路径为仓库名称，确保在生产环境中正确
  base: process.env.NODE_ENV === 'production' ? '/mcgill-lab-navigation/' : '/',
  server: {
    host: "0.0.0.0",
    allowedHosts: true
  }
})
