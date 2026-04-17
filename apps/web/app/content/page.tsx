'use client';
import { articles } from '@/data/articles.data';
import Link from 'next/link';

export default function Content() {
  const data = articles;
  return (
    <section className='py-20 px-8 max-w-6xl mx-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6'>
          Блог SkillHub
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Полезные статьи для frontend-разработчиков всех уровней
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
        {data.map((article) => (
          <Link
            key={article.slug}
            href={`/content/${article.slug}`}
            className='group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 h-full'
          >
            <div className='flex items-center gap-3 text-sm text-gray-500 mb-4'>
              <span className='w-2 h-2 bg-gray-400 rounded-full'></span>
              <span>Frontend</span>
            </div>

            <h3 className='text-2xl md:text-3xl font-bold text-gray-800 hover:text-indigo-600 mb-4 leading-tight'>
              {article.title}
            </h3>

            <p className='text-lg text-gray-600 leading-relaxed mb-6'>
              {article.excerpt}
            </p>

            <span className='text-indigo-600 font-semibold'>
              Читать полностью
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
