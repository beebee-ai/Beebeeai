import { Language } from "../contexts/LanguageContext";

export const certificateContent = {
  hero: {
    title: {
      ZH: "证书查询",
      EN: "Certificate Verification",
    },
    subtitle: {
      ZH: "输入您的姓名获取官方认证与权威背书",
      EN: "Enter your name to verify your official certificate",
    },
  },
  form: {
    nameLabel: {
      ZH: "证书姓名",
      EN: "Certificate Name",
    },
    nameRequiredMark: {
      ZH: "*",
      EN: "*",
    },
    namePlaceholder: {
      ZH: "请输入真实姓名（例：San Zhang）",
      EN: "Please enter your full name (e.g. San Zhang)",
    },
    courseLabel: {
      ZH: "课程编号",
      EN: "Course ID",
    },
    courseOptionalNote: {
      ZH: "选填",
      EN: "Optional",
    },
    coursePlaceholder: {
      ZH: "请输入课程编号（例：SNBG01-251227）",
      EN: "Enter course ID (e.g. SNBG01-251227)",
    },
    submit: {
      ZH: "立即查询",
      EN: "Search Now",
    },
    loading: {
      ZH: "正在查询...",
      EN: "Searching...",
    },
  },
  result: {
    success: {
      ZH: "查询成功，为您找到 {count} 份有效证书",
      EN: "Success, found {count} valid certificate(s)",
    },
    notFoundTitle: {
      ZH: "未查询到相关证书",
      EN: "No Matching Certificate Found",
    },
    notFoundLine1: {
      ZH: "请核对您输入的「姓名」与「课程编号」是否准确。",
      EN: "Please double-check that your name and course ID are entered correctly.",
    },
    notFoundLine2: {
      ZH: "如有疑问，请联系助教或客服获取帮助。",
      EN: "If you still have issues, please contact the teaching assistant or support.",
    },
  },
  hints: {
    testDataPrefix: {
      ZH: "测试数据",
      EN: "Test Data",
    },
  },
  certificateInfo: {
    nameLabel: {
      ZH: "证书名称",
      EN: "Certificate Name",
    },
    courseLabel: {
      ZH: "课程编号",
      EN: "Course ID",
    },
  },
  download: {
    button: {
      ZH: "下载高清证书图片",
      EN: "Download HD Certificate",
    },
    loading: {
      ZH: "正在下载...",
      EN: "Downloading...",
    },
  },
  error: {
    generic: {
      ZH: "查询失败，请稍后重试",
      EN: "Search failed, please try again later",
    },
  },
};

export function t(
  content: { ZH: string; EN: string },
  language: Language,
): string {
  return content[language];
}

