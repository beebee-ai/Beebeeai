import { useState } from 'react';
import { Download } from 'lucide-react';

type CertificateDisplayProps = {
  certificate: { id: string; name: string; courseNumber?: string; imageUrl: string; imageUrlOriginal?: string };
};

export default function CertificateDisplay({ certificate }: CertificateDisplayProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const url = certificate.imageUrlOriginal || certificate.imageUrl;
    if (!url) return;
    try {
      setIsDownloading(true);
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = `证书_${certificate.name}_${certificate.courseNumber || ''}.png`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.open(url, '_blank', 'noopener,noreferrer');
    } finally {
      setIsDownloading(false);
    }
  };

  return <div className="flex flex-col items-center space-y-6">
    <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,105,0,0.18)] border border-[#ff6900]/25 group bg-[#0a0b0e]">
      <img src={certificate.imageUrl} alt={`${certificate.name} 的证书`} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
        <button type="button" onClick={handleDownload} disabled={isDownloading} className="flex items-center gap-2 px-8 py-4 bg-[#ff6900] hover:bg-[#ff6900]/90 disabled:bg-[#ff6900]/60 rounded-xl text-white font-medium transition-all shadow-[0_0_24px_rgba(255,105,0,0.5)]">
          {isDownloading ? <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />正在下载...</> : <><Download className="w-5 h-5" />下载高清证书图片</>}
        </button>
      </div>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-3 text-[#ffdbc0] text-sm bg-[#ff6900]/10 px-6 py-2 rounded-full border border-[#ff6900]/30">
      <span><strong className="mr-1 text-[#ffb380]">证书姓名</strong><span className="text-white font-mono">{certificate.name}</span></span>
      {certificate.courseNumber && <><span className="w-1 h-1 rounded-full bg-[#ff6900]/60" /><span><strong className="mr-1 text-[#ffb380]">课程编号</strong><span className="text-white font-mono">{certificate.courseNumber}</span></span></>}
    </div>
  </div>;
}
