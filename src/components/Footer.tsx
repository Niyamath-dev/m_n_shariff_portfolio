
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Portfolio<span className="text-primary">.</span></h2>
            <p className="text-white/80 mb-4 max-w-xs">
              Creating exceptional digital experiences through WordPress development,
              UI/UX design, and strategic digital marketing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">WordPress Development</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">WooCommerce Development</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">Digital Marketing</a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">SEO Optimization</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#about" className="text-white/80 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="/#services" className="text-white/80 hover:text-primary transition-colors">Services</a>
              </li>
              <li>
                <a href="/#projects" className="text-white/80 hover:text-primary transition-colors">Portfolio</a>
              </li>
              <li>
                <Link to="/experience" className="text-white/80 hover:text-primary transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/education" className="text-white/80 hover:text-primary transition-colors">Education</Link>
              </li>
              <li>
                <a href="/#contact" className="text-white/80 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/80 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
