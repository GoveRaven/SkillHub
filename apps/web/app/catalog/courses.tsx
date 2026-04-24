'use client';

import { TFullCourse } from '@/types/courses';
import { Pagination } from './pagination';
import { CourseCard } from '@/components/course-card';
import { COURSESPERPAGE } from '@/consts/courses-page';
import { useMemo } from 'react';

type TCourses = {
  courses: TFullCourse[];
  currentPage: number;
  onPageChange: (filter: number) => void;
};

export function Courses({ courses, currentPage, onPageChange }: TCourses) {
  const currentCourses = useMemo(() => {
    return courses.slice(
      (currentPage - 1) * COURSESPERPAGE,
      currentPage * COURSESPERPAGE,
    );
  }, [courses, currentPage]);

  const countPages = Math.ceil(courses.length / 9);

  return (
    <>
      <div className='grid grid-cols-3 gap-8 mb-16'>
        {courses.length === 0 ? (
          <div className='col-span-full flex flex-col items-center justify-center py-20'>
            <h2 className='text-2xl font-medium text-gray-500 mb-2 text-center'>
              Таких курсов нет
            </h2>
            <p className='text-gray-400 text-sm'>Попробуйте другие фильтры</p>
          </div>
        ) : (
          currentCourses.map((course: TFullCourse) => (
            <CourseCard key={course.documentId} course={course} />
          ))
        )}
      </div>
      {countPages > 1 && (
        <Pagination
          countPages={countPages}
          curentPage={currentPage}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
