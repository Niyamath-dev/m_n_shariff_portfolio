
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "wordpress",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      tags: ["WordPress", "WooCommerce", "Custom Theme"]
    },
    {
      id: 2,
      title: "Portfolio Redesign",
      category: "design",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      tags: ["UI/UX Design", "Figma", "Responsive"]
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
      tags: ["Social Media", "SEO", "Analytics"]
    },
    {
      id: 4,
      title: "Business Website",
      category: "wordpress",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      tags: ["WordPress", "Elementor", "Custom CSS"]
    },
    {
      id: 5,
      title: "Mobile App Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
      tags: ["App Design", "Prototyping", "User Testing"]
    },
    {
      id: 6,
      title: "Email Marketing",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      tags: ["Email Templates", "Campaign Strategy", "Analytics"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "wordpress", name: "WordPress" },
    { id: "design", name: "UI/UX Design" },
    { id: "marketing", name: "Marketing" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary text-lg font-medium">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Featured Projects</h3>
          <p className="text-muted-foreground">
            Explore a selection of my recent projects showcasing WordPress development,
            UI/UX design, and digital marketing expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden aspect-[16/9]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
