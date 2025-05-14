
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent text-white">
      <div className="news-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ليبيا <span className="text-primary">فقط</span></h3>
            <p className="text-gray-300 mb-4">
              منصة إخبارية ليبية مستقلة تهدف إلى تقديم أخبار موثوقة وتغطية شاملة للأحداث في ليبيا والعالم العربي.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">الصفحة الرئيسية</a></li>
              <li><a href="#latest" className="text-gray-300 hover:text-white transition-colors">أحدث الأخبار</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">أخبار محلية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">أخبار عالمية</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تكنولوجيا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">صحة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">فنون</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">تعليم</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-gray-300">طرابلس، ليبيا</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-300">+218 12 345 6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-300">info@onlylibya.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="news-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-300 mb-2 md:mb-0">
              &copy; {currentYear} ليبيا فقط. جميع الحقوق محفوظة لليبيا.
            </div>
            <div className="text-sm text-gray-300 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
