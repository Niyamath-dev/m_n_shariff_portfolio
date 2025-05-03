
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "ChampSoft Technologies (Pvt) Ltd",
      period: "Jun 2024 - Present",
      description: "Designed and implemented custom WordPress themes/plugins using HTML5, CSS3, JavaScript, jQuery, PHP, and page builders like Elementor, Divi, and WPBakery. Optimized website performance using SEMrush for digital marketing strategies and WP Engine for hosting deployment. Implemented SEO strategies to drive organic traffic, improve Google search rankings, and boost conversion rates. Managed databases with MySQL, ensuring high performance and reliability for complex websites. Integrated e-commerce solutions such as WooCommerce, streamlining product listings, payment gateways, and shipping functionalities."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Insueta Technologies (Pvt) Ltd",
      period: "Apr 2023 - Jun 2024",
      description: "Utilized HTML, CSS, Bootstrap, JavaScript, and jQuery to develop intuitive user interfaces. Created custom WordPress themes and plugins from scratch using HTML5, CSS3, JavaScript, PHP, and MySQL. Managed backend services for high-traffic e-commerce platforms using Node.js, Express.js, and PostgreSQL. Implemented WooCommerce to establish online stores, managing product listings, payment gateways, and shipping options. Configured web servers such as Apache and Nginx for optimal performance of WordPress websites."
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Reliable Software Technology",
      period: "Dec 2021 - Apr 2023",
      description: "Designed and implemented websites from initial concept, site architecture, and wireframes to finished deliverables. Converted design assets into component-based HTML, CSS, Bootstrap, PHP, JavaScript, and React.js. Designed websites using Odoo ERP and worked as UI/UX Designer using Adobe XD and Figma. Participated in team-building activities to enhance working relationships."
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
              My journey through WordPress development, UI/UX design, and digital marketing with 3+ years of expertise building high-performance websites and digital solutions.
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
