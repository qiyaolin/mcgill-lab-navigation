# 麦吉尔大学生物学系实验室导航系统

## 项目简介

这是一个为麦吉尔大学生物学系实验室设计的静态导航页面，作为Lab Management System的主入口，提供到两个核心子系统的导航：

- **细胞存储系统** (Cell Storage System)
- **实验室库存系统** (Lab Inventory System)

## 技术栈

- **前端框架**: React 18 + TypeScript
- **UI组件库**: shadcn/ui
- **样式方案**: Tailwind CSS
- **图标库**: Lucide React
- **构建工具**: Vite
- **部署**: 静态文件部署

## 设计特点

- 🎨 采用麦吉尔大学经典的红色和白色品牌配色
- 📱 完全响应式设计，支持移动端和桌面端
- 🚀 现代化的学术风格界面
- ⚡ 快速加载和流畅的用户体验
- 🔗 直接导航到两个核心管理系统

## 本地开发

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:5173` 查看页面效果

### 构建生产版本
```bash
npm run build
```

## 部署方案

### 1. GitHub Pages (推荐)
详细部署步骤请参考 [GitHub Pages部署指南](./GITHUB_PAGES_DEPLOYMENT.md)

### 2. Vercel
详细部署步骤请参考 [部署指南](./DEPLOYMENT_GUIDE.md)

### 3. Netlify
拖拽 `dist` 文件夹到 Netlify 即可完成部署

## 项目结构

```
mcgill-lab-navigation/
├── public/
│   ├── images/           # Logo和图片资源
│   └── vite.svg
├── src/
│   ├── components/       # UI组件
│   ├── hooks/           # React Hooks
│   ├── lib/             # 工具函数
│   ├── App.tsx          # 主应用组件
│   ├── main.tsx         # 应用入口
│   └── globals.css      # 全局样式
├── .github/
│   └── workflows/       # GitHub Actions工作流
├── README.md
├── package.json
└── vite.config.ts
```

## 添加Logo

将麦吉尔大学的官方logo文件放置到以下位置：
```
public/images/mcgill-logo.svg
```

支持的格式：SVG（推荐）、PNG

## 移动端适配

项目已完成全面的移动端适配，详细信息请参考 [移动端优化说明](./MOBILE_OPTIMIZATION.md)

## 系统链接

- **细胞存储系统**: https://ambient-decoder-467517-h8.nn.r.appspot.com/cell-storage/index
- **实验室库存系统**: https://lab-inventory-467021.web.app/inventory

## 技术支持

如有技术问题，请联系：qiyaolin3776@gmail.com

## 许可证

© 2025 Hayer Lab. All rights reserved.