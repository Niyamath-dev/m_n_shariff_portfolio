
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ChevronRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceHomeSection = () => {
  const experiences = [
    {
      id: 1,
      title: "WordPress Developer",
      company: "Digital Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of custom WordPress themes and plugins for enterprise clients."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Designed user-centered interfaces for websites and applications."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Professional journey through WordPress development, UI/UX design, and digital marketing.
            </p>
          </div>
          <Link to="/experience" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              View All
              <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in" 
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-xl">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <p className="mb-4">{exp.description}</p>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceHomeSection;
