import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import CertificateQuery from '../components/CertificateQuery';
import { Award, CheckCircle2, Mail } from 'lucide-react';

export function CertificatePage() {
  const { language } = useLanguage();
  const zh = language === 'ZH';
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: 'var(--bg-deep)' }}>
      <Seo
        title={zh ? 'BEEBEE AI 证书查询｜学习成果与能力证明' : 'BEEBEE AI Certificate Verification'}
        description={zh ? '查询并了解 BEEBEE AI 实训营学习证书。证书用于记录学习者完成的课程与项目成果，具体信息以证书记录为准。' : 'Verify and learn about BEEBEE AI training certificates and the learning and project outcomes they record.'}
        path="/certificate/"
      />
      <Navigation />
      <main className="pt-16 pb-24">
        <CertificateQuery />
        <section className="px-4 mt-0 md:mt-2" aria-labelledby="certificate-meaning">
          <div className="max-w-6xl mx-auto border-t border-white/10 pt-10 md:pt-12">
            <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-start">
              <div>
                <div className="inline-flex items-center gap-2 text-orange-500 font-mono tracking-[0.22em] text-xs mb-7">
                  <Award size={17} aria-hidden="true" /> CERTIFICATE
                </div>
                <h2 id="certificate-meaning" className="font-semibold leading-[1.12] mb-7" style={{ fontSize: 'clamp(34px, 5vw, 60px)' }}>
                  {zh ? <>让学习成果<br /><span className="text-orange-500">可验证、可追溯</span></> : <>Make learning outcomes<br /><span className="text-orange-500">verifiable and traceable</span></>}
                </h2>
                <p className="text-gray-400 leading-8 text-base md:text-lg max-w-2xl">
                  {zh ? 'BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。每张证书均通过对应编号关联官方记录。' : 'BEEBEE AI certificates record the training camp, learning journey and project outcomes completed by each learner. Every certificate ID is linked to an official record.'}
                </p>
              </div>

              <div className="lg:pt-10">
                <p className="text-sm text-gray-500 tracking-wider mb-6">{zh ? '证书可证明什么' : 'WHAT A CERTIFICATE RECORDS'}</p>
                <ul className="border-y border-white/10 divide-y divide-white/10">
                  {[
                    zh ? '参与的实训营与学习路线' : 'Training camp and learning path',
                    zh ? '完成的学习阶段与项目实践' : 'Completed learning stages and projects',
                    zh ? '证书编号对应的官方记录' : 'Official record linked to the certificate ID',
                  ].map(item => <li className="flex items-center gap-4 py-5 text-gray-200" key={item}><CheckCircle2 className="text-orange-500 shrink-0" size={20} aria-hidden="true" /><span>{item}</span></li>)}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm text-gray-500 max-w-sm">{zh ? '需要人工核验证书？请发送证书编号与持证人姓名。' : 'Need manual verification? Send the certificate ID and holder name.'}</p>
                  <a className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-orange-500" href="mailto:service@beebee.ai"><Mail size={17} aria-hidden="true" />service@beebee.ai</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
