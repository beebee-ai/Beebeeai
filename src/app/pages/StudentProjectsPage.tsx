import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Layers3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import { homeContent, t } from '../locales/homeContent';

type ProjectFilter = 'all' | 'alpha' | 'beta';

export function StudentProjectsPage() {
  const { language } = useLanguage();
  const zh = language === 'ZH';
  const projects = homeContent.works.featured;
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const projectType = (badge: string): Exclude<ProjectFilter, 'all'> => badge.toUpperCase().includes('BETA') ? 'beta' : 'alpha';
  const counts = {
    all: projects.length,
    alpha: projects.filter(project => projectType(project.badge.ZH) === 'alpha').length,
    beta: projects.filter(project => projectType(project.badge.ZH) === 'beta').length,
  };
  const visibleProjects = filter === 'all' ? projects : projects.filter(project => projectType(project.badge.ZH) === filter);
  const filters: { value: ProjectFilter; zh: string; en: string }[] = [
    { value: 'all', zh: '全部案例', en: 'All projects' },
    { value: 'alpha', zh: 'ALPHA 青少年', en: 'ALPHA Youth' },
    { value: 'beta', zh: 'BETA 成人 / 工程', en: 'BETA Adult / Builder' },
  ];
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'BEEBEE AI 学员项目案例',
    itemListElement: projects.map((project, index) => ({ '@type': 'ListItem', position: index + 1, item: { '@type': 'CreativeWork', name: project.title.ZH, description: project.description.ZH, url: project.url, creator: { '@type': 'Person', name: project.team.ZH } } })),
  };

  return <div className="min-h-screen bg-[#0b0e13] text-white">
    <Seo title={zh ? 'BEEBEE AI 学员项目｜ALPHA / BETA 真实作品' : 'BEEBEE AI Student Projects | ALPHA & BETA'} description={zh ? '查看 BEEBEE AI ALPHA 与 BETA 学员完成的真实 AI 项目，了解学员背景、解决的问题、使用的 AI 能力与可访问成果。' : 'Explore real AI projects built by learners in BEEBEE AI ALPHA and BETA programs.'} path="/student-projects/" structuredData={schema} />
    <Navigation />
    <main className="pt-16">
      <section className="px-4 pt-12 md:pt-20 pb-10 md:pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/#works" className="text-sm text-gray-500 hover:text-orange-500 transition-colors">← {zh ? '返回首页' : 'Back home'}</Link>
          <div className="mt-10">
            <div>
              <div className="flex items-center gap-3 text-orange-500"><Layers3 size={20} /><span className="text-xs font-mono tracking-[0.28em]">STUDENT PROJECTS</span></div>
              <h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-semibold leading-[1.12]">{zh ? <>不是练习题，<br /><span className="text-orange-500">是真实可访问的作品</span></> : <>Not exercises.<br /><span className="text-orange-500">Real products you can visit.</span></>}</h1>
              <p className="mt-6 max-w-3xl text-base md:text-lg text-gray-400 leading-8">{zh ? '从真实问题出发，经历需求定义、AI 协作与产品交付。这里记录的不只是结果，也是一条条可验证的成长路径。' : 'From real problems through scoping, AI collaboration and product delivery. Each project records a verifiable path of growth.'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10 md:mb-14">
            <div className="flex flex-wrap gap-2" role="group" aria-label={zh ? '筛选项目类型' : 'Filter project type'}>
              {filters.map(item => <button key={item.value} type="button" onClick={() => setFilter(item.value)} aria-pressed={filter === item.value} className={`px-4 py-2.5 rounded-full border text-sm transition-colors focus-visible:outline-2 focus-visible:outline-orange-500 ${filter === item.value ? 'bg-orange-500 border-orange-500 text-white' : 'border-white/10 text-gray-400 hover:text-white hover:border-white/30'}`}>{zh ? item.zh : item.en}<span className={`ml-2 font-mono text-xs ${filter === item.value ? 'text-white/75' : 'text-gray-600'}`}>{counts[item.value]}</span></button>)}
            </div>
            <p className="text-sm text-gray-500">{zh ? `当前展示 ${visibleProjects.length} 个可访问项目` : `Showing ${visibleProjects.length} accessible projects`}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {visibleProjects.map((project, index) => {
              const tags = Object.values(project.tags).map(tag => t(tag, language));
              const type = projectType(project.badge.ZH);
              const featured = index === 0;
              return <article key={project.url} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#11151b] hover:border-white/25 transition-colors ${featured ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <div className={featured ? 'lg:grid lg:grid-cols-[1.15fr_.85fr] h-full' : 'h-full flex flex-col'}>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={`relative block overflow-hidden bg-[#080a0e] ${featured ? 'min-h-[260px] md:min-h-[360px]' : 'aspect-[16/10]'}`}>
                    <img src={project.images.main} alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-35" aria-hidden="true" />
                    <img src={project.images.main} alt={t(project.title, language)} loading={index < 4 ? 'eager' : 'lazy'} className="relative z-10 w-full h-full object-contain p-1 group-hover:scale-[1.025] transition-transform duration-500" />
                    <span className="absolute z-20 top-4 left-4 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur text-[11px] font-mono tracking-wider text-white border border-white/10">{type.toUpperCase()}</span>
                    <span className="absolute z-20 bottom-4 right-4 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={19} /></span>
                  </a>
                  <div className={`p-5 md:p-6 flex flex-col ${featured ? 'justify-center' : 'flex-1'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div><p className={`text-[11px] font-mono tracking-wider ${type === 'alpha' ? 'text-orange-500' : 'text-cyan-400'}`}>{t(project.badge, language)}</p><h2 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} mt-2 font-semibold leading-snug group-hover:text-orange-500 transition-colors`}>{t(project.title, language)}</h2></div>
                      <span className="font-mono text-xs text-gray-700">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="mt-5 pt-4 border-t border-white/10 flex items-start gap-2 text-sm text-gray-500"><Users size={15} className="mt-0.5 shrink-0" /><span>{t(project.team, language)}<span className="block mt-1 text-gray-600">{t(project.teamDetails, language)}</span></span></div>
                    <p className={`mt-4 text-sm text-gray-400 leading-6 ${featured ? 'line-clamp-5' : 'line-clamp-3'}`}>{t(project.description, language)}</p>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{tags.map(tag => <span key={tag} className="inline-flex items-center gap-1.5 text-xs text-gray-400"><CheckCircle2 size={13} className={type === 'alpha' ? 'text-orange-500' : 'text-cyan-400'} />{tag}</span>)}</div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 pt-4 border-t border-white/10 inline-flex items-center justify-between text-sm text-white hover:text-orange-500 transition-colors">{zh ? '访问项目' : 'Visit project'} <ArrowUpRight size={17} /></a>
                  </div>
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>
    </main>
  </div>;
}
