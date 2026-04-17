import { FAQ } from '@/component/FAQ';
import { faqItems } from '@/data/FAQ.data';

export function FAQBlock() {
  return (
    <section className='py-20 px-8'>
      <div className='text-center mb-20 max-w-4xl mx-auto'>
        <h2 className='text-5xl font-bold text-gray-800 mb-6'>
          Часто задаваемые вопросы
        </h2>
        <p className='text-xl text-gray-600'>Ответы на все твои вопросы</p>
      </div>
      <FAQ faq={faqItems} />
    </section>
  );
}
