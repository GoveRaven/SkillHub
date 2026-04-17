import { TAdvantages } from './advantages';
import { TFAQ } from './FAQ';

export type TCourse = {
  title: string;
  level: 'Новичок' | 'Средний' | 'Продвинутый';
  rating: string;
  price: string;
  id: number;
};

export type TFullCourse = TCourse & {
  description: string;
  cover: string;
  category: string;
  author: string;
  benefits: TAdvantages[];
  faq: TFAQ[];
};
