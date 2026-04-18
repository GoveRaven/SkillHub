'use client';

import Loader from '@/components/loader';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Error from '@/components/error';
import { ROUTES } from '@/consts/routes';
import Image from 'next/image';
import { useArticle } from '@/api/hooks/useArticles';

export function Article() {
  const { slug: documentId } = useParams();

  const { article, isPending, isError } = useArticle(String(documentId));

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className='py-20 px-8 max-w-4xl mx-auto'>
      <Link
        href={ROUTES.CONTENT.BLOG}
        className='inline-flex items-center gap-2 text-lg text-indigo-600 mb-12 font-medium hover:text-indigo-700'
      >
        Назад к блогу
      </Link>
      <Image
        className='w-full h-[500px] bg-gray-200 rounded-3xl'
        src={`http://localhost:1337${article.cover.url}`}
        alt={article.cover.alternativeText}
        width={100}
        height={100}
        // TODO: УБРАТЬ unoptimized
        unoptimized
      />
      <h1 className='text-5xl font-bold text-gray-800 mb-8 leading-tight'>
        {article.title}
      </h1>

      <div className='flex items-center gap-6 text-gray-500 mb-16 text-lg'>
        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full'>
          {article.category}
        </span>
      </div>
      <div className='text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl'>
        <p>{article.description}</p>
      </div>
    </section>
  );
}
