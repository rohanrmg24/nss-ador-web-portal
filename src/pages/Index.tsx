
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Admission from "../components/Admission";
import Events from "../components/Events";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  // Add observer for section transitions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-transition");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>NSS HSS Adoor - Empowering Futures, Inspiring Excellence</title>
        <meta name="description" content="NSS Higher Secondary School in Adoor offers quality education with a focus on academic excellence and holistic development." />
        <meta name="keywords" content="NSS HSS Adoor, School in Adoor, Higher Secondary School, Best School in Kerala" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <div className="section-transition">
          <About />
        </div>
        <div className="section-transition">
          <Academics />
        </div>
        <div className="section-transition">
          <Admission />
        </div>
        <div className="section-transition">
          <Events />
        </div>
        <div className="section-transition">
          <Gallery />
        </div>
        <div className="section-transition">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
