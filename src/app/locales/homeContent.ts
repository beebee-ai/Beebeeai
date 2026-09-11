/**
 * 首页双语内容配置
 */

import { Language } from "../contexts/LanguageContext";

export const homeContent = {
  // Hero Section
  hero: {
    eyebrow: {
      ZH: "BEEBEE AI · 企业 AI 陪跑专家",
      EN: "BEEBEE AI · Enterprise AI Partner",
    },
    titleLine1: {
      ZH: "从第一个 Agent\u00A0上线，",
      EN: "From the first agent going live,",
    },
    titleLine2: {
      ZH: "到\u00A0AI\u00A0真正进入|企业日常业务。",
      EN: "to AI running in your daily business.",
    },
    subtitle: {
      ZH: "两条业务线，一条成长路径：教育培训（Alpha、Beta）培养会用\u00A0AI\u00A0做事的人，咨询落地（Sigma）陪企业把\u00A0AI\u00A0跑进日常业务。",
      EN: "Two lines of business, one growth path: training (Alpha, Beta) develops people who get things done with AI; consulting and delivery (Sigma) walks enterprises from the first agent to AI in daily operations.",
    },
    paths: [
      {
        code: "Alpha",
        stage: { ZH: "教育培训 · 入门", EN: "Training · Beginner" },
        tagline: { ZH: "让初学者快速入门", EN: "Get beginners up and running fast" },
        cta: { ZH: "进入 Alpha 实训营", EN: "Explore Alpha" },
        href: "https://bee-alpha.com/",
        hrefEn: "https://bee-alpha.com/",
        color: "#FF6900",
      },
      {
        code: "Beta",
        stage: { ZH: "教育培训 · 进阶", EN: "Training · Advanced" },
        tagline: { ZH: "让专业人士转变为 AI Master", EN: "Turn professionals into AI Masters" },
        cta: { ZH: "进入 Beta 实训营", EN: "Explore Beta" },
        href: "https://bee-beta.com/",
        hrefEn: "https://bee-beta.com/",
        color: "#06B6D4",
      },
      {
        code: "Sigma",
        stage: { ZH: "咨询落地 · 企业", EN: "Consulting · Enterprise" },
        tagline: { ZH: "让企业有机会把 AI 真正落地进日常业务", EN: "Give enterprises a real path to bring AI into daily business" },
        cta: { ZH: "进入 BEE Sigma", EN: "Visit BEE Sigma" },
        href: "https://beesigma.com/",
        hrefEn: "https://beesigma.com/en",
        color: "#FFB028",
      },
    ],
  },

  // Student Works Section
  works: {
    title: { ZH: "学员作品", EN: "Student Works" },
    subtitle: {
      ZH: "真实项目，真实成长",
      EN: "Real projects, real growth",
    },
    viewAll: { ZH: "查看所有作品", EN: "View All Works" },
    featured: [
      {
        badge: {
          ZH: "Beta 无界营（Infinity）",
          EN: "Beta Infinity Camp",
        },
        title: {
          ZH: "Hobbi - 心灵冥想日记",
          EN: "Hobbi - Mindful Meditation Journal",
        },
        team: {
          ZH: "小组作品，四人协作完成",
          EN: "Team Project, 4-member Collaboration",
        },
        teamDetails: {
          ZH: "物理博士 | 金融硕士 | CS本科生 | 工程经验",
          EN: "Physics PhD | Finance Master | CS Undergrad | Engineering Experience",
        },
        description: {
          ZH: "在冥想空间中，用语音记录你的心灵笔记。Hobbi 会基于你上传的照片生成沉浸式场景，与你互动，共同写下心灵日记。完全私密，随时可用，免费无需预约。",
          EN: "In a meditation space, record your mindful thoughts through voice. Hobbi generates immersive scenes based on your uploaded photos, interacts with you to co-create a mindful journal. Completely private, always available, free with no appointment needed.",
        },
        url: "https://www.voiceto.me/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_1.PNG",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_2.PNG",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/hobbi_3.PNG",
        },
        tags: {
          tag1: {
            ZH: "AI语音交互",
            EN: "AI Voice Interaction",
          },
          tag2: {
            ZH: "冥想 & 心理健康",
            EN: "Meditation & Mental Health",
          },
          tag3: { ZH: "3D可视化", EN: "3D Visualization" },
        },
      },
      {
        badge: {
          ZH: "Beta 无界营（Infinity）",
          EN: "Beta Infinity Camp",
        },
        title: {
          ZH: "YummyYummy - AI美食助手",
          EN: "YummyYummy - AI Food Assistant",
        },
        team: {
          ZH: "组作品，四人协作完成",
          EN: "Team Project, 4-member Collaboration",
        },
        teamDetails: {
          ZH: "物理博士 | 金融数学硕士 | 运筹/电气工程双硕士 | 工程经验",
          EN: "Physics PhD | Financial Math Master | Operations/EE Dual Master | Engineering Experience",
        },
        description: {
          ZH: "YummyYummy 是你的 AI 美食助手，随时帮你快速做出靠谱的美食选择。清晰展示菜品信息，配上简明介绍和真实照片，让你一眼就懂、放心点。",
          EN: "YummyYummy is your AI food assistant, helping you make reliable food choices quickly anytime. Clear dish information with concise descriptions and real photos, making it easy to understand and order with confidence.",
        },
        url: "https://yum.9top.org/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_3.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/yum_4.png",
        },
        tags: {
          tag1: {
            ZH: "AI图像识别",
            EN: "AI Image Recognition",
          },
          tag2: { ZH: "餐饮 & 生活", EN: "Food & Lifestyle" },
          tag3: {
            ZH: "多语言翻译",
            EN: "Multi-language Translation",
          },
        },
      },
      {
        badge: {
          ZH: "Beta 深空营（Cosmos）",
          EN: "Beta Cosmos Camp",
        },
        title: {
          ZH: "Climate Intelligence Hub - 气候智能中心",
          EN: "Climate Intelligence Hub",
        },
        team: { ZH: "学员：K同学", EN: "Student: K" },
        teamDetails: {
          ZH: "18岁，大一 | 多项数学/编程金牌得主",
          EN: "18 years old, Freshman | Multiple Math/Programming Gold Medalist",
        },
        description: {
          ZH: "提供个性化的气候变化预测和解释。它能生成美国本地化预测，根据你的所在地、职业和目标给出行动建议，并提供一个能回答问题、帮助你降低排放的 AI 助手。",
          EN: "Provides personalized climate change predictions and explanations. It generates US localized forecasts, offers action recommendations based on your location, profession and goals, and includes an AI assistant to answer questions and help reduce emissions.",
        },
        url: "https://climate-intelligence-hub.org/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Climate_Intelligence_Hub_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Climate_Intelligence_Hub_2.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Climate_Intelligence_Hub_1.png",
        },
        tags: {
          tag1: {
            ZH: "气候数据分析",
            EN: "Climate Data Analysis",
          },
          tag2: { ZH: "AI预测模型", EN: "AI Prediction Model" },
          tag3: {
            ZH: "个性化推荐",
            EN: "Personalized Insights",
          },
        },
      },
      {
        badge: {
          ZH: "Alpha 远航营（Odyssey）",
          EN: "Alpha Odyssey Camp",
        },
        title: {
          ZH: "RowingPro - AI划船训练平台",
          EN: "RowingPro - AI Rowing Training Platform",
        },
        team: { ZH: "学员：V同学", EN: "Student: V" },
        teamDetails: {
          ZH: "16岁，美国 | 多项数学/编程金牌得主",
          EN: "16 years old, USA | Multiple Math/Programming Gold Medalist",
        },
        description: {
          ZH: "追踪你的划船训练进度，分析每一次动作，并与同样热爱划船的人交流。AI 提供清晰的改进建议，结合训练计划、视频分析和健康管理，帮助你稳步提升整体表现。",
          EN: "Track your rowing training progress, analyze every movement, and connect with fellow rowing enthusiasts. AI provides clear improvement suggestions, combining training plans, video analysis, and health management to help you steadily improve overall performance.",
        },
        url: "https://crew-trainer.com",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/rowingPro_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/rowingPro_2.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/rowingPro_3.png",
        },
        tags: {
          tag1: { ZH: "运动科技", EN: "Sports Tech" },
          tag2: { ZH: "AI动作分析", EN: "AI Motion Analysis" },
          tag3: { ZH: "社区平台", EN: "Community Platform" },
        },
      },
      {
        badge: {
          ZH: "Alpha—ZERO启航营（Genesis）",
          EN: "Alpha ZERO Genesis Camp",
        },
        title: {
          ZH: "字在午餐 Word Snack - 海外中文学习助手",
          EN: "Word Snack - Chinese Learning Assistant for Overseas Kids",
        },
        team: { ZH: "学员：T同学", EN: "Student: T" },
        teamDetails: {
          ZH: "自由职业者 | 0工程经验",
          EN: "Freelancer | Zero Coding Experience",
        },
        description: {
          ZH: "海外孩子的中文课后复习助手。通过趣味互动和 AI，帮助轻松复习中文、追踪进度，让学习更简单有趣，并用可爱的卡通形象营造温馨的学习氛围。",
          EN: "Chinese after-school review assistant for overseas kids. Uses engaging interactions and AI to help easily review Chinese, track progress, making learning simpler and more fun, with adorable cartoon characters creating a warm learning atmosphere.",
        },
        url: "https://chinesewordsnack.netlify.app/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/wordSnack_4.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/wordSnack_5.png",
        },
        tags: {
          tag1: { ZH: "教育科技", EN: "EdTech" },
          tag2: { ZH: "中文学习", EN: "Chinese Learning" },
          tag3: { ZH: "儿童教育", EN: "Kids Education" },
        },
      },
      {
        badge: {
          ZH: "Alpha—ZERO启航营（Genesis）",
          EN: "Alpha ZERO Genesis Camp",
        },
        title: {
          ZH: "Relab SEO - AI内容营销工具",
          EN: "Relab SEO - AI Content Marketing Tool",
        },
        team: { ZH: "学员：K同学", EN: "Student: K" },
        teamDetails: {
          ZH: "房地产大数据公司CEO | 销售市场 | 0工程经验",
          EN: "Real Estate Data Company CEO | Sales & Marketing | Zero Coding Experience",
        },
        description: {
          ZH: "内容集群和AI工具平台,提供内容聚类可视化、AI内容生成和由Claude提供支持的SEO评分。帮助营销人员快速构建内容策略,优化搜索引擎排名,提升内容营销效率。",
          EN: "Content clusters and AI tools platform, offering content cluster visualization, AI content generation, and Claude-powered SEO scoring. Helps marketers quickly build content strategies, optimize search rankings, and improve content marketing efficiency.",
        },
        url: "https://relabai.netlify.app",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Relab_SEO_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Relab_SEO_1.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/Relab_SEO_1.png",
        },
        tags: {
          tag1: { ZH: "内容聚类", EN: "Content Clustering" },
          tag2: {
            ZH: "AI内容生成",
            EN: "AI Content Generation",
          },
          tag3: { ZH: "SEO优化", EN: "SEO Optimization" },
        },
      },
      {
        badge: {
          ZH: "Alpha—ZERO启航营（Genesis）",
          EN: "Alpha ZERO Genesis Camp",
        },
        title: {
          ZH: "纯素甄选 - 素食生活方式平台",
          EN: "PD Selection - Plant-Based Lifestyle Platform",
        },
        team: { ZH: "学员：A同学", EN: "Student: A" },
        teamDetails: {
          ZH: "天维网联合创始人 | 杜威基金会发起人 | 投资 | 0工程经验",
          EN: "Skykiwi Co-founder | Dewei Foundation Initiator | Investment | Zero Coding Experience",
        },
        description: {
          ZH: "发现精选素食生活方式，经过严格筛选的餐厅、食谱、产品与生活灵感。通过AI技术精准推荐优质素食资源，让您的素食之旅更单、更健康、更有品质。",
          EN: "Discover curated plant-based lifestyle with carefully selected restaurants, recipes, products and lifestyle inspiration. Uses AI to precisely recommend quality vegan resources, making your plant-based journey simpler, healthier, and more refined.",
        },
        url: "https://www.pdselection.com",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/pdselection.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/pdselection.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/pdselection.png",
        },
        tags: {
          tag1: { ZH: "生活方式", EN: "Lifestyle" },
          tag2: {
            ZH: "AI内容推荐",
            EN: "AI Content Recommendation",
          },
          tag3: { ZH: "社区平台", EN: "Community Platform" },
        },
      },
      {
        badge: {
          ZH: "Alpha—ZERO启航营（Genesis）",
          EN: "Alpha ZERO Genesis Camp",
        },
        title: {
          ZH: "PropertyAI NZ - 新西兰AI房产平台",
          EN: "PropertyAI NZ - AI Property Platform",
        },
        team: { ZH: "学员：H同学", EN: "Student: H" },
        teamDetails: {
          ZH: "房产经纪 | 0工程经验",
          EN: "Real Estate Agent | Zero Coding Experience",
        },
        description: {
          ZH: "新西兰首个AI驱动房产交易平台。提供专业买家代理、暗盘独家房源和24/7智能服务，让房产交易更高效、更透明。通过AI技术帮助用户找到理想房源，提供个性化推荐和专业咨询。",
          EN: "New Zealand's first AI-driven property transaction platform. Offers professional buyer representation, exclusive off-market listings, and 24/7 intelligent service, making property transactions more efficient and transparent. Uses AI to help users find ideal properties with personalized recommendations and professional consultation.",
        },
        url: "https://aipropertyagent.netlify.app/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/PropertyAI_NZ_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/PropertyAI_NZ_1.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/PropertyAI_NZ_1.png",
        },
        tags: {
          tag1: {
            ZH: "AI智能推荐",
            EN: "AI Smart Recommendation",
          },
          tag2: { ZH: "房产科技", EN: "PropTech" },
          tag3: { ZH: "对话式交互", EN: "Conversational UI" },
        },
      },
      {
        badge: {
          ZH: "Alpha—ZERO启航营（Genesis）",
          EN: "Alpha ZERO Genesis Camp",
        },
        title: {
          ZH: "PROJECT:Echo - 游戏化目标管理系统",
          EN: "PROJECT:Echo - Gamified Goal Management System",
        },
        team: { ZH: "学员：J同学", EN: "Student: J" },
        teamDetails: {
          ZH: "13岁 | 2年Python经验",
          EN: "13 years old | 2 years Python experience",
        },
        description: {
          ZH: "将目标管理游戏化的创新应用。通过虚拟花园、任务系统和奖励机制,帮助用户建立健康习惯、追踪专注度和达成个人目标。用户完成任务即可获得金币,种植虚拟植物,让自律变得有趣。支持数据同步和个性化成功计划。",
          EN: "Innovative gamified goal management app. Through virtual gardens, task systems and reward mechanisms, helps users build healthy habits, track focus and achieve personal goals. Complete tasks to earn coins, grow virtual plants, making discipline fun. Features data sync and personalized success plans.",
        },
        url: "https://changepr0jectecho.uk/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/jaxsen_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/jaxsen_2.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/jaxsen_1.png",
        },
        tags: {
          tag1: { ZH: "游戏化设计", EN: "Gamification" },
          tag2: { ZH: "目标管理", EN: "Goal Management" },
          tag3: { ZH: "习惯养成", EN: "Habit Building" },
        },
      },
      {
        badge: {
          ZH: "Alpha 远航营（Odyssey）",
          EN: "Alpha Odyssey Camp",
        },
        title: {
          ZH: "智能健康饮食助手 - AI营养管理专家",
          EN: "Smart Healthy Eating Assistant - AI Nutrition Expert",
        },
        team: { ZH: "学员：Y同学", EN: "Student: Y" },
        teamDetails: {
          ZH: "17岁，泰国 | 0代码基础",
          EN: "17 years old, Thailand | Zero Coding Experience",
        },
        description: {
          ZH: "您的专属营养管理专家，AI驱动的健康生活。提供每日饮食记录、卡路里追踪、营养成分分析、BMI健康监测和AI健康顾问。通过智能算法帮助用户制定个性化饮食计划，养成健康饮食习惯，实现科学营养管理。",
          EN: "Your personal nutrition management expert, AI-driven healthy living. Offers daily food logging, calorie tracking, nutritional analysis, BMI health monitoring and AI health consultant. Uses intelligent algorithms to help users create personalized meal plans, develop healthy eating habits, and achieve scientific nutrition management.",
        },
        url: "https://healthyeating365.netlify.app/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/healthyEating_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/healthyEating_2.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-alpha/student-works/healthyEating_1.png",
        },
        tags: {
          tag1: { ZH: "健康科技", EN: "Health Tech" },
          tag2: {
            ZH: "AI营养分析",
            EN: "AI Nutrition Analysis",
          },
          tag3: {
            ZH: "个性化推荐",
            EN: "Personalized Recommendation",
          },
        },
      },
      {
        badge: {
          ZH: "Alpha 远航营（Odyssey）",
          EN: "Alpha Odyssey Camp",
        },
        title: {
          ZH: "生活日历与知识盒 - 个人成长生态系统",
          EN: "Life Calendar & Knowledge Box - Personal Growth Ecosystem",
        },
        team: { ZH: "学员：Y同学", EN: "Student: Y" },
        teamDetails: {
          ZH: "15岁，泰国 | 0代码基础",
          EN: "15 years old, Thailand | Zero Coding Experience",
        },
        description: {
          ZH: "集日记记录、学习管理、专属宠物于一体的个人成长生态系统。提供智能日历、知识管理、专属宠物和AI助手四大核心功能，帮助用户记录生活点滴、管理学习任务、培养习惯，通过游戏化机制让成长变得有趣。",
          EN: "Personal growth ecosystem integrating journal recording, learning management, and virtual pets. Features smart calendar, knowledge management, exclusive pets and AI assistant - four core functions helping users record daily life, manage learning tasks, build habits, making growth fun through gamification.",
        },
        url: "https://studycalender.netlify.app/",
        cta: { ZH: "访问项目", EN: "Visit Project" },
        images: {
          main: "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/studycalender_1.png",
          screenshot1:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/studycalender_2.png",
          screenshot2:
            "https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/works/studycalender_1.png",
        },
        tags: {
          tag1: { ZH: "学管理", EN: "Learning Management" },
          tag2: { ZH: "日记记录", EN: "Journal Tracking" },
          tag3: { ZH: "游戏化设计", EN: "Gamification" },
        },
      },
    ],
  },

  // About Section
  about: {
    title: { ZH: "关于我们", EN: "About Us" },
    subtitle: {
      ZH: "一群相信教育可以改变世界的人",
      EN: "A group believing education can change the world",
    },
    companyTitle: {
      ZH: "关于 BEEBEE AI",
      EN: "About BEEBEE AI",
    },
    officeTitle: {
      ZH: "BEEBEE AI Office",
      EN: "BEEBEE AI Office",
    },
    intro: {
      p1: {
        ZH: "BEEBEE\u00A0AI\u00A0LTD 是一家总部位于新西兰的国际科技公司，团队分布在新西兰、英国、加拿大、美国、泰国、中国，由具有 25\u00A0年以上互联网/IT\u00A0经验及 8\u00A0年\u00A0AI\u00A0应用开发经验的资深人士于 2023\u00A0年创立。",
        EN: "BEEBEE AI LTD is an international technology company headquartered in New Zealand, with teams across New Zealand, the UK, Canada, the USA, Thailand and China. It was founded in 2023 by veterans with 25+ years in internet/IT and 8 years building AI applications.",
      },
      p2: {
        ZH: "我们做两件事：教育培训与咨询落地。教育培训由 Alpha、Beta\u00A0实训营构成，培养能把\u00A0AI\u00A0用到真实任务里的人；咨询落地由 BEE\u00A0Sigma\u00A0承接，以 AI\u00A0Native、可管理的企业\u00A0Agent\u00A0平台连接企业现有系统，陪企业从第一个\u00A0Agent\u00A0上线走到\u00A0AI\u00A0进入日常业务。",
        EN: "We do two things: training, and consulting with delivery. Training is the Alpha and Beta programs, developing people who can put AI to work on real tasks. Consulting and delivery is BEE Sigma, an AI-native, manageable enterprise agent platform that connects to the systems you already run and walks you from the first agent going live to AI in daily operations.",
      },
      p3: {
        ZH: "两条线彼此支撑：实训营里走出来的人，正是企业落地\u00A0AI\u00A0时最需要的人；企业里真实的业务场景，又不断成为实训营的项目来源。我们已在新西兰与中国两地为多个行业的企业交付\u00A0AI\u00A0落地项目。",
        EN: "The two lines reinforce each other: the people who come out of our programs are exactly who enterprises need to land AI, and real business scenarios from those enterprises keep feeding the programs with projects. We have delivered AI projects for businesses across multiple industries in New Zealand and China.",
      },
    },
    highlights: {
      globalTeam: {
        title: { ZH: "全球化团队", EN: "Global Team" },
        desc: {
          ZH: "团队分布在新西兰、英国、加拿大、美国、泰国、中国",
          EN: "Teams across New Zealand, UK, Canada, USA, Thailand, and China",
        },
      },
      deepExperience: {
        title: { ZH: "深厚经验", EN: "Deep Experience" },
        desc: {
          ZH: "25 年以上互联网/IT经验及8年AI全模态应用开发经验",
          EN: "25+ years of Internet/IT and 8 years of AI multimodal development experience",
        },
      },
      enterprise: {
        title: { ZH: "企业级服务", EN: "Enterprise Service" },
        desc: {
          ZH: "已在新西兰与中国两地交付 8 个行业的 AI 落地场景",
          EN: "8 industry scenarios delivered across New Zealand and China",
        },
      },
    },
    founderSection: {
      ZH: "创始人介绍",
      EN: "Founder Introduction",
    },
    story: {
      ZH: "BEEBEE 诞生于对传统教育模式的反思。我们看到多人在学习AI的过程中迷失方向，看到太多课程只教工具却忽视思维。我们决定做出改变。",
      EN: "BEEBEE was born from reflection on traditional education. We saw too many lost in learning AI, too many courses teaching tools but ignoring thinking. We decided to make a change.",
    },
    ceo: {
      name: { ZH: "周品", EN: "Pin Zhou" },
      title: { ZH: "创始人 & CEO", EN: "Founder & CEO" },
      bio: {
        ZH: "周品先生是一位拥有超过 25 年IT和互联网产品运营创业经验的资深创业者，作为全球第一批GPT时代的创业者，他在人工智能领域拥有8年的相关经验,始终保持着对新技术的强烈好奇心。",
        EN: "Mr. Pin Zhou is a seasoned entrepreneur with over 25 years of IT and internet product operations experience. As one of the first global entrepreneurs in the GPT era, he has 8 years of AI experience and maintains a strong curiosity for new technologies.",
      },
      careerTitle: { ZH: "职业经历", EN: "Career History" },
      career: {
        beebee: {
          title: {
            ZH: "BEEBEE AI - 2023 年创立",
            EN: "BEEBEE AI - Founded 2023",
          },
          desc: {
            ZH: "总部新西兰，团队分布于新西兰、英国、加拿大、美国、泰国和中国，聚焦企业 AI 落地与 AI 人才培养",
            EN: "Headquartered in New Zealand, teams across NZ, UK, Canada, USA, Thailand, and China, focused on enterprise AI delivery and AI talent development",
          },
        },
        quwan: {
          title: {
            ZH: "趣玩网 - 创始人",
            EN: "QuWan.com - Founder",
          },
          desc: {
            ZH: "在垂直电商领域拥有丰富的实战经验",
            EN: "Rich practical experience in vertical e-commerce",
          },
        },
        cheetah: {
          title: {
            ZH: "猎豹移动 - 董事高级副总裁",
            EN: "Cheetah Mobile - Director & Senior VP",
          },
          desc: {
            ZH: "负责移动App+AI业务发展",
            EN: "Led mobile App + AI business development",
          },
        },
        baidu: {
          title: {
            ZH: "百度 - 联盟客户端总监",
            EN: "Baidu - Alliance Client Director",
          },
          desc: {
            ZH: "负责搜索引擎相关业务的拓展",
            EN: "Led search engine business expansion",
          },
        },
        early: {
          title: {
            ZH: "托普软件 & 豪杰超级解霸 - 早期经历",
            EN: "Top Software & SuperVCD - Early Career",
          },
          desc: {
            ZH: "积累了丰富的toB和toC软件产品管理经验",
            EN: "Accumulated rich B2B and B2C software product management experience",
          },
        },
      },
      philosophyTitle: {
        ZH: "创业理念",
        EN: "Entrepreneurial Philosophy",
      },
      philosophy: {
        ZH: "作为一位充满好奇心的连续创业者，周品先生不断探索技术与商业的边界。同时,他也是一位愿意分享AI教育实践的父亲，致力于将自己在人工智能领域的经验和见解传递给下一代，在技术创新与教育实践之间找到了完美的平衡点。",
        EN: "As a curious serial entrepreneur, Mr. Pin Zhou continuously explores the boundaries of technology and business. As a father willing to share AI education practices, he is committed to passing his AI experience and insights to the next generation, finding the perfect balance between technological innovation and educational practice.",
      },
      quote: {
        text: {
          ZH: "关注的不是「讲 AI」，而是「把 AI 变成真正能跑起来的业务系统」。",
          EN: "What matters is not talking about AI, but turning AI into business systems that actually run.",
        },
        author: { ZH: "— 周品", EN: "— Pin Zhou" },
      },
    },
  },

  // Contact Section
  contact: {
    title: { ZH: "联系我们", EN: "Contact Us" },
    subtitle: {
      ZH: "企业 AI 落地、实训营报名或合作，都可以从这里开始。",
      EN: "Enterprise AI delivery, program enrolment or partnership — start here.",
    },
    formTitle: { ZH: "咨询表单", EN: "Inquiry Form" },
    form: {
      studentName: { ZH: "姓名", EN: "Name" },
      studentAge: {
        ZH: "公司或学校（选填）",
        EN: "Company or school (optional)",
      },
      country: { ZH: "所在国家", EN: "Country" },
      email: { ZH: "电子邮件", EN: "Email" },
      emailPlaceholder: {
        ZH: "example@email.com",
        EN: "example@email.com",
      },
      inquiry: { ZH: "咨询说明", EN: "Inquiry Details" },
      inquiryPlaceholder: {
        ZH: "请简单说明您的需求：企业 AI 落地、实训营报名或其他合作。",
        EN: "Tell us briefly what you need: enterprise AI delivery, program enrolment or other partnership.",
      },
      cancel: { ZH: "取消", EN: "Cancel" },
      submit: { ZH: "提交", EN: "Submit" },
    },
    info: {
      address: { ZH: "地址", EN: "Address" },
      addressValue: {
        ZH: "中国四川省成都市高新区成都高新孵化园 1 号楼 A 座\nB:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand",
        EN: "B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand\nBuilding A, No.1 Chengdu High-tech Incubation Park, High-tech Zone, Chengdu, Sichuan, China",
      },
      email: { ZH: "邮箱", EN: "Email" },
      emailIntern: "internprogram@beebee.ai",
      emailBusiness: "service@beebee.ai",
    },
  },

  // Footer
  footer: {
    tagline: {
      ZH: "企业 AI 陪跑专家",
      EN: "Enterprise AI Partner",
    },
    quickNav: {
      ZH: "快速导航",
      EN: "Quick Navigation",
    },
    trainingCamps: {
      ZH: "成长路径与服务",
      EN: "Programs & Services",
    },
    platformLinks: {
      alpha: { ZH: "Alpha 实训营", EN: "Alpha Training Camp" },
      beta: { ZH: "Beta 实训营", EN: "Beta Training Camp" },
      platform: { ZH: "学习平台", EN: "Learning Platform" },
    },
    contactInfo: {
      address: {
        ZH: "中国四川省成都市高新区成都高新孵化园 1 号楼 A 座\nB:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand",
        EN: "B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand\nBuilding A, No.1 Chengdu High-tech Incubation Park, High-tech Zone, Chengdu, Sichuan, China",
      },
    },
    copyright: {
      ZH: "© 2025 BEEBEE AI Ltd. All rights reserved.",
      EN: "© 2025 BEEBEE AI Ltd. All rights reserved.",
    },
  },

  // Navigation (for reuse in header and footer)
  nav: {
    home: { ZH: "首页", EN: "Home" },
    platform: { ZH: "成长路径", EN: "Growth Path" },
    works: { ZH: "学员作品", EN: "Student Works" },
    about: { ZH: "关于我们", EN: "About Us" },
    contact: { ZH: "联系我们", EN: "Contact Us" },
  },
};

// 辅助函数：根据语言获取文本
export function t(
  content: { ZH: string; EN: string },
  language: Language,
): string {
  return content[language];
}
