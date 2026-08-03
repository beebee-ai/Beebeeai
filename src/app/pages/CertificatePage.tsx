import { Award, CheckCircle2, Mail } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';

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
      <main className="px-4 pt-36 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-start">
            <section>
              <div className="inline-flex items-center gap-2 text-orange-500 font-mono tracking-[0.2em] text-sm mb-6"><Award size={18} /> CERTIFICATE</div>
              <h1 className="font-semibold leading-tight mb-6" style={{ fontSize: 'clamp(38px, 7vw, 68px)' }}>
                {zh ? <>让学习成果<br/><span className="text-orange-500">可验证、可追溯</span></> : <>Make learning outcomes<br/><span className="text-orange-500">verifiable</span></>}
              </h1>
              <p className="text-gray-400 leading-8 max-w-2xl text-lg">
                {zh ? 'BEEBEE AI 证书用于记录学习者参与的实训营、完成的学习过程与项目成果。我们正在完善在线查询能力。' : 'BEEBEE AI certificates record the training camp, learning journey and project outcomes completed by each learner. Online verification is being improved.'}
              </p>
            </section>
            <aside className="border border-white/10 rounded-2xl p-7 md:p-9 bg-white/[0.025]">
              <h2 className="text-xl font-semibold mb-6">{zh ? '证书可证明什么' : 'What a certificate records'}</h2>
              <ul className="space-y-5 text-gray-300">
                {[zh ? '参与的实训营与学习路线' : 'Training camp and learning path', zh ? '完成的学习阶段与项目实践' : 'Completed learning stages and projects', zh ? '证书编号对应的官方记录' : 'Official record tied to its certificate ID'].map(text => <li className="flex gap-3" key={text}><CheckCircle2 className="text-orange-500 shrink-0" size={20}/><span>{text}</span></li>)}
              </ul>
              <div className="mt-8 pt-7 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4">{zh ? '需要人工核验证书？请发送证书编号与持证人姓名。' : 'Need manual verification? Send the certificate ID and holder name.'}</p>
                <a className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400" href="mailto:service@beebee.ai"><Mail size={18}/> service@beebee.ai</a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
