
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceHomeSection from "../components/ExperienceHomeSection";
import EducationHomeSection from "../components/EducationHomeSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceHomeSection />
      <EducationHomeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
