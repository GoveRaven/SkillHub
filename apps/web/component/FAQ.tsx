import { TFAQ } from '@/types/FAQ';

interface IFAQ {
  data: TFAQ[];
}

export default function FAQ({ data }: IFAQ) {
  return (
    <div className='space-y-6 max-w-5xl mx-auto'>
      {data.map((faq, index) => (
        <div
          key={index}
          className='bg-white border-2 border-gray-200 rounded-xl p-10 shadow-lg'
        >
          <h3 className='text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-indigo-600 to-purple-800 bg-clip-text'>
            {faq.question}
          </h3>
          <p className='text-lg text-gray-700 leading-relaxed'>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
