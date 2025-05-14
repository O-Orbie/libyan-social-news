
import { useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

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
              <span className="text-2xl font-bold text-accent">Only<span className="text-primary">Libya</span></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-primary font-medium transition-colors">الرئيسية</a>
            <a href="#latest" className="text-gray-800 hover:text-primary font-medium transition-colors">أحدث الأخبار</a>
            <a href="#about" className="text-gray-800 hover:text-primary font-medium transition-colors">من نحن</a>
          </nav>

          {/* Social */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
              <Instagram size={20} />
            </a>
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
              <a href="#about" className="text-gray-800 hover:text-primary font-medium transition-colors px-4">من نحن</a>
              
              <div className="flex items-center space-x-4 px-4 py-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
                  <Instagram size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
