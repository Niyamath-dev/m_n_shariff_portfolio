
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Master's in Web Development",
      institution: "Technology University",
      period: "2015 - 2017",
      description: "Specialized in advanced web technologies and development methodologies. Completed thesis on optimizing WordPress performance for enterprise applications."
    },
    {
      id: 2,
      degree: "Bachelor's in Computer Science",
      institution: "Digital Arts College",
      period: "2011 - 2015",
      description: "Focused on programming fundamentals, UI/UX design principles, and digital marketing strategies. Graduated with honors."
    },
    {
      id: 3,
      degree: "Certificate in Digital Marketing",
      institution: "Online Marketing Institute",
      period: "2016",
      description: "Comprehensive training in SEO, content marketing, social media strategies, and analytics. Completed with distinction."
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
