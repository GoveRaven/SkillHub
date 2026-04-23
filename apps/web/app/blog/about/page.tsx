export default function About() {
  return (
    <section className='py-20 px-8 max-w-6xl mx-auto'>
      {/* Hero заголовок */}
      <div className='text-center mb-20'>
        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6'>
          О платформе SkillHub
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto '>
          Здесь вы найдёте понятный путь в frontend-разработку
        </p>
      </div>
      <div className='space-y-20'>
        <div className='bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-200 '>
          <h2 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
            Для кого SkillHub
          </h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700'>
            <li className='flex items-start gap-4 p-4 bg-indigo-50 rounded-2xl'>
              <span className='w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0'>
                1
              </span>
              <span>только начинаете изучать frontend</span>
            </li>
            <li className='flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl '>
              <span className='w-8 h-8 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0'>
                2
              </span>
              <span>уже знаете основы, но хотите систематизировать знания</span>
            </li>
            <li className='flex items-start gap-4 p-4 bg-purple-50 rounded-2xl'>
              <span className='w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0'>
                3
              </span>
              <span>ищете практику, а не только теорию</span>
            </li>
            <li className='flex items-start gap-4 p-4 bg-amber-50 rounded-2x'>
              <span className='w-8 h-8 bg-amber-600 text-white rounded-lg flex items-center justify-center font-bold text-sm mt-0.5 flex-shrink-0'>
                4
              </span>
              <span>
                хотите собрать проекты для портфолио и подготовиться к
                трудоустройству
              </span>
            </li>
          </ul>
        </div>

        {/* Наша цель */}
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-gray-800 mb-12'>Наша цель</h2>
          <div className='bg-gradient-to-r from-indigo-50 to-purple-50 p-12 rounded-3xl border border-indigo-200'>
            <p className='text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto'>
              Сделать обучение понятным, удобным и полезным на практике. Мы
              стараемся не перегружать лишней теорией, а показывать, как знания
              применяются в реальных задачах и проектах.
            </p>
          </div>
        </div>

        {/* Что найдёте */}
        <div className='bg-white/70 backdrop-blur-sm rounded-3xl p-12 border border-gray-200'>
          <h2 className='text-4xl font-bold text-gray-800 mb-8 text-center'>
            Что вы найдёте на платформе
          </h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-700'>
            <li className='flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border-1 border-blue-400'>
              <span>Выбрать курс по уровню сложности</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-emerald-50 rounded-2xl border-1 border-emerald-400'>
              <span>
                Изучать React, Next.js, TypeScript и другие технологии
              </span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-purple-50  rounded-2xl border-1 border-purple-400'>
              <span>Проходить обучение в удобном темпе</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-amber-50  rounded-2xl border-1 border-amber-400'>
              <span>
                Получать полезные материалы и ответы на частые вопросы
              </span>
            </li>
          </ul>
        </div>

        <div className='bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl p-12'>
          <h2 className='text-4xl font-bold mb-8 text-center'>
            Почему SkillHub
          </h2>
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg'>
            <li className='flex items-start gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl transition-all'>
              <span>Понятная структура обучения</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl transition-all'>
              <span>Практические задания</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl transition-all'>
              <span>Современный стек</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl transition-all'>
              <span>Простой и удобный интерфейс</span>
            </li>
            <li className='flex items-start gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl transition-all'>
              <span>Фокус на результате</span>
            </li>
          </ul>
        </div>

        {/* Заключение */}
        <div className='text-center py-16 bg-gray-50 rounded-3xl'>
          <h2 className='text-3xl font-bold text-gray-800 mb-6'>
            SkillHub — ваш путь в frontend
          </h2>
          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Здесь вы можете не просто смотреть уроки, а шаг за шагом двигаться к
            реальным навыкам и первым проектам.
          </p>
        </div>
      </div>
    </section>
  );
}
