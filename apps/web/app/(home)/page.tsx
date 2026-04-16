'use client';
import HeroBlock from './hero-block';
import PopularProducts from './popular-products';
import PlatformAdvantages from './platform-advantages';
import FAQBlock from './FAQ';
import { TFullCourse } from '@/types/courses';
import Loader from '@/component/loader';
import Error from '@/component/error';
import { useCourses } from '@/api/hooks/useCourses';

export default function Home() {
  const { courses, isPending, isError } = useCourses();

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  const favoriteCourses = [...courses].sort(
    (a: TFullCourse, b: TFullCourse) => Number(b.rating) - Number(a.rating),
  );

  return (
    <>
      <HeroBlock />
      <PopularProducts products={favoriteCourses} />
      <PlatformAdvantages />
      <FAQBlock />
    </>
  );
}
