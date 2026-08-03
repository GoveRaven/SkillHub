'use client';

import { MAIN_ROUTES } from '@/consts/routes';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

export function Header() {
  //TODO: убирать header на страницах ошибки и 404
  // const pathname = usePathname();
  // const validPaths = Object.values(ROUTES);

  return (
    <header className='h-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-8 flex items-center'>
      <nav className='flex gap-8'>
        <Link
          href={MAIN_ROUTES.HOME}
          className='text-xl font-bold hover:text-indigo-200 transition-colors'
        >
          Skillhub
        </Link>
        <Link
          href={MAIN_ROUTES.CATALOG}
          className='text-lg font-semibold hover:text-indigo-200 transition-colors'
        >
          Каталог
        </Link>
        <Link
          href={MAIN_ROUTES.BLOG.ABOUT}
          className='text-lg font-semibold hover:text-indigo-200 transition-colors'
        >
          О нас
        </Link>
        <Link
          href={MAIN_ROUTES.BLOG.BLOG}
          className='text-lg font-semibold hover:text-indigo-200 transition-colors'
        >
          Статьи
        </Link>
      </nav>
    </header>
  );

  // if (isValidPath) {
  // } else {
  //   <></>;
  // }
}
