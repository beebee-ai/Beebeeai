/**
 * 语言检测流程可视化组件
 * 展示检测逻辑的流程图
 */

import React from 'react';
import { ChevronDown, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

export function LanguageDetectionFlow() {
  const steps = [
    {
      number: 1,
      title: 'localStorage',
      subtitle: '用户已选语言',
      description: '检查是否有保存的用户偏好',
      condition: 'localStorage.getItem("beebee_language_preference")',
      ifFound: '直接返回用户选择的语言',
      ifNotFound: '继续下一步',
      color: 'green',
      priority: '最高',
    },
    {
      number: 2,
      title: 'navigator.languages',
      subtitle: '浏览器语言设置',
      description: '检查浏览器语言列表',
      condition: '是否包含 zh-* 或 en-* 开头的语言',
      ifFound: 'zh-* → ZH, en-* → EN',
      ifNotFound: '继续下一步',
      color: 'blue',
      priority: '第二',
    },
    {
      number: 3,
      title: '时区兜底',
      subtitle: '根据时区判断',
      description: '检查系统时区',
      condition: 'UTC 偏移量是否为 +8',
      ifFound: 'UTC+8 → ZH, 其他 → EN',
      ifNotFound: '继续下一步',
      color: 'purple',
      priority: '第三',
    },
    {
      number: 4,
      title: '默认语言',
      subtitle: '兜底方案',
      description: '所有检测都失败时的保底',
      condition: '无条件',
      ifFound: '返回 ZH (中文)',
      ifNotFound: '-',
      color: 'orange',
      priority: '兜底',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; badge: string }> = {
      green: {
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        text: 'text-green-400',
        badge: 'bg-green-500/20 text-green-400',
      },
      blue: {
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        badge: 'bg-blue-500/20 text-blue-400',
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        badge: 'bg-purple-500/20 text-purple-400',
      },
      orange: {
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/30',
        text: 'text-orange-400',
        badge: 'bg-orange-500/20 text-orange-400',
      },
    };
    return colors[color];
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">智能语言检测流程</h2>
        <p className="text-gray-400">按优先级依次检测，一旦找到有效值即停止</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const colors = getColorClasses(step.color);
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.number}>
              {/* Step Card */}
              <div className={`relative p-6 rounded-lg border ${colors.bg} ${colors.border}`}>
                {/* Priority Badge */}
                <div className="absolute -top-3 left-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                    优先级: {step.priority}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Number Circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center`}>
                    <span className={`text-xl font-bold ${colors.text}`}>{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${colors.text} mb-1`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3">{step.subtitle}</p>
                    
                    <p className="text-gray-300 mb-4">{step.description}</p>

                    {/* Condition */}
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase">检测条件</p>
                          <p className="text-sm text-gray-300 font-mono">{step.condition}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                        {/* If Found */}
                        <div className="flex items-start gap-2 p-3 rounded bg-black/20 border border-white/5">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-gray-400 mb-1">✅ 匹配成功</p>
                            <p className="text-sm text-gray-300">{step.ifFound}</p>
                          </div>
                        </div>

                        {/* If Not Found */}
                        {step.ifNotFound !== '-' && (
                          <div className="flex items-start gap-2 p-3 rounded bg-black/20 border border-white/5">
                            <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-gray-400 mb-1">❌ 未匹配</p>
                              <p className="text-sm text-gray-300">{step.ifNotFound}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {!isLast && (
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                    <span className="text-xs text-gray-500 font-mono">未匹配，继续检测</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Summary */}
      <div className="mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-semibold text-white mb-3">💡 关键特性</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-orange-500">•</span>
            <span><strong>短路逻辑：</strong>一旦找到有效值立即返回，不继续检测</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">•</span>
            <span><strong>用户优先：</strong>用户手动选择的语言优先级最高</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">•</span>
            <span><strong>优雅降级：</strong>即使所有检测失败也有默认语言兜底</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-500">•</span>
            <span><strong>持久化：</strong>用户选择保存在 localStorage，下次访问自动应用</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
