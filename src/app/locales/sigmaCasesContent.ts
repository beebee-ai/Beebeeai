/**
 * 首页「咨询落地 · 三条工作流」板块。案例与数字口径来自 beesigma.com（脱敏案例 + 客户反馈），修改时请同步。
 */
type Text = { ZH: string; EN: string };

export type SigmaFlow = {
  code: string;
  name: Text;
  agents: Text[];
  caseTag: Text;
  caseTitle: Text;
  before: Text;
  after: Text;
  metric: Text;
  metricLabel: Text;
};

export const sigmaCasesContent = {
  eyebrow: { ZH: '咨询落地 · Sigma', EN: 'Consulting & Delivery · Sigma' },
  title: { ZH: '三条工作流，已在真实业务里跑起来', EN: 'Three workflows, already running in real businesses' },
  subtitle: {
    ZH: '来自新西兰与中国两地的交付项目。应客户要求隐去企业名称，保留完整流程细节。',
    EN: 'Delivered projects from New Zealand and China. Company names withheld at clients\' request; process details kept intact.',
  },
  flows: [
    {
      code: '01',
      name: { ZH: 'GTM 获客与培育', EN: 'GTM · Acquisition & nurturing' },
      agents: [{ ZH: 'AIV 执行官', EN: 'AIV Executive' }, { ZH: '市场雷达', EN: 'Market Radar' }, { ZH: '内容官', EN: 'Content Officer' }, { ZH: '猎手', EN: 'Hunter' }],
      caseTag: { ZH: '新西兰 · 国际教育集团 · 招生漏斗与顾问协同', EN: 'New Zealand · International education group · Enrolment funnel' },
      caseTitle: { ZH: '从咨询到注册，一条不断线的招生漏斗', EN: 'From enquiry to enrolment, one unbroken funnel' },
      before: { ZH: '咨询散在邮箱和各顾问手里，管理层月底才知道漏斗长什么样。', EN: 'Enquiries were scattered across inboxes and advisors; management only saw the funnel at month end.' },
      after: { ZH: '线索富化、ICP 打分、培育与移交全程在飞书完成，配置只是一张卡片。', EN: 'Lead enrichment, ICP scoring, nurturing and hand-off all run inside Lark, configured from a single card.' },
      metric: { ZH: '32 → 71', EN: '32 → 71' },
      metricLabel: { ZH: 'AI 可见度评分 · 获客流水线演示', EN: 'AI visibility score · acquisition pipeline demo' },
    },
    {
      code: '02',
      name: { ZH: 'CRM 转化与签约', EN: 'CRM · Conversion & closing' },
      agents: [{ ZH: '情报官', EN: 'Intelligence' }, { ZH: '方案师', EN: 'Proposal' }, { ZH: '跟单官', EN: 'Follow-up' }, { ZH: '交接官', EN: 'Handoff' }],
      caseTag: { ZH: '中国 · 留学咨询机构 · 顾问成交辅助与知识沉淀', EN: 'China · Study-abroad consultancy · Advisor closing assistant' },
      caseTitle: { ZH: '每位顾问身后，多了一个成交辅助', EN: 'Every advisor now has a closing assistant behind them' },
      before: { ZH: '背景匹配靠翻资料，签约经验留在资深顾问脑子里，人走就带走。', EN: 'Matching meant digging through files; closing know-how lived in senior advisors\' heads and left with them.' },
      after: { ZH: '客户摸底、同类案例调取、跟进时间线与关键承诺确认，销售全程不用打开 CRM。', EN: 'Prospect research, precedent cases, follow-up timeline and commitment confirmation, without the salesperson opening the CRM.' },
      metric: { ZH: '+50%', EN: '+50%' },
      metricLabel: { ZH: '顾问辅导效率提升 · 客户确认口径', EN: 'Advisor coaching efficiency · client-confirmed' },
    },
    {
      code: '03',
      name: { ZH: '财税 回款与合规', EN: 'Finance · Cash & compliance' },
      agents: [{ ZH: '单据官', EN: 'Document' }, { ZH: '对账官', EN: 'Reconciliation' }, { ZH: '催款官', EN: 'Collections' }, { ZH: '税务官', EN: 'Tax' }],
      caseTag: { ZH: '新西兰 · 建筑施工企业 · 应付发票与付款预警', EN: 'New Zealand · Construction company · Payables & payment alerts' },
      caseTitle: { ZH: '应付发票，不再靠人追着跑', EN: 'Payables no longer chased by hand' },
      before: { ZH: '发票人工录入，审批卡在谁那里没人知道，逾期了才被发现。', EN: 'Invoices keyed in by hand, approvals stuck with no one knowing where, overdue found too late.' },
      after: { ZH: '发票识别、审批提醒、付款追踪全在 Lark 里跑，一张财务仪表盘看全项目账目。', EN: 'Invoice recognition, approval reminders and payment tracking run in Lark, with one finance dashboard across projects.' },
      metric: { ZH: '逾期前', EN: 'Before due' },
      metricLabel: { ZH: '付款预警 · 月底对账不再熬夜', EN: 'Payment alerts · no more late-night month-end reconciliation' },
    },
  ] as SigmaFlow[],
  guardrail: { ZH: '人工确认点贯穿始终：报价折扣、写回订单、发票开出、一切申报，Agent 提请，人来拍板。', EN: 'Human checkpoints throughout: discounts, order write-backs, invoice issuance and every filing are proposed by agents and decided by people.' },
  ctaCases: { ZH: '查看全部 8 个脱敏案例', EN: 'See all 8 anonymised cases' },
  ctaDemo: { ZH: '看两支互动演示', EN: 'Watch the two interactive demos' },
  links: { cases: 'https://beesigma.com/cases', casesEn: 'https://beesigma.com/cases-en', demo: 'https://beesigma.com/#demo', demoEn: 'https://beesigma.com/en#demo' },
};
