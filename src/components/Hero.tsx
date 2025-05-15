import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className='bg-accent text-white py-12 md:py-20'>
      <div className='news-container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6 animate-fade-in'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              ليبيا فقط
            </h1>
            <p className='text-lg md:text-xl text-gray-200'>
              تابع معنا آخر المستجدات والأحداث في ليبيا والعالم. مصدرك الأول
              للأخبار المحلية والعالمية.
            </p>
          </div>
          <div className='rounded-lg overflow-hidden shadow-xl animate-fade-in'>
            <img
              src='/hero.jpg'
              alt='Only Libya'
              className='w-full h-[300px] md:h-[400px] object-contain object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
