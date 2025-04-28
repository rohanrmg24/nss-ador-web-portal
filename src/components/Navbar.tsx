
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

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
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center" onClick={() => handleNavClick('#home')}>
          <span className="text-primary font-bold text-lg md:text-2xl">NSS HSS Adoor</span>
        </a>
        
        <button 
          className="focus:outline-none z-20" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>

        {/* Navigation Menu - Now as an overlay */}
        <motion.div 
          className={`fixed inset-0 bg-white ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-xl font-medium relative group ${
                  activeSection === item.href.substring(1) ? 'text-primary' : 'text-gray-700'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
                <motion.div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary ${
                    activeSection === item.href.substring(1) ? 'w-full' : 'w-0'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: activeSection === item.href.substring(1) ? '100%' : '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
