vue-project

Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```

Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 超市商品关联分析系统 前端部分

基于 Vue + Element UI

## 功能目标与界面结构
- 频繁项集挖掘页面（基于 FP-Growth）：输入支持度阈值、启动分析、查看频繁项集、导出CSV
- 智能商品推荐页面（基于深度学习模型）：输入已购买商品集合+推荐数量 K，返回推荐商品及置信度

### 频繁项集分析页面
- 输入区：
支持度阈值输入框（数字）
「开始分析」按钮
- 输出区：
频繁项集表格（频繁项 + 支持度）
支持导出为 CSV（按钮）

### 智能推荐页面
- 输入区：
商品集合输入框（多选下拉框）
推荐商品数量 K（数字框）
「获取推荐」按钮
- 输出区：
推荐商品表格（商品名称 + 置信度）