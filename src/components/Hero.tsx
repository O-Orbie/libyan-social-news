
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-accent text-white py-12 md:py-20">
      <div className="news-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">أخبار ليبيا الموثوقة والعاجلة</h1>
            <p className="text-lg md:text-xl text-gray-200">تابع معنا آخر المستجدات والأحداث في ليبيا والعالم. مصدرك الأول للأخبار المحلية والعالمية.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">تصفح الأخبار</Button>
              <Button variant="outline" size="lg" className="bg-transparent hover:bg-white/10 border-white text-white">اشترك في النشرة الإخبارية</Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1552649690-8a1ee90b4766?auto=format&fit=crop&q=80&w=1000" 
              alt="Libya News" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
