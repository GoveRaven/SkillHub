'use client';
import { ROUTES } from '@/consts/routes';
import Link from 'next/link';
// import { usePathname } from 'next/navigation';

export default function Header() {
  // const pathname = usePathname();
  // const validPaths = Object.values(ROUTES);

  return (
    <header className='h-20 bg-gradient-to-br from-blue-600 to-indigo-800 text-white px-8 flex items-center'>
      <nav className='flex gap-8'>
        <Link
          href={ROUTES.HOME}
          className='text-xl font-bold hover:text-indigo-200 transition-colors'
        >
          Skillhub
        </Link>
        <Link
          href={ROUTES.CATALOG}
          className='text-lg font-semibold hover:text-indigo-200 transition-colors'
        >
          Каталог
        </Link>
      </nav>
    </header>
  );

  // if (isValidPath) {
  // } else {
  //   <></>;
  // }
}
