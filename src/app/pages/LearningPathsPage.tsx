import { ArrowRight, Check, Code2, GraduationCap, Landmark, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';

const paths = [
  {
    key: 'alpha', icon: GraduationCap, eyebrow: 'ALPHA', href: 'https://bee-alpha.com/', accent: 'orange',
    zh: { title: '青少年 AI 项目实训', audience: '12–19 岁，希望从零开始或继续进阶的青少年', duration: 'Genesis：6 周约 18 小时；Odyssey：6 周约 27 小时', outcome: '完成可展示的 AI 项目，建立提问、工作流与产品表达能力', requirement: 'Genesis 可零基础；Odyssey 建议具备一定编程或工程经验' },
    en: { title: 'AI projects for youth', audience: 'Ages 12–19, from first steps to advanced practice', duration: 'Genesis: 18 hours over 6 weeks; Odyssey: 27 hours over 6 weeks', outcome: 'Build a demonstrable AI project and strengthen questioning, workflow and product communication', requirement: 'Genesis welcomes beginners; Odyssey suits learners with some coding or engineering experience' },
  },
  {
    key: 'beta', icon: Code2, eyebrow: 'BETA', href: 'https://bee-beta.com/', accent: 'cyan',
    zh: { title: '成人与工程项目实训', audience: '18 岁以上大学生、研究生、职场人士与工程学习者', duration: 'Galaxy、Cosmos、Infinity：约 15 / 24 / 36 小时', outcome: '围绕真实需求完成 AI Native 产品、全栈工程与市场验证', requirement: '根据项目目标选择阶段；进阶路线更适合有产品或工程目标的人' },
    en: { title: 'AI projects for adults and builders', audience: 'University students, professionals and builders aged 18+', duration: 'Galaxy, Cosmos and Infinity: approximately 15 / 24 / 36 hours', outcome: 'Develop AI-native products through full-stack delivery and market validation', requirement: 'Choose by project goal; advanced tracks suit learners with product or engineering ambitions' },
  },
];

export function LearningPathsPage() {
  const { language } = useLanguage();
  const zh = language === 'ZH';
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学习路线',
    itemListElement: paths.map((path, index) => ({ '@type': 'ListItem', position: index + 1, name: `BEEBEE AI ${path.eyebrow} 实训营`, url: path.href })),
  };

  return <div className="min-h-screen bg-[#0b0e13] text-white">
    <Seo title={zh ? 'ALPHA / BETA 怎么选｜BEEBEE AI 学习路线' : 'Choose ALPHA or BETA | BEEBEE AI Learning Paths'} description={zh ? '比较 BEEBEE AI ALPHA 与 BETA 实训营的适合人群、学习时长、基础要求和项目成果，找到适合自己的 AI 项目制学习路线。' : 'Compare the audience, duration, requirements and outcomes of BEEBEE AI ALPHA and BETA training paths.'} path="/ai-learning-paths/" structuredData={schema} />
    <Navigation />
    <main className="pt-16">
      <section className="px-4 pt-16 md:pt-24 pb-12 md:pb-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <Link to="/#platform" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">← {zh ? '返回首页' : 'Back home'}</Link>
          <p className="mt-10 text-xs font-mono tracking-[0.28em] text-orange-500">AI LEARNING PATHS</p>
          <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-semibold leading-tight">{zh ? <>找到适合你的<br /><span className="text-orange-500">AI 项目学习路线</span></> : <>Find your path to<br /><span className="text-orange-500">building with AI</span></>}</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">{zh ? 'ALPHA 与 BETA 都以真实项目为核心。区别不在“谁更高级”，而在年龄阶段、已有基础和希望完成的成果。' : 'Both ALPHA and BETA center on real projects. The right choice depends on your stage, experience and intended outcome.'}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
          {paths.map(path => {
            const copy = zh ? path.zh : path.en; const Icon = path.icon;
            const color = path.accent === 'orange' ? 'text-orange-500 border-orange-500/30' : 'text-cyan-400 border-cyan-400/30';
            return <article key={path.key} className="bg-[#11151b] border border-white/10 rounded-3xl p-6 md:p-9 flex flex-col">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${color}`}><Icon size={24} /></div>
              <p className={`mt-8 text-xs font-mono tracking-[0.28em] ${color.split(' ')[0]}`}>{path.eyebrow}</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold">{copy.title}</h2>
              <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {[[zh ? '适合谁' : 'For', copy.audience], [zh ? '学习时长' : 'Duration', copy.duration], [zh ? '基础要求' : 'Requirements', copy.requirement], [zh ? '项目成果' : 'Outcome', copy.outcome]].map(([label, value]) => <div key={label} className="py-5"><dt className="text-xs tracking-wider text-gray-500 mb-2">{label}</dt><dd className="text-gray-200 leading-7">{value}</dd></div>)}
              </dl>
              <a href={path.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-orange-500 hover:text-orange-400">{zh ? `进入 ${path.eyebrow} 实训营网站` : `Visit ${path.eyebrow}`} <ArrowRight size={18} /></a>
            </article>;
          })}
        </div>
      </section>

      <section className="px-4 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-12 grid md:grid-cols-[.8fr_1.2fr] gap-10">
          <div><Users className="text-orange-500" /><h2 className="mt-5 text-2xl md:text-3xl font-semibold">{zh ? '还不确定怎么选？' : 'Still deciding?'}</h2></div>
          <div className="space-y-4 text-gray-400 leading-7">
            {[zh ? '12–19 岁且希望建立 AI 项目基础，优先了解 ALPHA。' : 'Ages 12–19: start with ALPHA.', zh ? '18 岁以上并希望完成产品或工程交付，优先了解 BETA。' : 'Ages 18+ with product or engineering goals: explore BETA.', zh ? '企业知识库、Agent 或流程落地需求，请直接进入 BEE Sigma。' : 'For enterprise knowledge, agents and workflows, visit BEE Sigma.'].map(item => <p key={item} className="flex gap-3"><Check className="text-orange-500 shrink-0 mt-1" size={18} />{item}</p>)}
            <div className="pt-3 flex flex-wrap gap-5"><Link to="/#contact" className="text-white hover:text-orange-500">{zh ? '联系学习顾问' : 'Contact an advisor'} →</Link><a href="https://beesigma.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-500 inline-flex items-center gap-2"><Landmark size={17} />{zh ? '企业 AI 咨询' : 'Enterprise AI'}</a></div>
          </div>
        </div>
      </section>
    </main>
  </div>;
}
