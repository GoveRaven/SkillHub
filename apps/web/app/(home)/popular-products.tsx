import Link from 'next/link';
import { ROUTES } from '@/consts/routes';
import { TCourse } from '@/types/courses';
import CourseCard from '@/component/course-card';

interface IPopularProducts {
  products: TCourse[];
}

export default function PopularProducts({ products }: IPopularProducts) {
  const popularProduect = products.slice(0, 6)
  return (
    <section className='py-20 px-8 mx-auto'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>Курсы</h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Выбери курс и начни путь в IT
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <CourseCard courses={popularProduect} />
      </div>
      <Link
        href={ROUTES.CATALOG}
        className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all flex justify-center mt-16 mx-auto w-fit'
      >
        Посмотреть все курсы
      </Link>
    </section>
  );
}
