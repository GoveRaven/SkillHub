'use client';
import HeroBlock from './hero-block';
import PopularProducts from './popular-products';
import PlatformAdvantages from './platform-advantages';
import FAQBlock from './FAQ';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '@/api/utils/courses';
import { TFullCourse } from '@/types/courses';

export default function Home() {
  const { data: courses, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetchCourses(),
  });

  //TODO: добавить loader
  if (isLoading) return <></>;

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
