export enum LEVEL {
  ALL = 'Все',
  JUNIOR = 'Новичок',
  MIDDLE = 'Средний',
  SENIOR = 'Продвинутый',
}

export enum CATEGORY {
  ALL = 'Все',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  UIUX = 'UI/UX',
  STATE_MANAGEMENT = 'State Management',
}

export const defaultFilter = {
  level: LEVEL.ALL,
  category: CATEGORY.ALL,
};
