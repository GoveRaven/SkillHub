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
  cover: TCover;
  category: string;
  author: string;
  advantages: TAdvantages[];
  FAQ: TFAQ[];
};

type TCover = {
  url: string;
  alternativeText: string
}