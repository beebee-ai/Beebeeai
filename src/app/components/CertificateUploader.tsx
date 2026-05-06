import React, { useState } from 'react';
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { buildCertificateSearchFields } from '../utils/certificateNormalization';

type SeedCertificate = {
  name: string;
  courseNumber: string; // 如 SNBG01-251227
  imageUrl: string;     // S3 上的网页展示图 URL
  imageUrlOriginal?: string;
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
  const [isMigrating, setIsMigrating] = useState(false);
  const [isDeduplicating, setIsDeduplicating] = useState(false);
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
        const searchFields = buildCertificateSearchFields(name, courseNumber);

        await addDoc(colRef, {
          name,
          courseNumber,
          ...searchFields,
          campType: cert.campType ?? null,
          studentInfo: cert.studentInfo ?? null,
          imageUrl: cert.imageUrl,
          imageUrlOriginal: cert.imageUrlOriginal ?? cert.imageUrl,
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

  const handleBackfill = async () => {
    setIsMigrating(true);
    setMessage(null);

    try {
      const snap = await getDocs(collection(db, 'certificates'));
      let updatedCount = 0;

      for (const snapshot of snap.docs) {
        const data = snapshot.data() as {
          name?: string;
          nameLower?: string;
          courseNumber?: string;
          courseNumberUpper?: string;
        };

        const nameSource = data.name || data.nameLower || '';
        const courseSource = data.courseNumber || data.courseNumberUpper || '';
        const searchFields = buildCertificateSearchFields(nameSource, courseSource);

        await updateDoc(doc(db, 'certificates', snapshot.id), searchFields);
        updatedCount += 1;
      }

      setMessage(`成功补齐 ${updatedCount} 条证书的规范化查询字段。`);
    } catch (err: any) {
      setMessage(err.message ?? '补齐失败，请检查控制台。');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleDeduplicate = async () => {
    setIsDeduplicating(true);
    setMessage(null);

    try {
      const snap = await getDocs(collection(db, 'certificates'));
      const groups = new Map<
        string,
        Array<{
          id: string;
          createdAt?: string;
        }>
      >();

      snap.docs.forEach((snapshot) => {
        const data = snapshot.data() as {
          name?: string;
          nameCompact?: string;
          nameLower?: string;
          courseNumber?: string;
          courseNumberNormalized?: string;
          courseNumberUpper?: string;
          imageUrl?: string;
          imageUrlOriginal?: string;
          createdAt?: string;
        };

        const searchFields = buildCertificateSearchFields(
          data.name || data.nameLower || '',
          data.courseNumber || data.courseNumberUpper || ''
        );

        const dedupeKey = [
          searchFields.nameCompact,
          searchFields.courseNumberNormalized,
          data.imageUrlOriginal || data.imageUrl || '',
        ].join('::');

        const currentGroup = groups.get(dedupeKey) ?? [];
        currentGroup.push({
          id: snapshot.id,
          createdAt: data.createdAt,
        });
        groups.set(dedupeKey, currentGroup);
      });

      let deletedCount = 0;

      for (const duplicates of groups.values()) {
        if (duplicates.length < 2) continue;

        duplicates.sort((a, b) => {
          const aTime = a.createdAt ? Date.parse(a.createdAt) : Number.POSITIVE_INFINITY;
          const bTime = b.createdAt ? Date.parse(b.createdAt) : Number.POSITIVE_INFINITY;
          return aTime - bTime;
        });

        const [, ...toDelete] = duplicates;

        for (const item of toDelete) {
          await deleteDoc(doc(db, 'certificates', item.id));
          deletedCount += 1;
        }
      }

      if (deletedCount) {
        setMessage(`成功清理 ${deletedCount} 条重复证书，已为每组重复记录保留 1 条。`);
      } else {
        setMessage('未发现重复证书，无需清理。');
      }
    } catch (err: any) {
      setMessage(err.message ?? '清理失败，请检查控制台。');
    } finally {
      setIsDeduplicating(false);
    }
  };

  return (
    <div className="mt-8 border border-yellow-500/40 bg-yellow-500/5 rounded-xl p-4 text-sm text-yellow-200 space-y-2">
      <div className="font-medium">开发工具：证书数据维护</div>
      <p className="text-yellow-300/80">
        仅在开发环境显示。上传按钮会新增文档；补齐和清理按钮会处理现有文档。
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleUpload}
          disabled={isUploading || isMigrating || isDeduplicating}
          className="mt-2 inline-flex items-center px-3 py-2 rounded bg-yellow-500 text-black font-medium disabled:opacity-60"
        >
          {isUploading ? '正在上传...' : '一键上传证书数据（新增）'}
        </button>
        <button
          onClick={handleBackfill}
          disabled={isUploading || isMigrating || isDeduplicating}
          className="mt-2 inline-flex items-center px-3 py-2 rounded bg-white/90 text-black font-medium disabled:opacity-60"
        >
          {isMigrating ? '正在补齐...' : '一键补齐查询字段'}
        </button>
        <button
          onClick={handleDeduplicate}
          disabled={isUploading || isMigrating || isDeduplicating}
          className="mt-2 inline-flex items-center px-3 py-2 rounded bg-red-500 text-white font-medium disabled:opacity-60"
        >
          {isDeduplicating ? '正在清理...' : '一键清理重复证书'}
        </button>
      </div>
      {message && <div className="mt-2">{message}</div>}
    </div>
  );
}

