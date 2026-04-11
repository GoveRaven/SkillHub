'use client';
import HeroBlock from './hero-block';
import PopularProducts from './popular-products';
import PlatformAdvantages from './platform-advantages';
import FAQBlock from './FAQ';
import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '@/api/utils/courses';
import { TFullCourse } from '@/types/courses';
import Loader from '@/component/loader';
import Error from '@/component/error';

export default function Home() {
  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetchCourses(),
  });

  if (isLoading) return <Loader />;
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
