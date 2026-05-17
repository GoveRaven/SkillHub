import { CATEGORY, SKILL_LEVEL } from '@/consts/filters';

export type TSkillLevel = (typeof SKILL_LEVEL)[keyof typeof SKILL_LEVEL];
export type TCategory = (typeof CATEGORY)[keyof typeof CATEGORY];

export type TFilters = {
  skillLevel: TSkillLevel;
  category: TCategory;
};

export type TApiFilters = {
  level: TSkillLevel;
  category: TCategory;
};
