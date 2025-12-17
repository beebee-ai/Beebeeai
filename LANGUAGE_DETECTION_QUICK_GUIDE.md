# 🌐 智能语言检测系统 - 快速指南

## 📋 系统概述

BEEBEE网站实现了智能语言检测，自动判断显示中文（ZH）还是英文（EN）。

## 🔍 检测优先级（从高到低）

```
1️⃣ localStorage（用户已选语言）
    ↓ 未设置
2️⃣ navigator.languages（浏览器语言）
    ↓ 未匹配
3️⃣ 时区兜底（UTC+8 → 中文，其他 → 英文）
    ↓ 失败
4️⃣ 默认语言（中文）
```

## 🎯 典型场景

| 场景 | localStorage | navigator.languages | 时区 | 结果 |
|------|-------------|---------------------|------|------|
| 中国新用户 | - | zh-CN | UTC+8 | **ZH** |
| 美国新用户 | - | en-US | UTC-5 | **EN** |
| 已选英文用户 | EN | zh-CN | UTC+8 | **EN** |
| 日本新用户 | - | ja-JP | UTC+9 | **EN** |

## 📁 文件结构

```
/src/app/
├── utils/
│   ├── languageDetector.ts              # 核心检测逻辑
│   ├── languageDetector.test.example.ts # 测试示例
│   └── LANGUAGE_DETECTION.md            # 详细文档
├── components/
│   ├── Navigation.tsx                   # 使用检测系统
│   └── LanguageDebugPanel.tsx           # 调试面板
└── App.tsx                              # 集成调试面板
```

## 🛠️ 核心API

### `detectLanguage()`
返回检测到的语言（'ZH' 或 'EN'）

```typescript
import { detectLanguage } from './utils/languageDetector';
const lang = detectLanguage(); // 'ZH' 或 'EN'
```

### `saveLanguagePreference(language)`
保存用户选择到 localStorage

```typescript
import { saveLanguagePreference } from './utils/languageDetector';
saveLanguagePreference('EN');
```

### `clearLanguagePreference()`
清除保存的语言偏好（主要用于测试）

```typescript
import { clearLanguagePreference } from './utils/languageDetector';
clearLanguagePreference();
```

## 🐛 调试工具

网站右下角有**橙色图标** ℹ️，点击打开调试面板，可以查看：

- 当前检测结果
- 各步骤的详细状态
- 浏览器和时区信息
- 清除偏好并重新检测

## 🧪 测试方法

### 方法1：使用调试面板（推荐）

1. 打开网站
2. 点击右下角橙色 ℹ️ 图标
3. 查看检测过程
4. 点击"清除用户偏好并重新检测"测试不同场景

### 方法2：浏览器控制台

```javascript
// 查看当前环境信息
console.log('浏览器语言:', navigator.languages);
console.log('时区偏移:', -new Date().getTimezoneOffset() / 60);
console.log('保存的偏好:', localStorage.getItem('beebee_language_preference'));

// 手动测试
localStorage.setItem('beebee_language_preference', 'EN');
location.reload(); // 重新加载页面

localStorage.removeItem('beebee_language_preference');
location.reload(); // 重新加载页面
```

### 方法3：修改浏览器设置

**Chrome/Edge:**
1. 设置 → 语言
2. 调整语言顺序（中文/英文放在第一位）
3. 清除localStorage后刷新页面

**Firefox:**
1. 首选项 → 常规 → 语言
2. 调整语言顺序
3. 清除localStorage后刷新页面

## 💡 使用建议

### ✅ 推荐做法

- 让系统自动检测初始语言
- 用户切换后立即保存偏好
- 提供明显的语言切换入口
- 使用调试面板了解检测过程

### ❌ 避免做法

- 强制用户使用某种语言
- 忽略用户的手动选择
- 频繁切换语言（造成混乱）
- 在检测失败时不提供兜底方案

## 🌍 浏览器支持

| 功能 | Chrome | Firefox | Safari | Edge |
|------|--------|---------|--------|------|
| localStorage | ✅ | ✅ | ✅ | ✅ |
| navigator.languages | ✅ | ✅ | ✅ | ✅ |
| 时区检测 | ✅ | ✅ | ✅ | ✅ |

## 📞 故障排除

### 问题：语言检测不准确

**解决方案：**
1. 打开调试面板查看检测过程
2. 检查浏览器语言设置
3. 清除localStorage后重试
4. 检查时区设置是否正确

### 问题：切换语言后没有保存

**解决方案：**
1. 检查浏览器是否启用localStorage
2. 查看控制台是否有错误
3. 确认 `saveLanguagePreference()` 被调用

### 问题：想要测试不同场景

**解决方案：**
1. 使用调试面板的"清除偏好"按钮
2. 修改浏览器语言设置
3. 使用浏览器的隐身/无痕模式（localStorage为空）

## 🔗 相关资源

- 详细文档: `/src/app/utils/LANGUAGE_DETECTION.md`
- 测试示例: `/src/app/utils/languageDetector.test.example.ts`
- 核心代码: `/src/app/utils/languageDetector.ts`
- 调试面板: `/src/app/components/LanguageDebugPanel.tsx`

---

**最后更新**: 2025-12-17  
**维护者**: BEEBEE AI Team
