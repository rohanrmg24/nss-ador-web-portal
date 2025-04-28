
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is currently in view
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2" onClick={() => handleNavClick('#home')}>
          <span className="text-primary font-bold text-xl md:text-2xl">
            NSS HSS Adoor
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-700 hover:text-primary transition-colors duration-200 font-medium relative ${
                activeSection === item.href.substring(1) ? 'text-primary' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
              <motion.div 
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0'
                }`}
                initial={{ width: 0 }}
                animate={{ width: activeSection === item.href.substring(1) ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className={`lg:hidden bg-white shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block py-3 text-left text-gray-700 hover:text-primary transition-colors duration-200 ${
                activeSection === item.href.substring(1) ? 'text-primary' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
