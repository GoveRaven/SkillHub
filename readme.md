# SkillHub

SkillHub — веб-приложение платформы онлайн-курсов с динамическим контентом, получаемым с сервера через headless CMS.

## Возможности

- Каталог курсов с загрузкой данных с сервера  
- Фильтрация курсов по уровню и категориям  
- Динамические страницы курсов  
- Раздел статей (блог)  
- Работа с серверными данными через TanStack Query  
- Отображение изображений из CMS  

## Технологии

- Next.js  
- Strapi  
- PostgreSQL  
- TanStack Query  
- TypeScript  
- Tailwind CSS  
- pnpm

## Статус

Проект находится в разработке.

## Запуск проекта

Единый запуск реализован в ветке `cms-part-of-the-site`.

### 1. Клонирование

```bash
git clone https://github.com/GoveRaven/SkillHub
cd SkillHub
```

### 2. Переключение на ветку
```bash
git checkout cms-part-of-the-site
```

### 3. Установка зависимостей
```bash
pnpm install
```

### 4. Запуск
```bash
pnpm run dev
```
