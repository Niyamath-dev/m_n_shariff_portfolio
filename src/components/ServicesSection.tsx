
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, PenTool, LayoutDashboard } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "WordPress Development",
      description: "Custom WordPress websites with responsive design, optimized performance, and seamless functionality.",
      features: [
        "Custom Theme Development",
        "Plugin Integration & Customization",
        "E-commerce Solutions with WooCommerce",
        "Performance Optimization",
        "Database Management (MySQL)"
      ]
    },
    {
      icon: <PenTool className="h-12 w-12 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive, engaging digital experiences for your audience.",
      features: [
        "Wireframing & Prototyping",
        "Visual Design using Figma/Adobe XD",
        "Responsive Design Systems",
        "User-centered Design Principles",
        "Accessibility Standards"
      ]
    },
    {
      icon: <LayoutDashboard className="h-12 w-12 text-primary" />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions that increase visibility, drive quality traffic, and boost conversions.",
      features: [
        "SEO Optimization with SEMrush",
        "Google Analytics & Search Console",
        "Workflow Automation with Make.com",
        "API Integrations",
        "Performance Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary text-lg font-medium">My Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What I Can Do For You</h3>
          <p className="text-muted-foreground">
            I offer comprehensive digital solutions to help your business stand out online
            and connect with your target audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all bg-white h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
