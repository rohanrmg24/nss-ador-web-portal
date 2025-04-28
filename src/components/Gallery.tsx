
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Sample gallery images with different heights for masonry effect
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Students in science lab",
      category: "Academic",
      height: "tall", // tall image
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "School building",
      category: "Campus",
      height: "medium", // medium height image
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Cultural performance",
      category: "Cultural",
      height: "medium", // medium height image
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Sports competition",
      category: "Sports",
      height: "short", // short image
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "School library",
      category: "Campus",
      height: "tall", // tall image
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1550305080-4e029753abcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Classroom session",
      category: "Academic",
      height: "medium", // medium height image
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Students playing",
      category: "Sports",
      height: "medium", // medium height image
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Award ceremony",
      category: "Events",
      height: "short", // short image
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      alt: "Annual day celebration",
      category: "Cultural",
      height: "tall", // tall image
    },
  ];
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore moments from our vibrant campus life, academic achievements, cultural events, and sporting triumphs through our photo gallery.
          </p>
        </motion.div>
        
        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`cursor-pointer overflow-hidden rounded-lg ${
                image.height === 'tall' ? 'row-span-2' : 
                image.height === 'short' ? '' : ''
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => handleImageClick(image)}
            >
              <div className="relative group h-full">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white font-medium">{image.alt}</div>
                  <div className="text-primary-light text-sm">{image.category}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Image Modal/Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white bg-primary hover:bg-primary-dark w-10 h-10 rounded-full flex items-center justify-center"
                  onClick={closeModal}
                  aria-label="Close gallery image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[85vh] mx-auto"
                />
                <div className="bg-white p-4 rounded-b-lg">
                  <h4 className="text-lg font-medium">{selectedImage.alt}</h4>
                  <p className="text-primary">{selectedImage.category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
