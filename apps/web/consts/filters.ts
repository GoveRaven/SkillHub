export enum SKILL_LEVEL {
  all = 'Все',
  junior = 'Новичок',
  middle = 'Средний',
  senior = 'Продвинутый',
}

export enum CATEGORY {
  all = 'Все',
  frontend = 'Frontend',
  backend = 'Backend',
  uiUx = 'UI/UX',
  stateManagement = 'State Management',
}

export const DEFAULT_FILTER = {
  skillLevel: SKILL_LEVEL.all,
  category: CATEGORY.all,
};
