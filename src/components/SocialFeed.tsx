
import { Facebook, Instagram } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500",
    likes: 245,
    comments: 18,
    date: "2 ساعات مضت"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?auto=format&fit=crop&q=80&w=500",
    likes: 189,
    comments: 12,
    date: "5 ساعات مضت"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&q=80&w=500",
    likes: 321,
    comments: 29,
    date: "يوم مضى"
  },
];

const facebookPosts = [
  {
    id: 1,
    title: "تطورات الوضع الاقتصادي في ليبيا",
    excerpt: "تقرير خاص عن آخر التطورات الاقتصادية والتحديات التي تواجه القطاع المالي الليبي...",
    likes: 542,
    comments: 48,
    shares: 125,
    date: "أمس"
  },
  {
    id: 2,
    title: "افتتاح معرض الكتاب في طرابلس",
    excerpt: "بحضور عدد من المثقفين والكتاب الليبيين والعرب، تم افتتاح معرض الكتاب السنوي في العاصمة...",
    likes: 324,
    comments: 27,
    shares: 87,
    date: "منذ يومين"
  }
];

const SocialFeed = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="news-container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent">تابعنا على منصات التواصل الاجتماعي</h2>
          <p className="text-gray-600 mt-2">آخر المنشورات من صفحاتنا على فيسبوك وانستغرام</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instagram Feed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Instagram size={24} className="text-pink-600" />
                <span>Instagram</span>
              </h3>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@libya_news</a>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              {instagramPosts.map(post => (
                <a key={post.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group relative">
                  <img 
                    src={post.image} 
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                    <div className="flex items-center gap-2 text-sm">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                    <div className="text-xs mt-1">{post.date}</div>
                  </div>
                </a>
              ))}
            </div>
            
            <Button variant="outline" className="w-full" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="mr-2" />
                متابعة على انستغرام
              </a>
            </Button>
          </div>
          
          {/* Facebook Feed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Facebook size={24} className="text-blue-600" />
                <span>Facebook</span>
              </h3>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@libya_news</a>
            </div>
            
            <div className="space-y-3">
              {facebookPosts.map(post => (
                <Card key={post.id} className="bg-white">
                  <CardHeader className="pb-2">
                    <h4 className="font-bold text-lg">{post.title}</h4>
                  </CardHeader>
                  <CardContent className="py-2">
                    <p className="text-gray-600">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="pt-2 text-sm text-gray-500 flex justify-between">
                    <div className="flex items-center gap-3">
                      <span>👍 {post.likes}</span>
                      <span>💬 {post.comments}</span>
                      <span>↗️ {post.shares}</span>
                    </div>
                    <span>{post.date}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Button variant="outline" className="w-full" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} className="mr-2" />
                متابعة على فيسبوك
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
