
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Book } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "International Institute of Business Studies (IIBS)",
      period: "Jun 2018 - Sep 2022",
    },
    {
      id: 2,
      degree: "Higher Secondary (12th Grade)",
      institution: "International Institute of Business Studies (IIBS)",
      period: "2018",
    },
    {
      id: 3,
      degree: "Secondary (10th Grade)",
      institution: "R.T. Nagar Education Trust High School",
      period: "2016",
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "WordPress Development Mastery",
      issuer: "Udemy",
      date: "2023",
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      date: "2022",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-20">
          <div className="container-custom">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Academic <span className="text-gradient">Background</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl">
              My educational journey that has shaped my expertise in WordPress development, design, and digital marketing.
            </p>

            <div className="space-y-6 sm:space-y-8 mb-12">
              {educations.map((edu) => (
                <Card key={edu.id} className="bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader className="sm:py-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-base sm:text-lg mt-1">{edu.institution}</CardDescription>
                      </div>
                      <div className="flex items-center text-primary whitespace-nowrap">
                        <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Certifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="bg-card hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary">
                          <Book className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{cert.title}</h3>
                          <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
