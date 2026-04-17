import HeroBlock from './hero-block';
import PopularProducts from './popular-products';
import PlatformAdvantages from './platform-advantages';
import FAQBlock from './FAQ';
import { coursesData } from '@/data/courses.data';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <PopularProducts products={coursesData} />
      <PlatformAdvantages />
      <FAQBlock />
    </>
  );
}
