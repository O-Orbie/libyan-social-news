
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import ClickableNewsCard from "@/components/ClickableNewsCard";
import About from "@/components/About";
import Footer from "@/components/Footer";

// Mock data for news articles
const latestNews = [
  {
    id: 1,
    title: "افتتاح مشروع الطريق الدائري الجديد في طرابلس",
    description: "تم الإعلان عن افتتاح مشروع الطريق الدائري الجديد في العاصمة الليبية طرابلس، والذي يهدف إلى تخفيف الازدحام المروري.",
    category: "محلي",
    date: "14 مايو 2025",
    time: "09:30",
    image: "https://images.unsplash.com/photo-1612207149578-2072b157d523?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "مباحثات دولية حول تطوير القطاع النفطي الليبي",
    description: "عقدت مباحثات دولية في جنيف بمشاركة وفد ليبي رفيع المستوى لبحث سبل تطوير القطاع النفطي وزيادة الإنتاج.",
    category: "اقتصاد",
    date: "13 مايو 2025",
    time: "15:45",
    image: "https://images.unsplash.com/photo-1582435726303-525048e40355?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "افتتاح معرض ليبيا الدولي للكتاب في بنغازي",
    description: "شهدت مدينة بنغازي افتتاح فعاليات معرض ليبيا الدولي للكتاب بمشاركة دور نشر محلية وعربية وأجنبية.",
    category: "ثقافة",
    date: "12 مايو 2025",
    time: "11:20",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "إنجاز ليبي جديد في المسابقة العالمية للعلوم والتكنولوجيا",
    description: "حقق الفريق الليبي إنجازاً مهماً في المسابقة العالمية للعلوم والتكنولوجيا التي أقيمت في سنغافورة هذا الأسبوع.",
    category: "تعليم",
    date: "11 مايو 2025",
    time: "14:15",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=800"
  },
];

// Custom NewsSection with clickable cards
const ClickableNewsSection = ({ title, description, articles, featured = false, id }) => {
  return (
    <section className="py-12" id={id}>
      <div className="news-container">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">{title}</h2>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
        
        <div className={`grid grid-cols-1 ${featured ? 'md:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-6`}>
          {articles.map((article) => (
            <ClickableNewsCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              category={article.category}
              date={article.date}
              time={article.time}
              image={article.image}
              featured={featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <Hero />
      
      <ClickableNewsSection 
        id="latest"
        title="أحدث الأخبار"
        description="تابع آخر المستجدات والأحداث المحلية والعالمية"
        articles={latestNews}
        featured={true}
      />
      
      <About />
      <Footer />
    </div>
  );
};

export default Index;
