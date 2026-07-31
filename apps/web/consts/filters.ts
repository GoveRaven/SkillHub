export const SKILL_LEVEL = {
  all: 'Все',
  junior: 'Новичок',
  middle: 'Средний',
  senior: 'Продвинутый',
} as const;

export const CATEGORY = {
  all: 'Все',
  frontend: 'Frontend',
  backend: 'Backend',
  uiUx: 'UI/UX',
  stateManagement: 'State Management',
} as const;

export const DEFAULT_FILTER = {
  skillLevel: SKILL_LEVEL.all,
  category: CATEGORY.all,
};
