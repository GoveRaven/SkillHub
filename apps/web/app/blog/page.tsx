'use client';

import { Loader } from '@/components/loader';
import Link from 'next/link';
import { Error } from '@/components/error';
import { TArticle } from '@/types/articles';
import { useArticles } from '@/api/hooks/useArticles';
import { ROUTES } from '@/consts/routes';

export default function Blog() {
  const { articles, isPending, isError } = useArticles();
  if (isPending) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className='py-20 px-8 max-w-6xl mx-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-6xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6'>
          Блог SkillHub
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Полезные статьи для разработчиков всех уровней
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
        {articles.map((article: TArticle) => (
          <Link
            key={article.documentId}
            //TODO: Завести утилиту для написания href
            href={`${ROUTES.BLOG.BLOG}/${article.documentId}`}
            className='group bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 h-full'
          >
            <div className='flex items-center gap-3 text-sm text-gray-500 mb-4'>
              <span className='w-2 h-2 bg-gray-400 rounded-full'></span>
              <span>{article.category}</span>
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
