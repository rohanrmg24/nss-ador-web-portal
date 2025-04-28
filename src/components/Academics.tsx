
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Academics = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const courses = {
    science: [
      { name: "Physics", description: "Comprehensive study of matter, energy, and their interactions. Includes mechanics, thermodynamics, optics, and modern physics." },
      { name: "Chemistry", description: "Exploration of substances, their properties, composition, and transformations. Covers organic, inorganic, and physical chemistry." },
      { name: "Biology", description: "Study of living organisms and their vital processes. Includes botany, zoology, genetics, and ecology." },
      { name: "Mathematics", description: "Advanced mathematics including calculus, algebra, geometry, and statistics." }
    ],
    commerce: [
      { name: "Accountancy", description: "Principles and practices of maintaining financial records, preparing financial statements, and analyzing business transactions." },
      { name: "Business Studies", description: "Understanding business operations, management principles, entrepreneurship, and corporate strategies." },
      { name: "Economics", description: "Study of production, distribution, and consumption of goods and services. Includes micro and macroeconomics." },
      { name: "Computer Applications", description: "Practical computer skills, programming basics, and software applications for business." }
    ],
    humanities: [
      { name: "History", description: "Study of past events, civilizations, and their impact on the present world. Focuses on Indian and world history." },
      { name: "Political Science", description: "Understanding political systems, theories, governance structures, and international relations." },
      { name: "Sociology", description: "Study of human society, social relationships, interactions, and cultural phenomena." },
      { name: "English Literature", description: "Critical analysis of literary works, authors, and literary movements across different periods." }
    ]
  };

  const calendarEvents = [
    { date: "2024-08-01", type: "holiday", title: "Independence Day", details: "School closed for Independence Day celebrations" },
    { date: "2024-08-15", type: "exam", title: "First Term Examinations Begin", details: "Examinations for all classes start" },
    { date: "2024-09-05", type: "event", title: "Teachers' Day", details: "Special assembly and celebrations" },
    { date: "2024-09-20", type: "holiday", title: "Onam Vacation Begins", details: "School closed for Onam holidays" },
    { date: "2024-10-02", type: "holiday", title: "Gandhi Jayanti", details: "School closed for Gandhi Jayanti" },
    { date: "2024-10-15", type: "exam", title: "Mid-Term Assessments", details: "Mid-term assessments for all streams" },
    { date: "2024-11-10", type: "event", title: "Annual Science Exhibition", details: "Science projects and models presentation" },
    { date: "2024-12-15", type: "exam", title: "Second Term Examinations Begin", details: "Final examinations for all classes" },
    { date: "2024-12-23", type: "holiday", title: "Christmas Vacation Begins", details: "School closed for Christmas holidays" },
  ];

  const documents = [
    { name: "Science Stream Timetable", type: "PDF", size: "245 KB", url: "#" },
    { name: "Commerce Stream Timetable", type: "PDF", size: "240 KB", url: "#" },
    { name: "Humanities Stream Timetable", type: "PDF", size: "238 KB", url: "#" },
    { name: "Physics Syllabus", type: "PDF", size: "320 KB", url: "#" },
    { name: "Chemistry Syllabus", type: "PDF", size: "315 KB", url: "#" },
    { name: "Biology Syllabus", type: "PDF", size: "318 KB", url: "#" },
    { name: "Mathematics Syllabus", type: "PDF", size: "290 KB", url: "#" },
    { name: "Student Handbook", type: "PDF", size: "1.2 MB", url: "#" },
    { name: "Lab Safety Guidelines", type: "PDF", size: "420 KB", url: "#" }
  ];

  const filteredEvents = calendarEvents.filter(event => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.details.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDocuments = documents.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="academics" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Excellence</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            NSS HSS Adoor offers a comprehensive curriculum designed to nurture critical thinking, creativity, and practical skills. Our academic programs are tailored to prepare students for higher education and future careers.
          </p>
        </motion.div>

        {/* Courses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Streams</h3>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="science" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="science" className="text-lg">Science</TabsTrigger>
                <TabsTrigger value="commerce" className="text-lg">Commerce</TabsTrigger>
                <TabsTrigger value="humanities" className="text-lg">Humanities</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <TabsContent value="science" className="mt-0">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-bold mb-6 text-primary">Science Stream</h4>
                    <p className="text-gray-600 mb-6">
                      Our Science stream offers a rigorous curriculum focused on developing analytical thinking, problem-solving skills, and scientific temperament. Students gain a strong foundation in scientific principles and practical laboratory experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courses.science.map((course, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all duration-300">
                          <h5 className="text-lg font-semibold mb-2">{course.name}</h5>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="commerce" className="mt-0">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-bold mb-6 text-primary">Commerce Stream</h4>
                    <p className="text-gray-600 mb-6">
                      The Commerce stream prepares students for careers in business, finance, and entrepreneurship. Our comprehensive curriculum covers financial accounting, economics, business studies, and digital applications in commerce.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courses.commerce.map((course, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all duration-300">
                          <h5 className="text-lg font-semibold mb-2">{course.name}</h5>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="humanities" className="mt-0">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <h4 className="text-xl font-bold mb-6 text-primary">Humanities Stream</h4>
                    <p className="text-gray-600 mb-6">
                      Our Humanities program fosters critical thinking, effective communication, and a deep understanding of human society and culture. Students explore diverse perspectives on history, politics, literature, and social structures.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courses.humanities.map((course, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all duration-300">
                          <h5 className="text-lg font-semibold mb-2">{course.name}</h5>
                          <p className="text-gray-600 text-sm">{course.description}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Academic Calendar</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <Input
                  placeholder="Search events, holidays, exams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 bg-gray-100 p-4 font-semibold text-gray-700">
                  <div>Date</div>
                  <div>Event</div>
                  <div>Type</div>
                  <div>Details</div>
                </div>
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, index) => (
                    <motion.div 
                      key={index}
                      className="grid grid-cols-4 p-4 border-t"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <div className="text-gray-700">
                        {new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                      <div className="font-medium">{event.title}</div>
                      <div>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          event.type === 'holiday' ? 'bg-green-100 text-green-800' :
                          event.type === 'exam' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                      </div>
                      <div className="text-gray-600 text-sm">{event.details}</div>
                    </motion.div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">No events found matching your search.</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Documents Hub */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Document Hub</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredDocuments.map((doc, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-all duration-300"
                    whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="mb-4 text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h5 className="text-lg font-semibold mb-2">{doc.name}</h5>
                      <p className="text-gray-500 text-sm mb-4">{doc.type} • {doc.size}</p>
                      <div className="mt-auto">
                        <a
                          href={doc.url}
                          className="text-primary hover:text-primary-dark font-medium flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Download</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {filteredDocuments.length === 0 && (
                <div className="text-center text-gray-500 py-8">No documents found matching your search.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
