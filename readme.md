# SkillHub

SkillHub — веб-приложение для просмотра онлайн-курсов с динамическим контентом, получаемым с сервера через headless CMS.

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

```bash
git clone https://github.com/GoveRaven/SkillHub
cd SkillHub
git checkout cms-part-of-the-site
pnpm install
pnpm run dev
```

### После запуска:

- http://localhost:3000 — клиентская часть (Next.js)  
- http://localhost:1337 — админ-панель Strapi и API  
