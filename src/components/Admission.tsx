
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Admission = () => {
  const admissionSteps = [
    {
      title: "1. Check Eligibility",
      description: "Ensure you meet the minimum grade requirements: Science: 85% in SSLC with 90% in Science and Math. Commerce: 75% in SSLC with 80% in Math. Humanities: 70% in SSLC."
    },
    {
      title: "2. Complete Application",
      description: "Fill out the application form completely. Incomplete applications will not be processed."
    },
    {
      title: "3. Submit Documents",
      description: "Submit SSLC certificate, character certificate, transfer certificate, and passport-sized photographs."
    },
    {
      title: "4. Entrance Test",
      description: "Qualifying students will be invited for stream-specific entrance exams."
    },
    {
      title: "5. Interview",
      description: "Shortlisted candidates will undergo interviews with department heads and school management."
    },
    {
      title: "6. Admission Offer",
      description: "Selected students will receive admission offers with fee details."
    }
  ];
  
  const faqs = [
    {
      question: "What is the selection process?",
      answer: "Our selection process involves reviewing academic records, an entrance test, and a personal interview. We evaluate overall academic performance, aptitude, and interest in the chosen stream."
    },
    {
      question: "Can I change my stream after admission?",
      answer: "Stream changes are considered only within the first month of the academic year, subject to seat availability and meeting the eligibility criteria for the desired stream."
    },
    {
      question: "Are there any scholarships available?",
      answer: "Yes, we offer merit scholarships for top performers in entrance exams, need-based financial aid, and special scholarships for students with exceptional talents in sports or cultural activities."
    },
    {
      question: "What is the class size?",
      answer: "Our average class size is 30 students, ensuring personalized attention and interaction between teachers and students."
    },
    {
      question: "What are the school timings?",
      answer: "School hours are from 8:30 AM to 3:30 PM, Monday through Friday. Special classes and activities may be scheduled on Saturdays."
    }
  ];
  
  return (
    <section id="admission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Admission Process</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join NSS HSS Adoor to embark on a journey of academic excellence and holistic development. Our admission process is designed to identify students who demonstrate academic potential, curiosity, and a passion for learning.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Admission Steps */}
          <div>
            <h3 className="text-2xl font-bold mb-8">How to Apply</h3>
            
            <div className="space-y-6">
              {admissionSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Download Application Form Button */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#" 
                className="btn-primary flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Application Form (PDF)
              </a>
            </motion.div>
          </div>
          
          {/* Right Column: Eligibility & FAQs */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Eligibility & FAQs</h3>
            
            {/* Eligibility */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-lg font-bold text-primary mb-4">Eligibility Criteria</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Science Stream:</strong> Minimum 85% in SSLC with 90% in Science and Mathematics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Commerce Stream:</strong> Minimum 75% in SSLC with 80% in Mathematics
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Humanities Stream:</strong> Minimum 70% in SSLC
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Age Requirement:</strong> Between 15-17 years as of June 1st of the academic year
                  </span>
                </li>
              </ul>
            </motion.div>
            
            {/* Key Dates */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold text-primary mb-4">Key Dates</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Application Opens:</strong> January 15, 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Application Deadline:</strong> March 31, 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Entrance Examination:</strong> April 15, 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Interview:</strong> April 20-25, 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Results Announcement:</strong> May 10, 2025
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">
                    <strong>Academic Year Begins:</strong> June 1, 2025
                  </span>
                </li>
              </ul>
            </motion.div>
            
            {/* FAQs */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-4">Frequently Asked Questions</h4>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200 mb-3 rounded-lg overflow-hidden">
                    <AccordionTrigger className="bg-white px-6 py-4 hover:bg-gray-50">
                      <span className="text-gray-800">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
