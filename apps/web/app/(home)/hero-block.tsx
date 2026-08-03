import { MAIN_ROUTES } from '@/consts/routes';
import Link from 'next/link';

export function HeroBlock() {
  return (
    <section className='h-[65vh] flex items-center justify-center flex-col bg-gradient-to-br from-blue-600 to-indigo-800 text-white'>
      <div className='text-center px-8 max-w-6xl mx-auto'>
        <h1 className='text-7xl font-bold mb-8'>
          Из новичка в Frontend за 2 месяца
        </h1>
        <p className='text-2xl mb-12 opacity-90'>
          React, Next.js, TypeScript — полный стек для junior-разработчика.
          Практика на реальных проектах + помощь с трудоустройством.
        </p>
        <Link
          href={MAIN_ROUTES.CATALOG}
          className='bg-white text-indigo-800 px-12 py-5 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all'
        >
          Выбрать курс
        </Link>
      </div>
    </section>
  );
}
