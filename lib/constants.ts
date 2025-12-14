import { Github, Twitter, Instagram, Mic, Music, PenTool } from 'lucide-react';

export const SOCIAL_LINKS = [
  { name: 'X', url: 'https://twitter.com', icon: Twitter },
  { name: 'note', url: 'https://note.com', icon: PenTool },
  { name: 'Stand.fm', url: 'https://stand.fm', icon: Mic },
  { name: 'Spotify', url: 'https://spotify.com', icon: Music },
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
];

type Dictionary = {
  hero: {
    name: string;
    tagline: string;
    contactBtn: string;
    socialBtn: string;
  };
  about: {
    title: string;
    introduction: string;
    locationTitle: string;
    location: string;
    languagesTitle: string;
    languages: string;
  };
  whatIDo: {
    title: string;
    items: { title: string; description: string }[];
  };
  social: {
    title: string;
  };
  contact: {
    title: string;
    successTitle: string;
    successMessage: string;
    sendAnother: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submitButton: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
};

const dictionaries: Record<string, Dictionary> = {
  en: {
    hero: {
      name: 'Pivot (ぴぼっと)',
      tagline: 'Moving freely, thinking simply.',
      contactBtn: 'Contact',
      socialBtn: 'Social Links',
    },
    about: {
      title: 'About',
      introduction: 'Hello, I am Pivot, based on Oshima Island in Imabari, Japan. I enjoy simplifying complex problems and creating calm, human-centered digital experiences.',
      locationTitle: 'Location',
      location: 'Imabari, Ehime (Island Life)',
      languagesTitle: 'Languages',
      languages: 'Japanese / English',
    },
    whatIDo: {
      title: 'What I Do',
      items: [
        {
          title: 'Website / LP Creation',
          description: 'Minimalist, fast, and accessible websites tailored to your story.',
        },
        {
          title: 'Customer Support / Ops',
          description: 'Streamlining operations and providing human-centric support.',
        },
        {
          title: 'Content Creation Support',
          description: 'Helping with Instagram, Note, and Audio content strategy.',
        },
        {
          title: 'Automation / AI Tools',
          description: 'Simple automations to save time and reduce repetitive work.',
        },
      ],
    },
    social: {
      title: 'Connections',
    },
    contact: {
      title: 'Contact',
      successTitle: 'Message Sent!',
      successMessage: 'Thank you for reaching out. I will get back to you shortly.',
      sendAnother: 'Send another message',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Send Message',
      namePlaceholder: 'Pivot User',
      emailPlaceholder: 'hello@example.com',
      messagePlaceholder: 'How can I help you?',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Antigravity',
    },
  },
  ja: {
    hero: {
      name: 'Pivot (ぴぼっと)',
      tagline: '軽やかに、シンプルに考える。',
      contactBtn: 'お問い合わせ',
      socialBtn: 'SNSリンク',
    },
    about: {
      title: 'About',
      introduction: 'こんにちは、Pivot（ぴぼっと）です。愛媛県今治市の大島を拠点に活動しています。複雑な問題をシンプルに整理し、自然で心地よいデジタル体験を作ることを楽しんでいます。',
      locationTitle: '拠点',
      location: '愛媛県 今治市 (島暮らし)',
      languagesTitle: '言語',
      languages: '日本語 / 英語',
    },
    whatIDo: {
      title: 'What I Do',
      items: [
        {
          title: 'Webサイト / LP制作',
          description: 'あなたの物語に寄り添った、ミニマルで高速、アクセシブルなWebサイトを制作します。',
        },
        {
          title: 'カスタマーサポート / 業務支援',
          description: '業務フローの整理や、人ならではの温かみのあるサポート体制の構築を支援します。',
        },
        {
          title: 'コンテンツ制作サポート',
          description: 'Instagram、note、音声配信（stand.fm）などのコンテンツ戦略や制作をお手伝いします。',
        },
        {
          title: '自動化 / AIツール導入支援',
          description: '単純作業を自動化し、時間を節約するためのシンプルなツールの導入をサポートします。',
        },
      ],
    },
    social: {
      title: 'Connections',
    },
    contact: {
      title: 'Contact',
      successTitle: '送信完了',
      successMessage: 'お問い合わせありがとうございます。確認次第、ご連絡いたします。',
      sendAnother: '他のメッセージを送る',
      nameLabel: 'お名前',
      emailLabel: 'メールアドレス',
      messageLabel: 'メッセージ',
      submitButton: '送信する',
      namePlaceholder: 'お名前を入力してください',
      emailPlaceholder: 'hello@example.com',
      messagePlaceholder: 'お問い合わせ内容をご記入ください',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Antigravity',
    },
  },
};

export const getDictionary = (lang: string) => dictionaries[lang] || dictionaries['en'];
