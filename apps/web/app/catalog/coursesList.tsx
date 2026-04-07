'use client';
import { TCourse } from '@/types/courses';
import Pagination from './pagination';

interface ICoursesList {
  courses: TCourse[];
  currentFilter: string;
  currentPage: number;
  onPageChange: (filter: number) => void;
}

export default function CoursesList({
  courses,
  currentFilter,
  currentPage,
  onPageChange,
}: ICoursesList) {
  const coursesPerPage = 9;

  const filteredCourses =
    currentFilter === 'Все'
      ? courses
      : courses.filter((course) => course.level === currentFilter);

  const currentCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage,
  );

  const countPages = Math.ceil(filteredCourses.length / 9);

  return (
    <>
      {' '}
      <div className='grid grid-cols-3 gap-8 mb-16'>
        {currentCourses.map((course) => (
          <div
            key={course.id}
            className='bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all 
                 col-span-1 h-full flex flex-col justify-between'
          >
            <div className='space-y-3'>
              <h3 className='text-2xl font-bold text-gray-800 line-clamp-2'>
                {course.title}
              </h3>
              <span className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium inline-block'>
                {course.level}
              </span>
            </div>

            <div className='mt-auto space-y-2'>
              <span className='text-lg text-gray-600 block'>
                {course.rating}
              </span>
              <span className='text-2xl font-bold text-blue-600'>
                {course.price}
              </span>
            </div>
          </div>
        ))}
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
