'use client'

import Link from 'next/link';
import { ROUTES } from '@/consts/routes';
import { TFullCourse } from '@/types/courses';
import { CourseCard } from '@/components/course-card';
import { EmptyState } from '@/components/empty-state';
import { useCourses } from '@/api/hooks/useCourses';
import Loader from '@/components/loader';
import Error from '@/components/error';

export function PopularProducts() {
  const { courses, isPending, isError } = useCourses();

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  const favoriteCourses = [...courses].sort(
    (a: TFullCourse, b: TFullCourse) => Number(b.rating) - Number(a.rating),
  );
  const popularProducts = favoriteCourses.slice(0, 6);
  return (
    <section className='py-20 px-8 mx-75'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>Курсы</h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Выбери курс и начни путь в IT
        </p>
      </div>
      {popularProducts.length > 0 ? (
        <div className='grid grid-cols-3 gap-8'>
          {popularProducts.map((course: TFullCourse) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
      <Link
        href={ROUTES.CATALOG}
        className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all flex justify-center mt-16 mx-auto w-fit'
      >
        Посмотреть все курсы
      </Link>
    </section>
  );
}
