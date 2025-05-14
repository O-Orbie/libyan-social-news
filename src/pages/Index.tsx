
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import SocialFeed from "@/components/SocialFeed";
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

const politicsNews = [
  {
    id: 1,
    title: "المجلس الرئاسي الليبي يعقد اجتماعاً موسعاً لمناقشة التطورات السياسية",
    description: "عقد المجلس الرئاسي الليبي اجتماعاً موسعاً ضم مختلف الأطراف السياسية لمناقشة آخر التطورات وسبل تحقيق الاستقرار.",
    category: "سياسة",
    date: "14 مايو 2025",
    time: "10:30",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "وزير الخارجية الليبي يلتقي نظيره التونسي لبحث العلاقات الثنائية",
    description: "التقى وزير الخارجية الليبي بنظيره التونسي في تونس العاصمة لبحث سبل تعزيز العلاقات الثنائية والتعاون المشترك.",
    category: "سياسة",
    date: "13 مايو 2025",
    time: "16:45",
    image: "https://images.unsplash.com/photo-1661902995868-419408624156?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "انطلاق الحوار الوطني الليبي بمشاركة جميع الأطراف السياسية",
    description: "بدأت أعمال الحوار الوطني الليبي الشامل في طرابلس بمشاركة ممثلين عن جميع الأطراف السياسية في البلاد.",
    category: "سياسة",
    date: "12 مايو 2025",
    time: "09:20",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=800"
  }
];

const economyNews = [
  {
    id: 1,
    title: "ارتفاع إنتاج النفط الليبي إلى 1.3 مليون برميل يومياً",
    description: "أعلنت المؤسسة الوطنية للنفط عن ارتفاع إنتاج النفط الليبي إلى 1.3 مليون برميل يومياً وتوقعات بزيادة الإنتاج.",
    category: "اقتصاد",
    date: "14 مايو 2025",
    time: "11:30",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "إطلاق برنامج وطني لدعم المشاريع الصغيرة والمتوسطة في ليبيا",
    description: "أعلنت وزارة الاقتصاد الليبية عن إطلاق برنامج وطني لدعم المشاريع الصغيرة والمتوسطة بتمويل قدره 500 مليون دينار.",
    category: "اقتصاد",
    date: "13 مايو 2025",
    time: "14:45",
    image: "https://images.unsplash.com/photo-1556742049-0a8ea19e0244?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "توقيع اتفاقية تعاون اقتصادي بين ليبيا وتركيا",
    description: "وقعت ليبيا وتركيا اتفاقية تعاون اقتصادي شامل تتضمن استثمارات في البنية التحتية والطاقة والنفط.",
    category: "اقتصاد",
    date: "12 مايو 2025",
    time: "10:20",
    image: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&q=80&w=800"
  }
];

const sportsNews = [
  {
    id: 1,
    title: "المنتخب الليبي لكرة القدم يتأهل إلى كأس أمم أفريقيا",
    description: "حقق المنتخب الليبي لكرة القدم فوزاً مهماً على نظيره التنزاني وتأهل رسمياً إلى نهائيات كأس أمم أفريقيا.",
    category: "رياضة",
    date: "14 مايو 2025",
    time: "22:30",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "الأهلي طرابلس يفوز بكأس ليبيا لكرة القدم للمرة العاشرة",
    description: "توج نادي الأهلي طرابلس بلقب كأس ليبيا لكرة القدم للمرة العاشرة في تاريخه بعد فوزه في المباراة النهائية.",
    category: "رياضة",
    date: "13 مايو 2025",
    time: "19:45",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "بدء التحضيرات لاستضافة بطولة شمال أفريقيا لكرة السلة في بنغازي",
    description: "بدأت التحضيرات في مدينة بنغازي لاستضافة بطولة شمال أفريقيا لكرة السلة التي ستقام الشهر المقبل.",
    category: "رياضة",
    date: "12 مايو 2025",
    time: "16:20",
    image: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80&w=800"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <Hero />
      
      <NewsSection 
        id="latest"
        title="أحدث الأخبار"
        description="تابع آخر المستجدات والأحداث المحلية والعالمية"
        articles={latestNews}
        featured={true}
      />
      
      <SocialFeed />
      
      <NewsSection 
        id="politics"
        title="سياسة"
        description="آخر التطورات السياسية في ليبيا والعالم"
        articles={politicsNews}
      />
      
      <NewsSection 
        id="economy"
        title="اقتصاد"
        description="أهم الأخبار الاقتصادية والمالية"
        articles={economyNews}
      />
      
      <NewsSection 
        id="sports"
        title="رياضة"
        description="كل ما يتعلق بالرياضة المحلية والعالمية"
        articles={sportsNews}
      />
      
      <About />
      <Footer />
    </div>
  );
};

export default Index;
