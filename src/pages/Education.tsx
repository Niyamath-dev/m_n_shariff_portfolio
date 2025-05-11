
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Book } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "../hooks/use-mobile";

const Education = () => {
  const isMobile = useIsMobile();
  
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "International Institute of Business Studies (IIBS)",
      period: "Jun 2018 - Sep 2022",
      description: "Specialized in computer applications and programming fundamentals"
    },
    {
      id: 2,
      degree: "Higher Secondary (12th Grade)",
      institution: "International Institute of Business Studies (IIBS)",
      period: "2018",
      description: "Focus on computer science and mathematics"
    },
    {
      id: 3,
      degree: "Secondary (10th Grade)",
      institution: "R.T. Nagar Education Trust High School",
      period: "2016",
      description: "Completed with distinction in science and mathematics"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-12 md:py-20">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
              Academic <span className="text-gradient">Background</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl">
              My educational journey that has shaped my expertise in WordPress development, design, and digital marketing.
            </p>

            <div className="space-y-4 md:space-y-8 mt-8 md:mt-12">
              {educations.map((edu) => (
                <Card key={edu.id} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-secondary/30 p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary mt-1 hidden sm:flex">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl md:text-2xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-base md:text-lg">{edu.institution}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center text-primary text-sm md:text-base font-medium">
                        <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-muted-foreground">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Education Certificate Section on Mobile */}
            {isMobile && (
              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold">Certificates</h2>
                <div className="grid grid-cols-1 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                          Certificate Image
                        </div>
                      </AspectRatio>
                      <h3 className="mt-3 font-medium">BCA Degree Certificate</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {/* Education Certificate Section on Desktop */}
            {!isMobile && (
              <div className="mt-16">
                <h2 className="text-3xl font-bold mb-8">Certificates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                          Certificate Image
                        </div>
                      </AspectRatio>
                      <h3 className="mt-4 text-lg font-medium">BCA Degree Certificate</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                          Higher Secondary Certificate
                        </div>
                      </AspectRatio>
                      <h3 className="mt-4 text-lg font-medium">12th Grade Certificate</h3>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                        <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                          Secondary School Certificate
                        </div>
                      </AspectRatio>
                      <h3 className="mt-4 text-lg font-medium">10th Grade Certificate</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
