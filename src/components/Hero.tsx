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
          backgroundImage: `url('https://lh3.googleusercontent.com/gps-cs-s/AB5caB_iepHY9qvJlAZSD6218kbpdn4nTS2wEB_DqLh7DGM2UAFnmhYMs7DSH8PqV6win8vzvm2aEVv3710gjI-toXPQ_2wXkRSsrvr_nn_Qmc_TRlM6RhjoaAYWRyVwtMP11xzB0W8k=s1360-w1360-h1020-rw')`,
          filter: 'brightness(0.7)' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          NSS Higher Secondary School Adoor
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8"
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
            className="btn-primary text-sm md:text-base"
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
        </motion.div>
      </div>
      
      {/* News Ticker with slower speed */}
      <div className="absolute bottom-0 left-0 right-0 bg-white py-2 md:py-3 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-primary text-white px-3 md:px-4 py-1 rounded-md mr-4 whitespace-nowrap">
              <span className="text-sm md:text-base font-bold">Latest News</span>
            </div>
            <div className="news-ticker overflow-hidden">
              <div className="news-ticker-content animate-marquee">
                {newsTicker.map((news, index) => (
                  <span key={index} className="mr-12 text-gray-700 text-sm md:text-base">{news}</span>
                ))}
                {newsTicker.map((news, index) => (
                  <span key={`repeat-${index}`} className="mr-12 text-gray-700 text-sm md:text-base">{news}</span>
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
