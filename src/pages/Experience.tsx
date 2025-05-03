
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, CheckSquare } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "ChampSoft Technologies (Pvt) Ltd",
      period: "2024 - Present",
      description: "Led development of custom WordPress themes and plugins for enterprise clients.",
      responsibilities: [
        "Developed and maintained WordPress websites for multiple clients",
        "Created custom WordPress themes and plugins using PHP, HTML, CSS, and JavaScript",
        "Collaborated with design team to implement responsive web designs",
        "Optimized website performance and loading speeds",
        "Provided technical support and maintenance for existing websites"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "MySQL", "Git"]
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Insueta Technologies (Pvt) Ltd",
      period: "2018 - 2020",
      description: "Designed user-centered interfaces for websites and applications.",
      responsibilities: [
        "Designed and developed responsive web applications using modern frameworks",
        "Implemented user interface designs according to client requirements",
        "Collaborated with cross-functional teams to deliver high-quality web solutions",
        "Conducted regular testing and debugging to ensure optimal site performance",
        "Participated in client meetings to understand project requirements"
      ],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Bootstrap", "REST APIs"]
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
              My journey through various roles in web development and design.
            </p>

            <div className="space-y-12 mt-12">
              {experiences.map((exp) => (
                <Card key={exp.id} className="bg-card hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <CardHeader className="bg-secondary/30">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{exp.title}</CardTitle>
                          <CardDescription className="text-lg">{exp.company}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        <Calendar className="h-5 w-5 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">Overview</h3>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckSquare className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-3">Technologies Used</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="py-2 px-0">
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, index) => (
                                  <span 
                                    key={index} 
                                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
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
