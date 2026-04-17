import { ROUTES } from '@/consts/routes';
import { TCourse } from '@/types/courses';
import Link from 'next/link';

interface ICourseCard {
  courses: TCourse[];
}

export default function CourseCard({ courses }: ICourseCard) {
  return (
    <>
      {courses.map((course) => (
        <Link
          href={`${ROUTES.COURSE}/${course.id}`}
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
            <span className='text-lg text-gray-600 block'>{course.rating}</span>
            <span className='text-2xl font-bold text-blue-600'>
              {course.price}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
