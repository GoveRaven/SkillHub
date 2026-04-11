'use client';
import { useState } from 'react';
import CoursesList from './coursesList';
import Filters from './filters';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '@/api/utils/courses';
import Loader from '@/component/loader';
import Error from '@/component/error';

export default function Catalog() {
  const [currentLevel, setCurrentLevel] = useState('Все');
  const [currentCategory, setCurrentCategory] = useState('Все');
  const [currentPage, setPage] = useState(1);

  const filters = {
    level: currentLevel,
    category: currentCategory,
  };

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['courses', currentLevel, currentCategory],
    queryFn: () => fetchCourses({ filters: filters }),
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className='py-20 px-8 w-7xl m-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
          Каталог курсов
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Найдите курс своего уровня {0 || courses.length} курсов всего
        </p>
      </div>
      <Filters
        currentFilters={[currentLevel, currentCategory]}
        onFilterChanges={[setCurrentLevel, setCurrentCategory]}
        onPageReset={setPage}
      />
      <CoursesList
        courses={courses || []}
        currentFilter={currentLevel}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </section>
  );
}
