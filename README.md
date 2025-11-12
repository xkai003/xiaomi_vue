# CLAUDE.md

演示地址：https://xiaomi-vue.pages.dev/

## 项目概述

这是一个基于 Vue 3 的电商应用程序，复制了小米官网，使用 Vite 构建。该应用展示了各种产品类别、购物车功能、用户认证和多页面导航系统。

## 开发命令

### 核心开发
```bash
# 启动开发服务器
npm run dev

# 生产环境构建
npm run build

# 预览生产构建
npm run preview
```

### 项目设置
```bash
# 安装依赖
npm install
```

## 技术栈

- **框架**: Vue 3 with Composition API (`<script setup>`)
- **构建工具**: Vite 6.2.0
- **UI 库**:
  - Ant Design Vue 4.2.6
  - Element Plus 2.11.5
- **路由**: Vue Router 4.5.0
- **其他**: Element China Area Data 6.1.0 (用于地址选择)

## 项目架构

### 目录结构
```
src/
├── assets/          # 静态资源 (图片、视频)
├── components/      # 可复用组件
│   └── TopNavigation.vue  # 主导航头部
├── router/          # Vue Router 配置
│   └── index.js
├── views/          # 页面组件
│   ├── index/              # 主商城页面
│   ├── Official_Website/    # 官方品牌页面
│   ├── Xiaomi_HyperOS/      # 操作系统产品页面
│   ├── Xiaomi_Car/          # 汽车产品页面
│   ├── Cloud_Services/      # 云服务页面
│   ├── Xiaomi_phone/        # 手机分类及筛选
│   ├── Xiaomi15_series/     # 特定产品系列
│   ├── ProductDetails/      # 产品详情视图
│   ├── Shopping_Cart/       # 购物车和结算
│   ├── All_products/        # 所有产品目录
│   ├── ShippingAddress/     # 地址管理
│   ├── login_register/      # 认证页面
|   ├──  Account             # 个人信息页
├── App.vue         # 根组件
└── main.js        # 应用入口点
```

### 核心组件

#### 导航系统
- **TopNavigation.vue**: 全局头部，包含主导航、用户认证状态和购物车链接
- 使用 Vue Router 进行客户端路由
- 响应式设计，具有悬停效果和活动状态指示器
- 与 localStorage 集成用于用户会话管理

#### 路由架构
路由器对所有组件使用懒加载，主要部分如下：
- `/` - 主商城首页
- `/Official_Website` - 品牌信息
- `/Xiaomi_HyperOS` - 操作系统产品
- `/Xiaomi_Car` - 汽车产品
- `/Xiaomi_phone` - 带筛选���项的手机
- `/Shopping_Cart` - 电商功能
- `/login`, `/register` - 用户认证

#### 组件组织
每个主要部分都有自己的 `views/` 子目录，包含：
- `index.vue` - 主页面组件
- 模块化组件 (如 `Module_One.vue`, `Module_Two.vue`)
- 共享工具 (`Boottom_Navigation.vue`, `GOtop.vue`, `Boottom_word.vue`)

### 状态管理
- 使用 localStorage 进行用户认证持久化
- 没有集中式状态管理 (Vuex/Pinia) - 依赖组件状态和属性
- 用户认证状态在 TopNavigation 组件中管理

### 资源管理
- 图片按功能/类别组织在 `src/assets/` 中
- 支持 JPG、PNG 和 SVG 格式
- 组件中的直接路径引用



## 开发指南

### 组件结构
- 对新组件使用 `<script setup>` 语法
- 遵循 Vue 3 Composition API 模式
- 维护 scoped CSS 以防止样式冲突
- 使用描述性的组件和文件名

### 路由
- 所有路由使用动态导入的懒加载
- 路径名称与目录结构匹配，保持清晰
- 导航使用带有适当 `to` 属性的 `<router-link>` 组件

### 样式约定
- 所有组件中使用 scoped CSS
- CSS 类名使用 camelCase 和连字符的一致命名
- 全面的响应式设计考虑
- 悬停效果和过渡以获得更好的用户体验

### 认证流程
- 用户数据以 JSON 字符串形式存储在 localStorage 中
- TopNavigation 组件在挂载时检查认证状态
- 基于认证状态的条件渲染

## 常见开发任务

### 添加新页面
1. 在 `src/views/` 中创建新目录
2. 使用懒加载向 `src/router/index.js` 添加路由
3. 如需导航链接，更新 TopNavigation.vue
4. 创建 index.vue 作为主组件

### 添加新组件
1. 放置在适当的 `src/views/[section]/` 目录中
2. 使用 `<script setup>` 语法
3. 应用 scoped CSS
4. 在父组件中导入和使用

### 资源管理
- 将图片放在相关的 `src/assets/[category]/` 文件夹中
- 使用从 src 根目录开始的绝对路径引用
- 使用与组件使用匹配的描述性名称

## 测试和质量

项目当前没有配置测试框架。实施测试时：
- 考虑使用 Vue Test Utils 进行组件测试
- 使用 Cypress 或 Playwright 进行 e2e 测试
- 实施 ESLint 和 Prettier 以保持代码一致性

## 构建和部署

项目使用带有 Vue 插件的标准 Vite 配置。构建输出到 `dist/` 目录，可以部署到任何静态托管服务。
