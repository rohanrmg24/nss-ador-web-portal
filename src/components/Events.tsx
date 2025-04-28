
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(4); // May (0-based)
  const [currentYear, setCurrentYear] = useState(2024);
  
  // Sample calendar events
  const calendarEvents = {
    "2024-05-03": { type: "academic", title: "Science Exhibition" },
    "2024-05-07": { type: "sports", title: "Inter-House Cricket" },
    "2024-05-12": { type: "cultural", title: "Dance Competition" },
    "2024-05-15": { type: "academic", title: "Career Guidance" },
    "2024-05-18": { type: "holiday", title: "School Holiday" },
    "2024-05-24": { type: "academic", title: "Parent-Teacher Meeting" },
    "2024-05-28": { type: "cultural", title: "Arts Festival" }
  };
  
  // News/Blog posts
  const newsPosts = [
    {
      id: 1,
      title: "NSS HSS Adoor Wins Best School Award",
      excerpt: "Our school has been recognized as the Best Higher Secondary School in the district for academic excellence and infrastructure.",
      date: "April 28, 2024",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Achievement"
    },
    {
      id: 2,
      title: "Students Excel in State Science Olympiad",
      excerpt: "Three of our students secured top ranks in the State Science Olympiad held last month, bringing glory to the school.",
      date: "April 20, 2024",
      image: "https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Academic"
    },
    {
      id: 3,
      title: "Annual Sports Day Celebrations",
      excerpt: "The Annual Sports Day was celebrated with great enthusiasm and sportsmanship, with Yellow House emerging as the overall champions.",
      date: "April 15, 2024",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Sports"
    },
    {
      id: 4,
      title: "Career Guidance Workshop for Class 12 Students",
      excerpt: "A career guidance workshop was organized for Class 12 students to help them make informed decisions about higher education and career paths.",
      date: "April 10, 2024",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Workshop"
    }
  ];
  
  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay(); // 0 is Sunday
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: "", empty: true });
    }
    
    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
      const event = calendarEvents[dateString];
      
      days.push({
        day: i,
        empty: false,
        event: event || null,
        dateString
      });
    }
    
    return days;
  };
  
  const days = generateCalendarDays(currentYear, currentMonth);
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const prevMonth = () => {
    setCurrentMonth(prev => {
      if (prev === 0) {
        setCurrentYear(prev => prev - 1);
        return 11;
      }
      return prev - 1;
    });
  };
  
  const nextMonth = () => {
    setCurrentMonth(prev => {
      if (prev === 11) {
        setCurrentYear(prev => prev + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events & News</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at NSS HSS Adoor. Our vibrant campus is always bustling with academic, cultural, and sports activities throughout the year.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Events Calendar</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Calendar Header */}
              <div className="bg-primary p-4 flex justify-between items-center">
                <button 
                  onClick={prevMonth} 
                  className="text-white hover:bg-primary-dark p-2 rounded-full transition duration-200"
                  aria-label="Previous month"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h4 className="text-xl font-bold text-white">
                  {monthNames[currentMonth]} {currentYear}
                </h4>
                <button 
                  onClick={nextMonth} 
                  className="text-white hover:bg-primary-dark p-2 rounded-full transition duration-200"
                  aria-label="Next month"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Calendar Weekdays */}
              <div className="grid grid-cols-7 bg-gray-100">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                  <div key={index} className="p-2 text-center font-medium text-gray-700">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {days.map((dayObj, index) => (
                  <div 
                    key={index} 
                    className={`aspect-square p-1 border-t border-l ${
                      index % 7 === 6 ? 'border-r' : ''
                    } ${
                      index >= 35 ? 'border-b' : ''
                    } ${
                      dayObj.empty ? 'bg-gray-50' : 'relative group cursor-pointer hover:bg-gray-50'
                    }`}
                  >
                    {!dayObj.empty && (
                      <>
                        <div className="h-full w-full flex flex-col">
                          <span className="text-sm p-1">{dayObj.day}</span>
                          
                          {dayObj.event && (
                            <div 
                              className={`mt-1 mx-1 text-xs rounded-md p-1 text-white text-center overflow-hidden ${
                                dayObj.event.type === 'academic' ? 'bg-blue-500' :
                                dayObj.event.type === 'sports' ? 'bg-green-500' :
                                dayObj.event.type === 'cultural' ? 'bg-purple-500' :
                                'bg-gray-500'
                              }`}
                            >
                              {dayObj.event.title}
                            </div>
                          )}
                        </div>
                        
                        {/* Event Details on Hover */}
                        {dayObj.event && (
                          <div className="absolute inset-0 bg-white shadow-lg rounded-md p-3 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                            <div className="text-sm font-semibold">{dayObj.day} {monthNames[currentMonth]}</div>
                            <div 
                              className={`inline-block px-2 py-0.5 rounded-md text-xs text-white mt-1 ${
                                dayObj.event.type === 'academic' ? 'bg-blue-500' :
                                dayObj.event.type === 'sports' ? 'bg-green-500' :
                                dayObj.event.type === 'cultural' ? 'bg-purple-500' :
                                'bg-gray-500'
                              }`}
                            >
                              {dayObj.event.type}
                            </div>
                            <div className="font-medium mt-2">{dayObj.event.title}</div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Calendar Legend */}
              <div className="bg-gray-50 p-4 border-t flex flex-wrap gap-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 inline-block rounded-full bg-blue-500 mr-2"></span>
                  <span className="text-xs">Academic</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 inline-block rounded-full bg-green-500 mr-2"></span>
                  <span className="text-xs">Sports</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 inline-block rounded-full bg-purple-500 mr-2"></span>
                  <span className="text-xs">Cultural</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 inline-block rounded-full bg-gray-500 mr-2"></span>
                  <span className="text-xs">Holiday</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* News Feed Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Latest News</h3>
            <div className="space-y-6">
              {newsPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-48 md:h-auto">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">{post.title}</CardTitle>
                              <CardDescription className="text-sm text-gray-500">
                                <span className="inline-block bg-primary-light text-primary-dark text-xs px-2 py-0.5 rounded-full mr-2">
                                  {post.category}
                                </span>
                                {post.date}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                          <Button variant="link" className="text-primary hover:text-primary-dark p-0">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
              
              <div className="text-center mt-8">
                <Button className="bg-primary hover:bg-primary-dark text-white font-medium">
                  View All News
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
