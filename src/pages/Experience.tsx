
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
      period: "Jun 2024 - Present",
      description: "Led development of custom WordPress themes and plugins for enterprise clients.",
      responsibilities: [
        "Designed and implemented custom WordPress themes/plugins using HTML5, CSS3, JavaScript, jQuery, PHP, and page builders like Elementor, Divi, and WPBakery, delivering high-performance, visually appealing websites.",
        "Optimized website performance using SEMrush for digital marketing strategies and WP Engine for hosting deployment, ensuring top-notch website speed, Core Web Vitals optimization, and SEO rankings.",
        "Implemented SEO strategies to drive organic traffic, improve Google search rankings, and boost conversion rates, leveraging tools like Google Analytics, Google Search Console, and SEMrush for keyword optimization and competitor analysis.",
        "Managing and optimized databases with MySQL, ensuring high performance, reliability, and efficient data management for complex websites.",
        "Managing hosting environments, including server setup, configuration, and migration tasks, using WP Engine and cPanel, ensuring zero downtime and secure data transfers.",
        "Integrated e-commerce solutions such as WooCommerce, streamlining product listings, payment gateways, and shipping functionalities to enhance online store performance.",
        "Designed intuitive UI/UX interfaces using Figma and Adobe XD, increasing user engagement and satisfaction by applying user-centered design principles and accessibility standards.",
        "Utilized Git and SVN for effective version control, enabling seamless collaboration across distributed teams.",
        "Integrated APIs and third-party tools to enhance website functionality, including analytics, payment processing, and marketing automation systems, with experience in RESTful API.",
        "Automated workflows using Make.com, streamlining tasks such as content publishing, client communications, and data synchronization between systems.",
        "Coordinated with stakeholders and clients, translating business requirements into technical solutions and providing regular progress updates.",
        "Mentored and coached team members, fostering professional growth and promoting adherence to best practices in development and project management.",
        "Participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives, ensuring effective team collaboration and project delivery.",
        "Stayed up-to-date with the latest trends in web development, SEO, cloud computing, and digital marketing to offer innovative and competitive solutions."
      ],
      technologies: [
        "WordPress",
        "PHP",
        "JavaScript",
        "HTML5",
        "CSS3",
        "jQuery",
        "MySQL",
        "Git",
        "SVN",
        "WooCommerce",
        "Elementor",
        "Divi",
        "WPBakery",
        "Figma",
        "Adobe XD",
        "WP Engine",
        "cPanel",
        "SEMrush",
        "Google Analytics",
        "Google Search Console",
        "RESTful APIs",
        "Make.com",
        "Agile"
      ]

    },
    {
      id: 2,
      title: "Web Developer & UI/UX Designer",
      company: "Insueta Technologies (Pvt) Ltd",
      period: "Apr 2023 - Jun 2024",
      description: "Designed user-centered interfaces for websites and applications.",
      responsibilities: [
        "Utilized HTML, CSS, Bootstrap, JavaScript, and JQuery to develop intuitive user interfaces for web applications.",
        "Created custom WordPress themes and plugins from scratch using HTML5, CSS3, JavaScript, PHP, and MySQL.",
        "Managed backend services for a high-traffic e-commerce platform, ensuring optimal performance and reliability ( Node.js, Express.js, and PostgreSQL ).",
        "Collaborated with clients and project managers to gather requirements and offer technical expertise throughout project lifecycles.",
        "Applied solid understanding of responsive web design principles and techniques.",
        "Basic understanding of mobile web/native app development",
        "Customized existing WordPress themes according to client specifications while adhering to coding standards and best practices.",
        "Implemented and configured WooCommerce to establish online stores, managing product listings, payment gateways, and shipping options.",
        "Integrated third-party APIs into existing websites to enhance functionality, such as payment processing or analytics tracking.",
        "Configured web servers such as Apache or Nginx for optimal performance of WordPress websites.",
        "Successfully migrated websites between hosting providers or domains without downtime or data loss.",
        "Managed hosting environments, including server setup, configuration, maintenance, and optimization tasks using AWS.",
        "Maintained source control systems such as Git or SVN for versioning of codebases.",
        "Optimized database queries to enhance webpage loading speed while reducing server resource utilization."
      ],
      technologies: [
        "HTML/HTML5",
        "CSS/CSS3",
        "Bootstrap",
        "JavaScript",
        "jQuery",
        "PHP",
        "MySQL",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "WordPress",
        "WooCommerce",
        "Apache",
        "Nginx",
        "AWS",
        "Git",
        "SVN",
        "REST APIs"
      ]
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Reliable Software Technology",
      period: "Dec 2021 - Apr 2023",
      description: "Designed user-centered interfaces for websites and applications.",
      responsibilities: [
        "Designed and implemented website from initial concept, site architecture and wireframes to finished deliverable.",
        "Converted design assets into component-based HTML, CSS, Bootstrap, Php, JavaScript, and Reactjs. ",
        "Proved successful working within tight deadlines and a fast-paced atmosphere.",
        "Employed a sharp and discerning intellect to dissect complex challenges Participated in team-building activities to enhance working relationships.",
        "Designed websites using ( Odoo ERP ). Worked as UI/UX Designer ( Adobe XD, Figma ). Worked in Asp.Net."
      ],
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "PHP",
        "JavaScript",
        "React.js",
        "Odoo ERP",
        "Adobe XD",
        "Figma",
        "ASP.NET"
      ]

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
                      <h3 className="text-lg font-medium mb-3">Technologies</h3>
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
