
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { allArticles, Article } from "@/def/articles";

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article data
    const fetchArticle = () => {
      setLoading(true);
      
      try {
        const foundArticle = allArticles.find(article => article.id === Number(id));
        
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          toast({
            title: "خطأ",
            description: "لم يتم العثور على المقال المطلوب",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error("Error fetching article:", error);
        toast({
          title: "خطأ",
          description: "حدث خطأ أثناء تحميل المقال",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header />
        <div className="news-container py-16 text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-6"></div>
            <div className="h-64 bg-gray-200 rounded w-full mb-8"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Header />
        <div className="news-container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
          <p className="mb-8">لم نتمكن من العثور على المقال الذي تبحث عنه.</p>
          <Link to="/">
            <Button>العودة إلى الصفحة الرئيسية</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      
      <main className="news-container py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ChevronLeft size={18} />
          <span>العودة للصفحة الرئيسية</span>
        </Link>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-[400px] object-cover" />
          
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{article.category}</span>
              <span>{article.date} • {article.time}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{article.title}</h1>
            
            <div className="prose max-w-none">
              {(article.content || article.description).split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
