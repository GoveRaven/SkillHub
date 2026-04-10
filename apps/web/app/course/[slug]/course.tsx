'use client';

import Advantages from '@/component/advantages';
import FAQ from '@/component/FAQ';
import { TFullCourse } from '@/types/courses';
import Image from 'next/image';

interface ICourse {
  content: TFullCourse;
}

export default function Course({ content }: ICourse) {
  return (
    <section className='py-20 px-8 max-w-7xl mx-auto'>
      <div className='grid grid-cols-2 gap-12 mb-20 items-start'>
        <Image
          className='w-full h-[500px] bg-gray-200 rounded-3xl'
          src={`http://localhost:1337${content.cover.url}`}
          alt={content.cover.alternativeText}
          width={100}
          height={100}
          // TODO: УБРАТЬ unoptimized
          unoptimized
        ></Image>
        <div className='space-y-8'>
          <div className='flex gap-4'>
            <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full'>
              {content.category}
            </span>
            <span className='px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full'>
              {content.author}
            </span>
            <span className='px-4 py-2 bg-amber-100 text-amber-800 rounded-full'>
              {content.level}
            </span>
          </div>

          <h1 className='text-5xl font-bold text-gray-800 leading-tight'>
            {content.title}
          </h1>

          <p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
            {content.description}
          </p>

          <div className='flex items-center gap-6 pt-4'>
            <span className='text-4xl font-bold text-blue-600'>
              {content.price}
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
        <Advantages data={content.advantages} />
      </div>
      <FAQ data={content.FAQ} />
    </section>
  );
}
