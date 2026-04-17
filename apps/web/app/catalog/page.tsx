'use client';
import { useState } from 'react';
import CoursesList from './coursesList';
import Filters from './filters';
import { coursesData } from '@/data/courses.data';

export default function Catalog() {
  const [currentFilter, setCurrentFilter] = useState('Все');
  const [currentPage, setPage] = useState(1);

  return (
    <section className='py-20 px-8 w-7xl m-auto'>
      <div className='text-center mb-20'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
          Каталог курсов
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Найдите курс своего уровня {coursesData.length} курсов всего
        </p>
      </div>
      <Filters
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        onPageReset={setPage}
      />
      <CoursesList
        courses={coursesData}
        currentFilter={currentFilter}
        currentPage={currentPage}
        onPageChange={setPage}
      />
    </section>
  );
}
