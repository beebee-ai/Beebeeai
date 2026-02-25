import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

type SeedCertificate = {
  name: string;
  courseNumber: string; // 如 SNBG01-251227
  imageUrl: string;     // S3 上的网页展示图 URL
  studentInfo?: string;
  campType?: string;    // ALPHA / BETA
};

// TODO: 在这里填入你真实的 50+ 学员数据
const SEED_CERTIFICATES: SeedCertificate[] = [
  {
    name: 'Andy Li',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_AndyLi_16.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Chanjuan Pan',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ChanjuanPan_15.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Chris Zhou',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ChrisZhou_23.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Colin Zhu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ColinZhu_31.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Danyang Zhou',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_DanyangZhou_12.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Enze Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_EnzeWang_47.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Gary Jia',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_GaryJia_49.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Guoying Li',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_GuoyingLi_17.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Hengze Ye',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_HengzeYe_21.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Hui Hu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_HuiHu_18.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Jason Ge',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_JasonGe_40.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Jianjing Jin',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_Jianjing Jin_35.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Jiarun Chen',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_JiarunChen_45.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Jingjing Chen',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_JingjingChen_41.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Kaiqi Yang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_KaiqiYang_20.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Kevin Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_KevinWang_2.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Linjing Jiang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_LinjingJiang_37.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Map Shen',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_MapShen_7.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Peter Zhou',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_PeterZhou_13.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Pingchaun Ma',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_PingchaunMa_3.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Rachel Zhang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_RachelZhang_38.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Ruiqi Liang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_RuiqiLiang_43.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Runmin Zhang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_RunminZhang_46.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Shanshan Li',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ShanshanLi_6.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Shanshan Lu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ShanshanLu_25.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Shen Ai',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ShenAi_30.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Shuang Zhou',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ShuangZhou_10.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Silvia',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_Silvia_48.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Sophia Ding',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_SophiaDing_44.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Tianqi Wu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_TianqiWu_11.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Tianxiao Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_TianxiaoWang_28.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Tony Yan',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_TonyYan_39.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Wenjun Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_WenjunWang_4.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Wenyong Zhang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_WenyongZhang_29.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xiaodong Yu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XiaodongYu_14.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xiaonan Peng',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XiaonanPeng_27.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xiaoxin Wu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XiaoxinWu_36.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xin Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XinWang_24.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xuefei Liu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XuefeiLiu_1.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Xuefeng Li',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_XuefengLi_51.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yakai Huang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YakaiHuang_9.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yan Cui',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YanCui_52.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yang Zhe',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YangZhe_53.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yezhen Zheng',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YezhenZheng_8.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yicong Ma',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YicongMa_19.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yipeng Zhu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YipengZhu_5.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yiteng Tian',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YitengTian_26.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yiwei Gu',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YiweiGu_42.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yuanyuan Zhang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YuanyuanZhang_54.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Yuxing Chen',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_YuxingChen_34.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Zhengwei Wei',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ZhengweiWei_33.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Zhi Yang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ZhiYang_50.png',
    studentInfo: '',
    campType: 'BETA',
  },
  {
    name: 'Zining Wang',
    courseNumber: 'SNBG01-251227',
    imageUrl: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/beebee-ai/certificates/original/BG01/%E8%AF%81%E4%B9%A6_ZiningWang_22.png',
    studentInfo: '',
    campType: 'BETA',
  }
];

export function CertificateUploader() {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  if (!import.meta.env.DEV) {
    // 仅在开发环境使用，避免线上被误触发
    return null;
  }

  const handleUpload = async () => {
    if (!SEED_CERTIFICATES.length) {
      setMessage('没有待上传的数据，请先在代码中填写 SEED_CERTIFICATES。');
      return;
    }

    setIsUploading(true);
    setMessage(null);

    try {
      const colRef = collection(db, 'certificates');

      for (const cert of SEED_CERTIFICATES) {
        const name = cert.name.trim();
        const courseNumber = cert.courseNumber.trim();

        await addDoc(colRef, {
          name,
          nameLower: name.toLowerCase(),
          courseNumber,
          courseNumberUpper: courseNumber.toUpperCase(),
          campType: cert.campType ?? null,
          studentInfo: cert.studentInfo ?? null,
          imageUrl: cert.imageUrl,
          imageUrlOriginal: cert.imageUrlOriginal||cert.imageUrl,
          createdAt: new Date().toISOString(),
        });
      }

      setMessage(`成功上传 ${SEED_CERTIFICATES.length} 条证书数据。`);
    } catch (err: any) {
      setMessage(err.message ?? '上传失败，请检查控制台。');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="mt-8 border border-yellow-500/40 bg-yellow-500/5 rounded-xl p-4 text-sm text-yellow-200 space-y-2">
      <div className="font-medium">开发工具：一键上传证书数据到 Firestore</div>
      <p className="text-yellow-300/80">
        仅在开发环境显示。请在代码中填好 <code>SEED_CERTIFICATES</code> 后点击按钮执行一次，导入全部学员数据。
      </p>
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className="mt-2 inline-flex items-center px-3 py-2 rounded bg-yellow-500 text-black font-medium disabled:opacity-60"
      >
        {isUploading ? '正在上传...' : '一键上传证书数据'}
      </button>
      {message && <div className="mt-2">{message}</div>}
    </div>
  );
}

