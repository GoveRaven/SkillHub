'use client';
import { TCourse } from '@/types/courses';
import Pagination from './pagination';
import CourseCard from '@/component/course-card';

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
        <CourseCard courses={currentCourses} />
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
