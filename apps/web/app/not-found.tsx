import { MAIN_ROUTES } from '@/consts/routes';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center text-center px-8 py-20 gap-8'>
      <h1 className='text-9xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent'>
        404
      </h1>
      <p className='text-2xl text-gray-600 font-light'>
        Страница не существует
      </p>
      <Link
        href={MAIN_ROUTES.HOME}
        className='bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-2xl text-xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all'
      >
        На главную
      </Link>
    </div>
  );
}
