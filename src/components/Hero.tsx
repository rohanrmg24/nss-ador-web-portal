
import { motion } from 'framer-motion';

const Hero = () => {
  const newsTicker = [
    "Admissions open for 2025-26 Academic Year",
    "NSS HSS Adoor wins Best School Award 2024",
    "Science Exhibition scheduled for next month",
    "Our students secured top ranks in state exams",
    "Sports Day celebration on November 15th"
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')`,
          filter: 'brightness(0.7)' 
        }}
      >
        {/* Parallax Effect Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NSS Higher Secondary School
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering Futures, Inspiring Excellence
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#academics" 
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#academics');
              if (element) {
                const yOffset = -60;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Explore Academics
          </a>
          <a 
            href="#admission" 
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#admission');
              if (element) {
                const yOffset = -60;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
          >
            Apply Now
          </a>
        </motion.div>
      </div>
      
      {/* News Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-3 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-primary text-white px-4 py-1 rounded-md mr-4 whitespace-nowrap">
              <span className="font-bold">Latest News</span>
            </div>
            <div className="news-ticker overflow-hidden">
              <div className="news-ticker-content animate-marquee">
                {newsTicker.map((news, index) => (
                  <span key={index} className="mr-12 text-gray-700">{news}</span>
                ))}
                {/* Repeat for smooth looping */}
                {newsTicker.map((news, index) => (
                  <span key={`repeat-${index}`} className="mr-12 text-gray-700">{news}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
