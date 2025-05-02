
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "WordPress Developer",
      company: "Digital Solutions Inc.",
      period: "2020 - Present",
      description: "Led development of custom WordPress themes and plugins for enterprise clients. Improved site performance by 40% through optimization techniques. Implemented WooCommerce solutions for e-commerce projects."
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Designed user-centered interfaces for websites and applications. Created wireframes, prototypes, and mockups using Figma. Conducted user research and usability testing to optimize user experiences."
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      company: "Marketing Solutions",
      period: "2016 - 2018",
      description: "Managed SEO campaigns resulting in 60% increase in organic traffic. Implemented social media strategies across multiple platforms. Created and optimized content for various digital marketing channels."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-secondary/50 to-background py-16 md:py-24">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Professional <span className="text-gradient">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
              My journey through various roles in WordPress development, UI/UX design, and digital marketing.
            </p>

            <div className="space-y-8 mt-12">
              {experiences.map((exp) => (
                <Card key={exp.id} className="bg-card hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <div className="flex items-center text-primary">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{exp.description}</p>
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

export default Experience;
