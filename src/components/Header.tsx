
import { useState } from "react";
import { Facebook, Instagram, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="news-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-accent">LIBYA<span className="text-primary">NEWS</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-primary font-medium transition-colors">الرئيسية</a>
            <a href="#latest" className="text-gray-800 hover:text-primary font-medium transition-colors">أحدث الأخبار</a>
            <a href="#politics" className="text-gray-800 hover:text-primary font-medium transition-colors">سياسة</a>
            <a href="#economy" className="text-gray-800 hover:text-primary font-medium transition-colors">اقتصاد</a>
            <a href="#sports" className="text-gray-800 hover:text-primary font-medium transition-colors">رياضة</a>
            <a href="#about" className="text-gray-800 hover:text-primary font-medium transition-colors">من نحن</a>
          </nav>

          {/* Social and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
              <Instagram size={20} />
            </a>
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="ابحث هنا..." className="pl-10 pr-4 w-40" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">الرئيسية</a>
              <a href="#latest" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">أحدث الأخبار</a>
              <a href="#politics" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">سياسة</a>
              <a href="#economy" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">اقتصاد</a>
              <a href="#sports" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">رياضة</a>
              <a href="#about" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">من نحن</a>
              
              <div className="flex items-center space-x-4 px-4 py-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                  <Instagram size={20} />
                </a>
              </div>
              
              <div className="relative px-4">
                <Search size={20} className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="ابحث هنا..." className="pl-10 pr-4" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
