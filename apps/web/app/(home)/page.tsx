import { HeroBlock } from './hero-block';
import { PopularProducts } from './popular-products';
import { PlatformAdvantages } from './platform-advantages';
import { FAQBlock } from './faq';

export default function Home() {
  return (
    <>
      <HeroBlock />
      <PopularProducts />
      <PlatformAdvantages />
      <FAQBlock />
    </>
  );
}
