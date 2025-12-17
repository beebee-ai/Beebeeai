# 智能语言检测系统

## 概述

BEEBEE网站实现了智能语言检测系统，能够根据用户的环境和偏好自动判断应该显示中文还是英文版本。

## 检测优先级

系统按照以下优先级依次检测，一旦找到有效值即停止：

```
1. localStorage 用户已选语言（最高优先级）
   ↓ 未设置
2. navigator.languages 浏览器语言设置
   ↓ 未匹配
3. 时区兜底（根据时区判断）
   ↓ 仍未确定
4. 默认语言（中文）
```

## 详细说明

### 1️⃣ localStorage - 用户已选语言

- **存储键**: `beebee_language_preference`
- **优先级**: 最高
- **触发条件**: 用户手动点击导航栏的语言切换按钮
- **持久性**: 永久保存在浏览器本地存储中

**示例**:
```javascript
// 用户点击 ZH/EN 按钮后
localStorage.setItem('beebee_language_preference', 'EN');
// 下次访问时直接使用 'EN'
```

### 2️⃣ navigator.languages - 浏览器语言设置

- **数据源**: 浏览器的语言偏好列表
- **优先级**: 第二
- **检测逻辑**: 遍历语言列表，查找中文或英文相关的语言代码

**匹配规则**:
- `zh`, `zh-CN`, `zh-TW`, `zh-HK` → 中文 (ZH)
- `en`, `en-US`, `en-GB`, `en-AU` → 英文 (EN)

**示例**:
```javascript
// 浏览器语言设置为 ['zh-CN', 'en-US']
navigator.languages // → 检测到 'zh-CN' → 返回 'ZH'

// 浏览器语言设置为 ['en-US', 'fr-FR']
navigator.languages // → 检测到 'en-US' → 返回 'EN'

// 浏览器语言设置为 ['ja-JP', 'ko-KR']
navigator.languages // → 未匹配 → 继续下一步检测
```

### 3️⃣ 时区兜底

- **数据源**: 用户的系统时区
- **优先级**: 第三
- **检测逻辑**: 根据UTC时区偏移量判断

**匹配规则**:
- UTC+8 (中国标准时间) → 中文 (ZH)
- 其他时区 → 英文 (EN)

**示例**:
```javascript
// 北京时间 (UTC+8)
new Date().getTimezoneOffset() // → -480 分钟 → +8 小时 → 'ZH'

// 纽约时间 (UTC-5)
new Date().getTimezoneOffset() // → 300 分钟 → -5 小时 → 'EN'

// 伦敦时间 (UTC+0)
new Date().getTimezoneOffset() // → 0 分钟 → 0 小时 → 'EN'
```

### 4️⃣ 默认语言

- **值**: 中文 (ZH)
- **优先级**: 最低（兜底）
- **触发条件**: 前面所有检测都未能确定语言时使用

## 使用方法

### 基础用法

```typescript
import { detectLanguage } from './utils/languageDetector';

// 获取检测到的语言
const language = detectLanguage(); // 'ZH' 或 'EN'
```

### 保存用户偏好

```typescript
import { saveLanguagePreference } from './utils/languageDetector';

// 用户切换语言时保存
saveLanguagePreference('EN');
```

### 清除用户偏好（用于测试）

```typescript
import { clearLanguagePreference } from './utils/languageDetector';

// 清除保存的语言偏好
clearLanguagePreference();
```

## 调试面板

网站右下角有一个橙色的 ℹ️ 图标，点击可以打开**语言检测调试面板**，可以查看：

- 🎯 当前检测结果
- 📊 各个检测步骤的状态
- 🔍 详细的浏览器和时区信息
- 🗑️ 清除用户偏好并重新检测的功能

## 典型场景

### 场景 1: 新用户（中国地区）

```
1. localStorage: ❌ 未设置
2. navigator.languages: ['zh-CN', 'en-US'] → ✅ 匹配 'zh-CN'
   → 结果: ZH
```

### 场景 2: 新用户（美国地区）

```
1. localStorage: ❌ 未设置
2. navigator.languages: ['en-US'] → ✅ 匹配 'en-US'
   → 结果: EN
```

### 场景 3: 新用户（日本地区，浏览器日文）

```
1. localStorage: ❌ 未设置
2. navigator.languages: ['ja-JP'] → ❌ 未匹配
3. 时区: UTC+9 → ✅ 非UTC+8 → EN
   → 结果: EN
```

### 场景 4: 回访用户（已手动选择英文）

```
1. localStorage: 'EN' → ✅ 已设置
   → 结果: EN (直接返回，不检查其他项)
```

### 场景 5: 极端情况（所有检测都失败）

```
1. localStorage: ❌ 未设置
2. navigator.languages: [] → ❌ 未匹配
3. 时区: 无法获取 → ❌ 失败
4. 默认语言: ✅ ZH
   → 结果: ZH
```

## 技术实现

### 文件结构

```
/src/app/utils/
  ├── languageDetector.ts          # 核心检测逻辑
  └── LANGUAGE_DETECTION.md        # 本文档

/src/app/components/
  ├── Navigation.tsx               # 导航栏（使用语言检测）
  └── LanguageDebugPanel.tsx       # 调试面板
```

### 状态管理

语言状态在 `Navigation.tsx` 中通过 React State 管理：

```typescript
const [language, setLanguage] = useState<Language>(() => detectLanguage());
```

使用函数式初始化（lazy initialization）确保检测逻辑只在组件首次挂载时执行一次。

## 最佳实践

1. **不要阻止用户选择**: 即使自动检测为中文，用户也应该能轻松切换到英文
2. **持久化用户选择**: 用户手动切换后，优先使用用户的选择
3. **提供明确反馈**: 通过调试面板让用户了解为什么显示某种语言
4. **优雅降级**: 即使所有检测都失败，也要有默认语言兜底

## 浏览器兼容性

- ✅ Chrome/Edge (Chromium): 完全支持
- ✅ Firefox: 完全支持
- ✅ Safari: 完全支持
- ✅ IE11: localStorage 和 时区检测支持，navigator.languages 需要 polyfill

## 未来扩展

可能的扩展方向：

1. 支持更多语言（日语、韩语等）
2. 根据IP地址地理位置检测（需要后端支持）
3. A/B测试不同的默认语言策略
4. 与用户账户系统集成（登录用户的语言偏好）

---

**最后更新**: 2025-12-17
**维护者**: BEEBEE AI Team
