
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "International Institute of Business Studies",
      period: "Jun 2018 - Sep 2022",
      description: "Specialization in Computer Science with focus on programming fundamentals, UI/UX design principles, and web development technologies. Graduated with comprehensive knowledge in HTML, CSS, JavaScript, and other core web technologies."
    },
    {
      id: 2,
      degree: "Cloud Computing & DevOps Certification",
      institution: "Intellipaat (Accredited by IBM & Microsoft)",
      period: "Feb 2023 - Sep 2023",
      description: "Professional certification in Cloud Computing and DevOps technologies with extensive focus on AWS hosting management experience, security practices, and infrastructure optimization."
    },
    {
      id: 3,
      degree: "Various Technical Certifications",
      institution: "Online Learning Platforms",
      period: "2020 - Present",
      description: "Continuous professional development through various online courses and certifications in WordPress development, WooCommerce integration, plugin development, UI/UX design principles, SEO optimization techniques, and digital marketing strategies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Academic <span className="text-gradient">Background</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              My educational journey that has shaped my expertise in WordPress development, UI/UX design, and digital marketing.
            </p>

            <div className="space-y-8 mt-12">
              {educations.map((edu) => (
                <Card key={edu.id} className="bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg">{edu.institution}</CardDescription>
                      </div>
                      <div className="flex items-center text-primary">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
