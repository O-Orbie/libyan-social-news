
import { Button } from "./ui/button";
import NewsCard from "./NewsCard";

interface NewsSectionProps {
  title: string;
  description?: string;
  articles: Array<{
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    time: string;
    image: string;
  }>;
  featured?: boolean;
  id?: string;
}

const NewsSection = ({ title, description, articles, featured = false, id }: NewsSectionProps) => {
  return (
    <section className="py-12" id={id}>
      <div className="news-container">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">{title}</h2>
          {description && <p className="text-gray-600 mt-2">{description}</p>}
        </div>
        
        <div className={`grid grid-cols-1 ${featured ? 'md:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-6`}>
          {articles.map((article) => (
            <NewsCard
              key={article.id}
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
        
        <div className="mt-10 text-center">
          <Button className="bg-primary hover:bg-primary/90">عرض المزيد من الأخبار</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
