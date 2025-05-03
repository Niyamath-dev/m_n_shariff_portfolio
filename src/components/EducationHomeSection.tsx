
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ChevronRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

const EducationHomeSection = () => {
  const educations = [
    {
      id: 1,
      degree: "Master's in Web Development",
      institution: "Technology University",
      period: "2015 - 2017",
      description: "Specialized in advanced web technologies and development methodologies."
    },
    {
      id: 2,
      degree: "Bachelor's in Computer Science",
      institution: "Digital Arts College",
      period: "2011 - 2015",
      description: "Focused on programming fundamentals, UI/UX design principles, and digital marketing strategies."
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Education</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Academic journey that shaped my expertise in WordPress development, design, and digital marketing.
            </p>
          </div>
          <Link to="/education" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              View All
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <Card 
              key={edu.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </div>
                </div>
                <p className="mb-4">{edu.description}</p>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Book className="h-4 w-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationHomeSection;
