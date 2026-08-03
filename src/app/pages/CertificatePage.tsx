import { Navigation } from '../components/Navigation';
import { Seo } from '../components/Seo';
import { useLanguage } from '../contexts/LanguageContext';
import CertificateQuery from '../components/CertificateQuery';

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
      <main className="pt-16 pb-16"><CertificateQuery /></main>
    </div>
  );
}
