'use client';

import { TFullCourse } from '@/types/courses';
import { Pagination } from './pagination';
import { CourseCards } from '@/component/course-card';
import { COURSESPERPAGE } from '@/consts/coursesPage';

interface ICourses {
  courses: TFullCourse[];
  currentPage: number;
  onPageChange: (filter: number) => void;
}

export function Courses({
  courses,
  currentPage,
  onPageChange,
}: ICourses) {
  const currentCourses = courses.slice(
    (currentPage - 1) * COURSESPERPAGE,
    currentPage * COURSESPERPAGE,
  );

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
          <CourseCards courses={currentCourses} />
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
