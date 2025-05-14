
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// We'll use this interface for our article data
interface Article {
  id: number;
  title: string;
  description: string;
  content?: string;
  category: string;
  date: string;
  time: string;
  image: string;
}

// Mock data for all articles
const allArticles: Article[] = [
  {
    id: 1,
    title: "افتتاح مشروع الطريق الدائري الجديد في طرابلس",
    description: "تم الإعلان عن افتتاح مشروع الطريق الدائري الجديد في العاصمة الليبية طرابلس، والذي يهدف إلى تخفيف الازدحام المروري.",
    content: "تم اليوم افتتاح مشروع الطريق الدائري الجديد في العاصمة الليبية طرابلس بحضور عدد من المسؤولين والشخصيات البارزة. يهدف هذا المشروع الحيوي إلى تخفيف الازدحام المروري في العاصمة وتحسين شبكة النقل العام. \n\nوبحسب المصادر، فإن هذا المشروع يعتبر من أبرز مشاريع البنية التحتية التي شهدتها العاصمة خلال السنوات الأخيرة، وتم تنفيذه وفق أحدث المعايير العالمية. \n\nويتوقع الخبراء أن يسهم هذا المشروع في تقليص مدة التنقل بين أطراف المدينة بنسبة تصل إلى 40%، مما سيكون له أثر إيجابي كبير على الحركة الاقتصادية والتجارية في المدينة.",
    category: "محلي",
    date: "14 مايو 2025",
    time: "09:30",
    image: "https://images.unsplash.com/photo-1612207149578-2072b157d523?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "مباحثات دولية حول تطوير القطاع النفطي الليبي",
    description: "عقدت مباحثات دولية في جنيف بمشاركة وفد ليبي رفيع المستوى لبحث سبل تطوير القطاع النفطي وزيادة الإنتاج.",
    content: "شهدت مدينة جنيف السويسرية مباحثات دولية مهمة حول تطوير القطاع النفطي الليبي بمشاركة وفد ليبي رفيع المستوى وممثلين عن شركات نفط عالمية. \n\nوتناولت المباحثات سبل تطوير البنية التحتية للقطاع النفطي وزيادة الإنتاج وتحسين عمليات التصدير، إضافة إلى بحث الفرص الاستثمارية المتاحة أمام الشركات العالمية. \n\nوأكد رئيس الوفد الليبي خلال المباحثات على التزام ليبيا بتطوير هذا القطاع الحيوي وفتح آفاق التعاون مع الشركات العالمية ذات الخبرة في هذا المجال، مشيراً إلى أن بلاده تسعى لزيادة إنتاجها النفطي إلى 2 مليون برميل يومياً بحلول عام 2026.",
    category: "اقتصاد",
    date: "13 مايو 2025",
    time: "15:45",
    image: "https://images.unsplash.com/photo-1582435726303-525048e40355?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "افتتاح معرض ليبيا الدولي للكتاب في بنغازي",
    description: "شهدت مدينة بنغازي افتتاح فعاليات معرض ليبيا الدولي للكتاب بمشاركة دور نشر محلية وعربية وأجنبية.",
    content: "افتتحت اليوم في مدينة بنغازي فعاليات معرض ليبيا الدولي للكتاب بمشاركة أكثر من 200 دار نشر محلية وعربية وأجنبية. \n\nويعد المعرض، الذي يستمر لمدة أسبوعين، من أبرز الفعاليات الثقافية في ليبيا هذا العام، حيث يضم أجنحة متخصصة في مختلف مجالات المعرفة والأدب والفنون. \n\nوأكد وزير الثقافة الليبي في كلمته خلال حفل الافتتاح على أهمية هذه الفعالية في تعزيز الحركة الثقافية والفكرية في البلاد، مشيراً إلى أن المعرض سيشهد تنظيم عدد من الندوات والمحاضرات وحفلات توقيع الكتب بمشاركة نخبة من المثقفين والكتاب من ليبيا والعالم العربي.",
    category: "ثقافة",
    date: "12 مايو 2025",
    time: "11:20",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "إنجاز ليبي جديد في المسابقة العالمية للعلوم والتكنولوجيا",
    description: "حقق الفريق الليبي إنجازاً مهماً في المسابقة العالمية للعلوم والتكنولوجيا التي أقيمت في سنغافورة هذا الأسبوع.",
    content: "حقق الفريق الليبي المشارك في المسابقة العالمية للعلوم والتكنولوجيا التي أقيمت في سنغافورة إنجازاً مهماً بحصوله على المركز الثالث في فئة الابتكارات التكنولوجية. \n\nوتكون الفريق من خمسة طلاب من جامعات ليبية مختلفة، قدموا مشروعاً مبتكراً في مجال الطاقة المتجددة نال إعجاب لجنة التحكيم الدولية. \n\nويعد هذا الإنجاز مهماً للغاية، حيث تنافس الفريق الليبي مع فرق من أكثر من 50 دولة حول العالم، وأثبت قدرته على المنافسة والإبداع في هذا المجال الحيوي. وقد أعربت وزارة التعليم العالي عن فخرها بهذا الإنجاز، مؤكدة على استمرار دعمها للمواهب الشابة في مختلف المجالات العلمية.",
    category: "تعليم",
    date: "11 مايو 2025",
    time: "14:15",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&q=80&w=800"
  }
];

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
