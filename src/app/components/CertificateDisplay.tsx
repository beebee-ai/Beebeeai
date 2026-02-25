import React, { useState } from 'react';
import { Download } from 'lucide-react';

interface CertificateProps {
  certificate: {
    id: string;
    name: string;
    courseNumber: string;
    imageUrl: string;          // 网页展示图
    imageUrlOriginal?: string; // 高清原图，可选
  };
}

export default function CertificateDisplay({ certificate }: CertificateProps) {
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
      link.download = `证书_${certificate.name}_${certificate.courseNumber}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (e) {
      // 如果下载失败，可以考虑在这里加一个 toast 提示
      window.open(url, '_blank', 'noopener,noreferrer');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* 证书卡片，使用站点主题色橙色发光效果 */}
      <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,105,0,0.18)] border border-[#ff6900]/25 group bg-[#0a0b0e]">
        {/* 证书图片展示 */}
        <img
          src={certificate.imageUrl}
          alt={`${certificate.name} 的证书`}
          className="w-full h-auto object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* 悬浮下载遮罩层 */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
          <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-8 py-4 bg-[#ff6900] hover:bg-[#ff6900]/90 disabled:bg-[#ff6900]/60 disabled:cursor-wait rounded-xl text-white font-medium transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-[0_0_24px_rgba(255,105,0,0.5)]"
          >
            {isDownloading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                正在下载...
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                下载高清证书图片
              </>
            )}
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-[#ffdbc0] text-sm bg-[#ff6900]/10 px-6 py-2 rounded-full border border-[#ff6900]/30">
        <span>
          <span className="mr-1 text-[#ffb380] font-semibold">证书名称</span>
          <span className="text-white font-mono">{certificate.name}</span>
        </span>
        <span className="w-1 h-1 rounded-full bg-[#ff6900]/60"></span>
        <span>
          <span className="mr-1 text-[#ffb380] font-semibold">课程编号</span>
          <span className="text-white font-mono">{certificate.courseNumber}</span>
        </span>
      </div>
    </div>
  );
}
