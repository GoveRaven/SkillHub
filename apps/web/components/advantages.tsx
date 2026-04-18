import { TAdvantages } from '@/types/advantages';

interface IAdvantages {
  advantages: TAdvantages[];
}

export function Advantages({ advantages }: IAdvantages) {
  return (
    <div className='grid grid-cols-3 gap-8'>
      {advantages.map((advantage) => (
        <div
          key={advantage.title}
          className='bg-gradient-to-br from-indigo-600 to-purple-800 text-white rounded-2xl p-8 relative min-h-[200px]'
        >
          {advantage.icon ? (
            <div className='absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg'>
              <span className='text-3xl'>{advantage.icon}</span>
            </div>
          ) : (
            <></>
          )}
          <div className='pl-4 pt-4 text-left'>
            <h3 className='text-2xl font-bold'>{advantage.title}</h3>
            <p className='text-lg opacity-90 mt-5'>{advantage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
