import { CATEGORY, SKILL_LEVEL } from "@/consts/filters";

export type TSKILL_LEVEL = typeof SKILL_LEVEL[keyof typeof SKILL_LEVEL]
export type TCATEGORY = typeof CATEGORY[keyof typeof CATEGORY]


export type TFilters = {
  skillLevel: TSKILL_LEVEL;
  category: TCATEGORY;
};

export type TApiFilters = {
    level: TSKILL_LEVEL,
    category: TCATEGORY
}