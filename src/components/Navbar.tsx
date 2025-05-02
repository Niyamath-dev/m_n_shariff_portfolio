
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-primary">
            Portfolio<span className="text-foreground">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover-underline py-1 text-foreground/80 hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="hover-underline py-1 text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover-underline py-1 text-foreground/80 hover:text-foreground transition-colors">Services</a>
            <a href="#projects" className="hover-underline py-1 text-foreground/80 hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" className="hover-underline py-1 text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          </nav>
          
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)} size="icon" variant="ghost" className="md:hidden">
            <Menu />
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4 pb-2 animate-fade-in`}>
          <nav className="flex flex-col space-y-3">
            <a href="#home" className="py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#services" className="py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#projects" className="py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="py-2 px-3 rounded-md hover:bg-muted transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
