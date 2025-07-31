# 麦吉尔大学实验室导航页面部署指南

## 🌐 免费托管选项

### 方案一：Vercel 部署 (推荐)

#### 步骤 1: 准备项目
```bash
# 构建项目
npm run build
```

#### 步骤 2: 部署到 Vercel
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账号注册/登录
3. 点击 "New Project"
4. 导入您的项目文件夹或GitHub仓库
5. Vercel会自动检测React项目并配置
6. 点击 "Deploy" 开始部署

#### 步骤 3: 获取访问链接
- 部署完成后，Vercel会提供一个免费的 `.vercel.app` 域名
- 例如: `https://mcgill-lab-navigation.vercel.app`

### 方案二：Netlify 部署

#### 拖拽部署 (最简单)
1. 运行 `npm run build` 构建项目
2. 访问 [netlify.com](https://netlify.com)
3. 将 `dist` 文件夹直接拖拽到Netlify的部署区域
4. 获得免费的 `.netlify.app` 域名

#### Git集成部署
1. 将项目推送到GitHub
2. 在Netlify中连接GitHub仓库
3. 设置构建命令: `npm run build`
4. 设置发布目录: `dist`

### 方案三：GitHub Pages

#### 步骤 1: 创建GitHub仓库
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/mcgill-lab-navigation.git
git push -u origin main
```

#### 步骤 2: 配置GitHub Pages
1. 在GitHub仓库中，进入 Settings > Pages
2. 选择 Source: "GitHub Actions"
3. 创建 `.github/workflows/deploy.yml` 文件

#### 步骤 3: 自动部署工作流
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📁 添加Logo文件

在部署前，请确保将麦吉尔大学的logo文件添加到项目中：

1. 将logo文件复制到 `public/images/` 目录
2. 重命名为 `mcgill-logo.svg` 或 `mcgill-logo.png`
3. 重新构建项目: `npm run build`

## 🔧 自定义域名 (可选)

### Vercel自定义域名
1. 在Vercel项目设置中点击 "Domains"
2. 添加您的自定义域名
3. 按照提示配置DNS记录

### Netlify自定义域名
1. 在Netlify项目设置中点击 "Domain management"
2. 添加自定义域名
3. 配置DNS记录

## 🚀 推荐部署流程

1. **选择Vercel** (最适合React项目)
2. **构建项目**: `npm run build`
3. **上传到Vercel**: 拖拽dist文件夹或连接GitHub
4. **获取链接**: 立即获得可访问的URL
5. **添加logo**: 上传麦吉尔大学logo文件
6. **测试访问**: 确认两个系统链接正常工作

## 📞 技术支持

如果在部署过程中遇到问题，可以：
- 查看平台的官方文档
- 检查构建日志中的错误信息
- 确认所有依赖都已正确安装

部署完成后，您的麦吉尔大学实验室导航页面将可以通过互联网公开访问！