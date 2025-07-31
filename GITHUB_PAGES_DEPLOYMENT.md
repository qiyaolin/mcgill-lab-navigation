# GitHub Pages 部署详细指南

## 📋 概述

GitHub Pages 是 GitHub 提供的免费静态网站托管服务，非常适合部署React静态网站。本指南将详细介绍如何将麦吉尔大学实验室导航页面部署到GitHub Pages。

## 🚀 部署方法一：GitHub Actions 自动部署（推荐）

### 步骤 1: 准备项目并推送到GitHub

#### 1.1 初始化Git仓库
```bash
# 进入项目目录
cd mcgill-lab-navigation/mcgill-lab-navigation

# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: McGill Lab Navigation System"
```

#### 1.2 创建GitHub仓库
1. 访问 [GitHub.com](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 填写仓库信息：
   - **Repository name**: `mcgill-lab-navigation`
   - **Description**: `McGill University Biology Department Laboratory Management System Navigation`
   - **Visibility**: Public（必须是公开仓库才能使用免费的GitHub Pages）
4. 不要勾选 "Add a README file"（因为我们已经有代码了）
5. 点击 "Create repository"

#### 1.3 连接本地仓库到GitHub
```bash
# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/mcgill-lab-navigation.git

# 设置主分支
git branch -M main

# 推送代码到GitHub
git push -u origin main
```

### 步骤 2: 配置GitHub Actions工作流

#### 2.1 创建工作流目录
```bash
# 在项目根目录创建GitHub Actions目录
mkdir -p .github/workflows
```

#### 2.2 创建部署工作流文件
创建文件 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  # 当推送到main分支时触发
  push:
    branches: [ main ]
  
  # 允许手动触发工作流
  workflow_dispatch:

# 设置GITHUB_TOKEN的权限
permissions:
  contents: read
  pages: write
  id-token: write

# 确保只有一个部署任务同时运行
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # 构建任务
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  # 部署任务
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 2.3 修改Vite配置以支持GitHub Pages
创建或修改 `vite.config.ts` 文件：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 设置基础路径为仓库名称
  base: '/mcgill-lab-navigation/',
})
```

#### 2.4 提交并推送工作流文件
```bash
# 添加工作流文件
git add .github/workflows/deploy.yml
git add vite.config.ts

# 提交
git commit -m "Add GitHub Pages deployment workflow"

# 推送到GitHub
git push origin main
```

### 步骤 3: 配置GitHub Pages

#### 3.1 启用GitHub Pages
1. 在GitHub仓库页面，点击 "Settings" 标签
2. 在左侧菜单中找到 "Pages"
3. 在 "Source" 部分选择 "GitHub Actions"
4. 点击 "Save"

#### 3.2 等待部署完成
1. 推送代码后，GitHub Actions会自动开始构建和部署
2. 在仓库的 "Actions" 标签页可以查看部署进度
3. 部署成功后，您的网站将在以下地址可用：
   ```
   https://YOUR_USERNAME.github.io/mcgill-lab-navigation/
   ```

## 🔧 部署方法二：手动构建部署

### 步骤 1: 本地构建项目
```bash
# 安装依赖
npm install

# 构建项目
npm run build
```

### 步骤 2: 创建gh-pages分支
```bash
# 安装gh-pages工具
npm install --save-dev gh-pages

# 部署到gh-pages分支
npx gh-pages -d dist
```

### 步骤 3: 配置GitHub Pages
1. 在GitHub仓库设置中，将Pages源设置为 "Deploy from a branch"
2. 选择 "gh-pages" 分支
3. 选择 "/ (root)" 文件夹

## 📁 添加Logo文件

在部署前，请确保添加麦吉尔大学的logo：

```bash
# 将logo文件复制到public/images目录
cp /path/to/your/mcgill-logo.svg public/images/

# 重新构建
npm run build

# 提交更改
git add public/images/mcgill-logo.svg
git commit -m "Add McGill University logo"
git push origin main
```

## 🌐 自定义域名（可选）

### 步骤 1: 添加CNAME文件
在 `public` 目录下创建 `CNAME` 文件：
```
your-custom-domain.com
```

### 步骤 2: 配置DNS
在您的域名提供商处添加以下DNS记录：
```
Type: CNAME
Name: www (或 @)
Value: YOUR_USERNAME.github.io
```

### 步骤 3: 在GitHub设置自定义域名
1. 在GitHub Pages设置中输入您的自定义域名
2. 勾选 "Enforce HTTPS"

## 🔍 故障排除

### 常见问题及解决方案

#### 1. 404错误
- **原因**: 路径配置错误
- **解决**: 确保 `vite.config.ts` 中的 `base` 路径正确

#### 2. 资源加载失败
- **原因**: 相对路径问题
- **解决**: 使用绝对路径或正确配置base路径

#### 3. 构建失败
- **原因**: 依赖问题或代码错误
- **解决**: 检查GitHub Actions日志，修复错误后重新推送

#### 4. 页面空白
- **原因**: JavaScript错误或路由问题
- **解决**: 检查浏览器控制台错误，确保所有资源正确加载

### 调试命令
```bash
# 本地预览构建结果
npm run preview

# 检查构建输出
ls -la dist/

# 查看Git状态
git status

# 查看远程仓库
git remote -v
```

## 📊 部署后验证

### 检查清单
- [ ] 网站可以正常访问
- [ ] 麦吉尔大学logo正确显示
- [ ] 两个系统链接正常工作
- [ ] 移动端显示正常
- [ ] 页面加载速度合理

### 测试链接
部署完成后，测试以下功能：
1. 点击 "Cell Storage System" 按钮
2. 点击 "Lab Inventory System" 按钮
3. 在不同设备上查看页面效果
4. 检查页面在不同浏览器中的兼容性

## 🚀 持续部署

设置完成后，每次推送代码到main分支都会自动触发部署：

```bash
# 修改代码后
git add .
git commit -m "Update navigation page"
git push origin main

# GitHub Actions会自动构建和部署
```

## 📞 技术支持

如果在部署过程中遇到问题：

1. **查看GitHub Actions日志**: 在仓库的Actions标签页查看详细错误信息
2. **检查GitHub Pages状态**: 在Settings > Pages查看部署状态
3. **验证配置文件**: 确保所有配置文件格式正确
4. **测试本地构建**: 先在本地确保 `npm run build` 成功

部署完成后，您的麦吉尔大学实验室导航页面将通过GitHub Pages免费托管，全球用户都可以访问！