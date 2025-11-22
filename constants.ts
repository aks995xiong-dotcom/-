import { Category, CategoryData } from './types';

export const CATEGORIES: Record<Category, CategoryData> = {
  [Category.CHAT]: {
    id: Category.CHAT,
    title: "聊天技巧",
    description: "告别尬聊，掌握幽默与共情的艺术",
    color: "bg-blue-100 text-blue-800",
    items: [
      {
        id: 'c1',
        title: '开放式提问',
        content: '不要问只回答“是”或“否”的问题。尝试用“你觉得...怎么样？”或“为什么...”开头，引导对方分享更多感受。',
        iconName: 'MessageCircle',
        imageUrl: 'https://picsum.photos/800/400?random=1'
      },
      {
        id: 'c2',
        title: '捕捉关键词',
        content: '在对方的话语中寻找关键词（如爱好、地名、情绪），以此为跳板延伸话题。例如：“你刚提到喜欢旅行，最近去过最难忘的地方是哪里？”',
        iconName: 'Search',
        imageUrl: 'https://picsum.photos/800/400?random=2'
      },
      {
        id: 'c3',
        title: '适度幽默与自嘲',
        content: '不要刻意讲冷笑话。轻松的自嘲往往更能拉近距离，展示你的自信和随和。',
        iconName: 'Smile',
        imageUrl: 'https://picsum.photos/800/400?random=3'
      }
    ]
  },
  [Category.DATE]: {
    id: Category.DATE,
    title: "约会指南",
    description: "从地点选择到行程安排的完美攻略",
    color: "bg-rose-100 text-rose-800",
    items: [
      {
        id: 'd1',
        title: '互动性强的活动',
        content: '尽量避免第一次约会只看电影（零交流）。尝试陶艺DIY、密室逃脱、烹饪课或看展览，这样有更多自然互动的机会。',
        iconName: 'MapPin',
        imageUrl: 'https://picsum.photos/800/400?random=4'
      },
      {
        id: 'd2',
        title: '氛围感餐厅',
        content: '选择环境相对安静、灯光柔和的餐厅。避免过于嘈杂的地方。如果可以，提前了解她的饮食偏好（忌口等）。',
        iconName: 'Utensils',
        imageUrl: 'https://picsum.photos/800/400?random=5'
      },
      {
        id: 'd3',
        title: '转场技巧',
        content: '准备1-2个备选方案（Plan B）。吃饭后可以去散步、去清吧喝一杯或去抓娃娃，自然的场景转换能增加约会的层次感。',
        iconName: 'MoveRight',
        imageUrl: 'https://picsum.photos/800/400?random=6'
      }
    ]
  },
  [Category.COMFORT]: {
    id: Category.COMFORT,
    title: "安慰艺术",
    description: "当她难过时，如何提供有效的情绪价值",
    color: "bg-amber-100 text-amber-800",
    items: [
      {
        id: 'f1',
        title: '先共情，后建议',
        content: '女生倾诉时通常需要的是理解，而不是解决方案。试着说：“这听起来真的很难过，我能理解你的感受”，而不是“你应该这样做...”。',
        iconName: 'HeartHandshake',
        imageUrl: 'https://picsum.photos/800/400?random=7'
      },
      {
        id: 'f2',
        title: '倾听的力量',
        content: '放下手机，看着她的眼睛，认真听。适时的点头和简单的回应（“嗯”，“通过”），比滔滔不绝更有效。',
        iconName: 'Ear',
        imageUrl: 'https://picsum.photos/800/400?random=8'
      },
      {
        id: 'f3',
        title: '具体的行动',
        content: '如果你在她身边，一个拥抱胜过千言万语。如果不在，给她点一杯热饮或甜点外卖，展现你的关心。',
        iconName: 'Gift',
        imageUrl: 'https://picsum.photos/800/400?random=9'
      }
    ]
  },
  [Category.RELATIONSHIP]: {
    id: Category.RELATIONSHIP,
    title: "长期相处",
    description: "建立健康、稳定、亲密关系的秘诀",
    color: "bg-emerald-100 text-emerald-800",
    items: [
      {
        id: 'r1',
        title: '尊重边界',
        content: '每个人都需要独立的空间。尊重她的爱好、朋友圈和独处时间，不要试图控制对方的生活。',
        iconName: 'ShieldCheck',
        imageUrl: 'https://picsum.photos/800/400?random=10'
      },
      {
        id: 'r2',
        title: '非暴力沟通',
        content: '争吵时，多用“我”开头（“我觉得有点受伤...”），少用“你”开头（“你总是...”）。就事论事，不翻旧账。',
        iconName: 'MessageSquareHeart',
        imageUrl: 'https://picsum.photos/800/400?random=11'
      },
      {
        id: 'r3',
        title: '仪式感',
        content: '不需要昂贵的礼物。记住纪念日，或者偶尔写一张手写信，生活中的小惊喜能让感情历久弥新。',
        iconName: 'CalendarHeart',
        imageUrl: 'https://picsum.photos/800/400?random=12'
      }
    ]
  }
};