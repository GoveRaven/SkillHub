import { faqItemsData } from '@/data/FAQ.data';

export default function FAQ() {
  const data = faqItemsData;
  return (
    <section className='py-20 px-8'>
      <div className='text-center mb-20 max-w-4xl mx-auto'>
        <h2 className='text-5xl font-bold text-gray-800 mb-6'>
          Часто задаваемые вопросы
        </h2>
        <p className='text-xl text-gray-600'>Ответы на все твои вопросы</p>
      </div>

      <div className='space-y-6 max-w-5xl mx-auto'>
        {data.map((faq, index) => (
          <div
            key={index}
            className='bg-white border-2 border-gray-200 rounded-xl p-10 shadow-lg'
          >
            <h3 className='text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-indigo-600 to-purple-800 bg-clip-text'>
              {faq.question}
            </h3>
            <p className='text-lg text-gray-700 leading-relaxed'>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
