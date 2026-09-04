import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const addresses = {
  ZH: ['中国四川省成都市高新区成都高新孵化园 1 号楼 A 座', 'B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand'],
  EN: ['B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand', 'Building A, No.1 Chengdu High-tech Incubation Park, Chengdu, Sichuan, China'],
};

export function SiteIdentityFooter() {
  const { language } = useLanguage();
  return <footer className="border-t border-white/10 px-4 py-10 bg-black/20" aria-label={language === 'ZH' ? 'BEEBEE AI 联系信息' : 'BEEBEE AI contact information'}>
    <div className="max-w-6xl mx-auto grid md:grid-cols-[.6fr_1.4fr] gap-7 md:gap-12 text-sm">
      <div>
        <p className="font-semibold text-white">BEEBEE AI</p>
        <a href="mailto:service@beebee.ai" className="mt-3 inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors"><Mail size={15} />service@beebee.ai</a>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 text-gray-500 leading-6">
        {addresses[language].map(address => <p key={address} className="flex items-start gap-2"><MapPin size={15} className="shrink-0 mt-1 text-orange-500" /><span>{address}</span></p>)}
      </div>
    </div>
  </footer>;
}
