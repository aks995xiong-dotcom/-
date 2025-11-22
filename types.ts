export enum Category {
  CHAT = 'CHAT',
  DATE = 'DATE',
  COMFORT = 'COMFORT',
  RELATIONSHIP = 'RELATIONSHIP'
}

export interface TipItem {
  id: string;
  title: string;
  content: string;
  iconName: string; // Lucide icon name reference
  imageUrl?: string;
}

export interface CategoryData {
  id: Category;
  title: string;
  description: string;
  color: string;
  items: TipItem[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}