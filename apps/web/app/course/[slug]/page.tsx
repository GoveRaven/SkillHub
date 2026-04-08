import { TFullCourse } from '@/types/courses';
import Course from './course';

const mockData: TFullCourse = {
  id: 1,
  level: 'Новичок',
  title: 'React + Next.js: Полный курс для Frontend-разработчика',
  description:
    'Освойте React и Next.js с нуля до продакшена. Получите практические навыки создания современных веб-приложений и уверенно идите на junior frontend позицию.',
  price: '₽4 990',
  cover: 'bg-gradient-to-br from-blue-600 to-indigo-800', // ← заглушка
  category: 'Frontend',
  author: 'Иван Иванов',
  rating: '4.9 (127 отзывов)',

  benefits: [
    {
      title: '30+ часов видео',
      desc: 'Полная практика с реальными проектами',
    },
    { title: 'Сертификат', desc: 'Подтверждение ваших навыков' },
    {
      title: 'Доступ навсегда',
      desc: 'Повторяйте материал когда угодно',
    },
    { title: 'Поддержка', desc: 'Ответы на вопросы 24/7' },
  ],

  faq: [
    {
      question: 'Нужен ли опыт программирования?',
      answer: 'Базовый JavaScript достаточно',
    },
    { question: 'Получу ли я помощь?', answer: 'Да, чат с ментором включён' },
    {
      question: 'Сколько времени на курс?',
      answer: '2-3 месяца по 1 часу в день',
    },
  ],
};

export default function CourseCard() {
  return <Course content={mockData} />;
}
