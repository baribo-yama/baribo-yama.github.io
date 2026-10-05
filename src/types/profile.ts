// Home配下セクション(Works / History / Skills / Intern)のデータスキーマ。
// 実データは src/data/*.json で管理し、ここで型を固定する。
// image は public/ 配下からの相対パス(例: "images/works/foo.png")で指定する。

export type Work = {
  title: string;
  summary: string;
  background: string;
  responsibility: string;
  tech: string[];
  ingenuity: string;
  result?: string;
  image?: string;
  github?: string;
  url?: string;
  new?: boolean;
};

export type HistoryItem = {
  period: string;
  title: string;
  description: string;
  new?: boolean;
};

export type Skill = {
  name: string;
  image?: string;
};

export type SkillCategory = {
  category: string;
  items: Skill[];
};

export type Internship = {
  company: string;
  description: string;
  logo?: string;
};
