
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClickableNewsCard from "@/components/ClickableNewsCard";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { allArticles } from "@/def/articles";


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
        articles={allArticles}
        featured={true}
      />
      
      <About />
      <Footer />
    </div>
  );
};

export default Index;
