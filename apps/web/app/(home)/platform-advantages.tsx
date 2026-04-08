import Advantages from '@/component/advantages';
import { advantagesData } from '@/data/advantages.data';

export default function PlatformAdvantages() {
  const data = advantagesData;
  return (
    <section className='py-20 px-8 mx-auto'>
      <div className='text-center mb-16'>
        <h1 className='text-5xl font-bold text-gray-800 mb-6'>
          Почему SkillHub
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Всё для твоего успеха в IT
        </p>
      </div>
      <Advantages data={data} />
    </section>
  );
}
