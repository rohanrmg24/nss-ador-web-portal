
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  const [isInView, setIsInView] = useState(false);
  
  const timelineEvents = [
    { year: "1960", event: "Foundation of NSS HSS Adoor" },
    { year: "1975", event: "Expansion of campus and facilities" },
    { year: "1992", event: "Introduction of science stream" },
    { year: "2005", event: "Modernization of laboratories" },
    { year: "2015", event: "Golden Jubilee celebrations" },
    { year: "2020", event: "Diamond Jubilee celebrations" },
    { year: "2023", event: "Ranked among top 10 schools in the state" }
  ];
  
  const staffMembers = [
    { 
      name: "Dr. Rajesh Kumar", 
      role: "Principal",
      photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      contact: "principal@nsshssadoor.edu",
      phone: "+91 9876543210"
    },
    { 
      name: "Ms. Lakshmi Nair", 
      role: "Vice Principal",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
      contact: "viceprincipal@nsshssadoor.edu",
      phone: "+91 9876543211"
    },
    { 
      name: "Mr. Thomas Jacob", 
      role: "Science HOD",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      contact: "science@nsshssadoor.edu",
      phone: "+91 9876543212"
    },
    { 
      name: "Dr. Priya Menon", 
      role: "Commerce HOD",
      photo: "https://images.unsplash.com/photo-1580894732930-0babd100d356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      contact: "commerce@nsshssadoor.edu",
      phone: "+91 9876543213"
    }
  ];
  
  return (
    <section id="about" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our School</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Founded in 1960, NSS Higher Secondary School in Adoor has been a beacon of academic excellence and holistic development for over six decades, nurturing generations of successful professionals and responsible citizens.
          </p>
        </motion.div>
        
        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 w-1 md:w-0.5 h-full bg-primary-light transform md:translate-x-[-50%] z-0"></div>
            
            {/* Timeline Events */}
            <div className="relative z-10">
              {timelineEvents.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start mb-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:w-1/2"></div>
                  <div className="rounded-full w-8 h-8 bg-primary flex items-center justify-center absolute left-0 md:left-1/2 transform md:translate-x-[-50%]">
                    <div className="rounded-full w-4 h-4 bg-white"></div>
                  </div>
                  <div 
                    className={`pt-1 md:w-1/2 pl-12 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h4 className="text-xl font-bold text-primary mb-2">{item.year}</h4>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mission, Vision & Principal's Message */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Mission & Vision</h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="mission" className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-white px-6 py-4 hover:bg-gray-50">
                <span className="text-lg font-semibold text-gray-800">Our Mission</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  Our mission is to provide quality education that nurtures intellectual growth, character development, and lifelong learning skills. We strive to create a supportive environment where students can discover their potential and develop into responsible global citizens with strong values and leadership qualities.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="vision" className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-white px-6 py-4 hover:bg-gray-50">
                <span className="text-lg font-semibold text-gray-800">Our Vision</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <p className="text-gray-600">
                  To be recognized as a premier educational institution that empowers students with knowledge, skills, and values necessary to excel in a rapidly changing global society. We envision our students as confident, compassionate, and creative individuals who contribute positively to society.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="principal" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-white px-6 py-4 hover:bg-gray-50">
                <span className="text-lg font-semibold text-gray-800">Principal's Message</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <img 
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                      alt="School Principal" 
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="w-full md:w-3/4">
                    <p className="text-gray-600 mb-4">
                      Dear Students, Parents, and Well-wishers,
                    </p>
                    <p className="text-gray-600 mb-4">
                      It gives me immense pleasure to welcome you to NSS Higher Secondary School, Adoor. For over six decades, our institution has been committed to providing holistic education that emphasizes academic excellence, character building, and overall development.
                    </p>
                    <p className="text-gray-600 mb-2">
                      At NSS HSS Adoor, we believe in nurturing not just bright minds but also compassionate hearts. Our dedicated faculty and state-of-the-art facilities create the perfect environment for students to explore their potential and prepare for future challenges.
                    </p>
                    <p className="text-right font-semibold text-gray-700 mt-4">
                      - Dr. Rajesh Kumar, Principal
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Staff Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffMembers.map((staff, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-60 overflow-hidden">
                  <img 
                    src={staff.photo} 
                    alt={staff.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{staff.name}</h4>
                  <p className="text-primary font-medium mb-4">{staff.role}</p>
                </div>
                
                {/* Hover Contact Info */}
                <div className="absolute inset-0 bg-primary bg-opacity-90 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-4">{staff.name}</h4>
                  <p className="text-white mb-2">
                    <span className="font-semibold">Email:</span> {staff.contact}
                  </p>
                  <p className="text-white">
                    <span className="font-semibold">Phone:</span> {staff.phone}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
