import { ArrowUpRight, Layers3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';

export function StudentProjectsPage() {
  const { language } = useLanguage();
  const zh = language === 'ZH';
  const projects = homeContent.works.featured;
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学员项目案例',
    itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title.ZH, description: project.description.ZH, url: project.url, creator: { '@type': 'Person', name: project.team.ZH } } })),
  };

  return <div className="min-h-screen bg-[#0b0e13] text-white">
    <Seo title={zh ? 'BEEBEE AI 学员项目｜ALPHA / BETA 真实作品' : 'BEEBEE AI Student Projects | ALPHA & BETA'} description={zh ? '查看 BEEBEE AI ALPHA 与 BETA 学员完成的真实 AI 项目，了解学员背景、解决的问题、使用的 AI 能力与可访问成果。' : 'Explore real AI projects built by learners in BEEBEE AI ALPHA and BETA programs.'} path="/student-projects/" structuredData={schema} />
    <Navigation />
    <main className="pt-16">
      <section className="px-4 pt-16 md:pt-24 pb-12 md:pb-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <Link to="/#works" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">← {zh ? '返回首页' : 'Back home'}</Link>
          <div className="mt-10 flex items-center gap-3 text-orange-500"><Layers3 size={20} /><span className="text-xs font-mono tracking-[0.28em]">STUDENT PROJECTS</span></div>
          <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-semibold leading-tight">{zh ? <>不是练习题，<br /><span className="text-orange-500">是真实可访问的作品</span></> : <>Not exercises.<br /><span className="text-orange-500">Real products you can visit.</span></>}</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">{zh ? '学员从自身兴趣或真实问题出发，定义需求、组织 AI 工作流，并把想法转化为可以演示和使用的项目。' : 'Learners start from real interests and problems, define needs, orchestrate AI workflows and turn ideas into usable projects.'}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project, index) => {
            const tags = Object.values(project.tags).map(tag => t(tag, language));
            return <article key={project.url} className="group border-t border-white/15 pt-6">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10"><img src={project.images.main} alt={t(project.title, language)} loading={index < 4 ? 'eager' : 'lazy'} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" /></div>
                <div className="mt-6 flex items-start justify-between gap-5"><div><p className="text-xs font-mono tracking-wider text-orange-500">{t(project.badge, language)}</p><h2 className="mt-2 text-xl md:text-2xl font-semibold group-hover:text-orange-500 transition-colors">{t(project.title, language)}</h2></div><ArrowUpRight className="text-gray-500 group-hover:text-orange-500 shrink-0" /></div>
              </a>
              <div className="mt-4 flex items-start gap-2 text-sm text-gray-500"><Users size={16} className="mt-0.5 shrink-0" /><span>{t(project.team, language)} · {t(project.teamDetails, language)}</span></div>
              <p className="mt-4 text-gray-400 leading-7 line-clamp-3">{t(project.description, language)}</p>
              <div className="mt-5 flex flex-wrap gap-2">{tags.map(tag => <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs text-gray-300">{tag}</span>)}</div>
            </article>;
          })}
        </div>
      </section>
    </main>
  </div>;
}
