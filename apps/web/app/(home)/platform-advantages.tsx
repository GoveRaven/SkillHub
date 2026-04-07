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
      <div className='grid grid-cols-3 gap-8'>
        {data.map((advantage, id) => (
          <div
            key={id}
            className='bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-2xl p-8 relative min-h-[200px]'
          >
            <div className='absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg'>
              <span className='text-3xl'>{advantage.icon}</span>
            </div>

            <div className='pl-4 pt-4 text-left'>
              <h3 className='text-2xl font-bold'>{advantage.title}</h3>
              <p className='text-lg opacity-90 mt-5'>{advantage.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
