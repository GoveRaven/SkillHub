'use client';
import { TFullCourse } from '@/types/courses';
import Pagination from './pagination';
import CourseCard from '@/component/course-card';

interface ICoursesList {
  courses: TFullCourse[];
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
      <div className='grid grid-cols-3 gap-8 mb-16'>
        {courses.length === 0 ? (
          <div className='col-span-full flex flex-col items-center justify-center py-20'>
            <h2 className='text-2xl font-medium text-gray-500 mb-2 text-center'>
              Таких курсов нет
            </h2>
            <p className='text-gray-400 text-sm'>Попробуйте другие фильтры</p>
          </div>
        ) : (
          <CourseCard courses={currentCourses} />
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
