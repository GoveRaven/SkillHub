import Link from 'next/link';
import { TPopularProducts } from '../../types/popular-products';
import { ROUTES } from '@/consts/routes';

interface IPopularProducts {
  products: TPopularProducts[];
}

export default function PopularProducts({ products }: IPopularProducts) {
  return (
    <section className='py-20 px-8 mx-auto'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>Курсы</h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Выбери курс и начни путь в IT
        </p>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white border border-black rounded-2xl p-8 hover:shadow-xl transition-all'
            style={{ minHeight: '300px' }}
          >
            <div className='space-y-4 text-left'>
              <h3 className='text-3xl font-bold text-gray-800'>
                {product.title}
              </h3>
              <p className='text-lg text-gray-600'>{product.level}</p>
              <p className='text-lg text-gray-600'>{product.rating}</p>
              <p className='text-2xl font-bold text-blue-600'>
                {product.price}
              </p>
            </div>
          </div>
        ))}
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
