'use client';

import { useCallback, useMemo, useState } from 'react';
import { Courses } from './courses';
import { Filters } from './filters';
import Loader from '@/components/loader';
import Error from '@/components/error';
import { useCourses } from '@/api/hooks/useCourses';
import { CATEGORY, SKILL_LEVEL } from '@/consts/filters';

export default function Catalog() {
  const [currentLevel, setCurrentLevel] = useState(SKILL_LEVEL.all);
  const [currentCategory, setCurrentCategory] = useState(CATEGORY.all);
  const [currentPage, setPage] = useState(1);
  const resetPage = useCallback(() => setPage(1), []);

  const filters = useMemo(
    () => ({
      skillLevel: currentLevel,
      category: currentCategory,
    }),
    [currentLevel, currentCategory],
  );

  const { courses, isPending, isError } = useCourses(filters);

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  return (
    <section className='py-20 px-8 w-7xl m-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
          Каталог курсов
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          {/* // TODO: Сделать утилит для склонения "курсов" */}
          Найдите курс своего уровня {courses.length} курсов всего
        </p>
      </div>
      <Filters
        filters={filters}
        onFilterChanges={{
          setLevel: setCurrentLevel,
          setCategory: setCurrentCategory,
        }}
        resetPage={resetPage}
      />
      <Courses
        courses={courses || []}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </section>
  );
}
