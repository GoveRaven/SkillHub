'use client';

import { Advantages } from '@/components/advantages';
import { FAQ } from '@/components/FAQ';
import Loader from '@/components/loader';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Error from '@/components/error';
import Link from 'next/link';
import { ROUTES } from '@/consts/routes';
import { useCourse } from '@/api/hooks/useCourses';

export function Course() {
  const { slug: documentId } = useParams();
  const { course, isPending, isError } = useCourse(String(documentId));

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className='py-20 px-8 max-w-7xl mx-auto'>
      <div className='mb-12'>
        <Link
          href={ROUTES.CATALOG}
          className='inline-flex items-center gap-2 text-lg text-indigo-600 hover:text-indigo-700'
        >
          Назад в каталог
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-12 mb-20 items-start'>
        <Image
          className='w-full h-[500px] bg-gray-200 rounded-3xl'
          src={`http://localhost:1337${course.cover.url}`}
          alt={course.cover.alternativeText}
          width={100}
          height={100}
          // TODO: УБРАТЬ unoptimized
          unoptimized
        ></Image>
        <div className='space-y-8'>
          <div className='flex gap-4'>
            <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full'>
              {course.category}
            </span>
            <span className='px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full'>
              {course.author}
            </span>
            <span className='px-4 py-2 bg-amber-100 text-amber-800 rounded-full'>
              {course.level}
            </span>
          </div>

          <h1 className='text-5xl font-bold text-gray-800 leading-tight'>
            {course.title}
          </h1>

          <p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
            {course.description}
          </p>

          <div className='flex items-center gap-6 pt-4'>
            <span className='text-4xl font-bold text-blue-600'>
              {`₽ ${course.price}`}
            </span>
            <button className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-xl font-semibold hover:shadow-xl transition-all '>
              Приобрести курс
            </button>
          </div>
        </div>
      </div>
      <div className='mb-20'>
        <h2 className='text-3xl font-bold text-gray-800 mb-12 text-center'>
          Что вы получите
        </h2>
        <Advantages advantages={course.advantages} />
      </div>
      <FAQ faq={course.FAQ} />
    </section>
  );
}
