/**
 * 语言检测系统测试示例
 * 这个文件展示了如何测试不同场景下的语言检测逻辑
 * 注意：这不是真正的测试文件，而是示例代码
 */

import { detectLanguage, saveLanguagePreference, clearLanguagePreference } from './languageDetector';

// ============================================
// 测试场景示例
// ============================================

/**
 * 场景 1: 新用户（中国地区，浏览器中文）
 * 预期结果: ZH
 */
function testScenario1_ChineseUser() {
  console.group('场景 1: 新用户（中国地区，浏览器中文）');
  
  // 清除之前的偏好设置
  clearLanguagePreference();
  
  // 模拟环境（实际环境由浏览器提供）:
  // - navigator.languages = ['zh-CN', 'en-US']
  // - 时区 = UTC+8
  
  const result = detectLanguage();
  console.log('检测结果:', result);
  console.log('预期结果: ZH');
  console.log('测试通过:', result === 'ZH' ? '✅' : '❌');
  
  console.groupEnd();
  return result === 'ZH';
}

/**
 * 场景 2: 新用户（美国地区，浏览器英文）
 * 预期结果: EN
 */
function testScenario2_AmericanUser() {
  console.group('场景 2: 新用户（美国地区，浏览器英文）');
  
  // 清除之前的偏好设置
  clearLanguagePreference();
  
  // 模拟环境:
  // - navigator.languages = ['en-US']
  // - 时区 = UTC-5
  
  const result = detectLanguage();
  console.log('检测结果:', result);
  console.log('预期结果: EN (浏览器语言) 或 EN (时区兜底)');
  console.log('测试通过:', result === 'EN' ? '✅' : '❌');
  
  console.groupEnd();
  return result === 'EN';
}

/**
 * 场景 3: 用户手动选择英文后再次访问
 * 预期结果: EN (从 localStorage 读取)
 */
function testScenario3_UserPreference() {
  console.group('场景 3: 用户手动选择英文后再次访问');
  
  // 模拟用户选择英文
  saveLanguagePreference('EN');
  
  // 即使浏览器是中文，也应该返回用户偏好
  const result = detectLanguage();
  console.log('检测结果:', result);
  console.log('localStorage 中的偏好:', localStorage.getItem('beebee_language_preference'));
  console.log('预期结果: EN');
  console.log('测试通过:', result === 'EN' ? '✅' : '❌');
  
  console.groupEnd();
  return result === 'EN';
}

/**
 * 场景 4: 用户从英文切换回中文
 * 预期结果: ZH (从 localStorage 读取)
 */
function testScenario4_SwitchBackToChinese() {
  console.group('场景 4: 用户从英文切换回中文');
  
  // 模拟用户先选择英文
  saveLanguagePreference('EN');
  console.log('第一次选择: EN');
  
  // 然后切换回中文
  saveLanguagePreference('ZH');
  console.log('切换后: ZH');
  
  const result = detectLanguage();
  console.log('检测结果:', result);
  console.log('预期结果: ZH');
  console.log('测试通过:', result === 'ZH' ? '✅' : '❌');
  
  console.groupEnd();
  return result === 'ZH';
}

/**
 * 场景 5: 清除偏好设置后重新检测
 * 预期结果: 根据浏览器/时区检测
 */
function testScenario5_ClearPreference() {
  console.group('场景 5: 清除偏好设置后重新检测');
  
  // 先设置一个偏好
  saveLanguagePreference('EN');
  console.log('设置偏好: EN');
  
  // 然后清除
  clearLanguagePreference();
  console.log('清除偏好');
  
  const result = detectLanguage();
  console.log('检测结果:', result);
  console.log('预期结果: 根据浏览器或时区检测');
  console.log('localStorage:', localStorage.getItem('beebee_language_preference'));
  
  console.groupEnd();
  return true;
}

// ============================================
// 运行所有测试
// ============================================

export function runAllTests() {
  console.log('\n🧪 开始运行语言检测测试...\n');
  
  const results = [
    testScenario1_ChineseUser(),
    testScenario2_AmericanUser(),
    testScenario3_UserPreference(),
    testScenario4_SwitchBackToChinese(),
    testScenario5_ClearPreference(),
  ];
  
  const passed = results.filter(r => r).length;
  const total = results.length;
  
  console.log('\n📊 测试结果汇总:');
  console.log(`通过: ${passed}/${total}`);
  console.log(passed === total ? '✅ 所有测试通过！' : '❌ 部分测试失败');
  
  // 清理
  clearLanguagePreference();
  
  return passed === total;
}

// ============================================
// 使用方法
// ============================================

/**
 * 在浏览器控制台中运行:
 * 
 * import { runAllTests } from './languageDetector.test.example';
 * runAllTests();
 * 
 * 或者单独测试某个场景:
 * 
 * import { testScenario1_ChineseUser } from './languageDetector.test.example';
 * testScenario1_ChineseUser();
 */

// ============================================
// 浏览器环境检测示例
// ============================================

/**
 * 查看当前浏览器环境信息
 */
export function inspectBrowserEnvironment() {
  console.group('🌐 浏览器环境信息');
  
  console.log('1️⃣ localStorage:');
  console.log('  - 保存的语言偏好:', localStorage.getItem('beebee_language_preference') || '未设置');
  
  console.log('\n2️⃣ 浏览器语言:');
  console.log('  - navigator.language:', navigator.language);
  console.log('  - navigator.languages:', navigator.languages);
  
  console.log('\n3️⃣ 时区信息:');
  const offset = -new Date().getTimezoneOffset() / 60;
  console.log('  - 时区:', Intl.DateTimeFormat().resolvedOptions().timeZone);
  console.log('  - UTC 偏移:', offset >= 0 ? `+${offset}` : offset);
  console.log('  - 是否为 UTC+8:', offset === 8 ? 'Yes (中国时区)' : 'No');
  
  console.log('\n4️⃣ 当前检测结果:');
  console.log('  - detectLanguage():', detectLanguage());
  
  console.groupEnd();
}

/**
 * 在控制台中运行:
 * 
 * import { inspectBrowserEnvironment } from './languageDetector.test.example';
 * inspectBrowserEnvironment();
 */
