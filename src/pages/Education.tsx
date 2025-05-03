
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
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
              My educational journey that has shaped my expertise in WordPress development, design, and digital marketing.
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
                  {/* <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent> */}
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
