import Link from 'next/link';

export default function Blog() {
  return (
    <section className='py-20 px-8 max-w-4xl mx-auto'>
      {/* Кнопка назад */}
      <Link
        href='/content'
        className='inline-flex items-center gap-2 text-lg text-indigo-600 mb-12 font-medium hover:text-indigo-700'
      >
        ← Назад к блогу
      </Link>

      <div className='w-full h-[500px] bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl mb-12'></div>

      <h1 className='text-5xl font-bold text-gray-800 mb-8 leading-tight'>
        Как стать frontend-разработчиком в 2026
      </h1>

      <div className='flex items-center gap-6 text-gray-500 mb-16 text-lg'>
        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full'>
          Frontend
        </span>
        <span className='px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full'>
          Команда SkillHub
        </span>
      </div>
      <div className='text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl'>
        <p >
          В 2026 frontend-разработчик — это React + Next.js + TypeScript.
          Начните с HTML/CSS/JS, создайте 3 проекта в портфолио, освойте
          Tailwind и ищите junior-вакансии. Реальная работа через 3-4 месяца
          системного обучения.
        </p>
      </div>
    </section>
  );
}
