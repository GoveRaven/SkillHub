import { popularProductsData } from '@/data/popular-products.data';
import HeroBlock from './hero-block';
import PopularProducts from './popular-products';
import PlatformAdvantages from './platform-advantages';
import FAQ from './FAQ';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <PopularProducts products={popularProductsData} />
      <PlatformAdvantages />
      <FAQ />
    </>
  );
}
