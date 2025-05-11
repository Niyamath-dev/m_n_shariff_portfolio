
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "WordPress Development",
    "Custom Theme Creation",
    "Plugin Development",
    "WooCommerce Integration",
    "UI/UX Design",
    "Wireframing & Prototyping",
    "User Research",
    "Responsive Design",
    "SEO Optimization",
    "Social Media Marketing",
    "Email Campaigns",
    "Analytics & Reporting"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-tr from-primary/80 to-accent/80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-primary font-heading font-bold">
                  <div className="text-xs uppercase tracking-wider text-foreground/70">Experience</div>
                  <div className="text-4xl">3+</div>
                  <div className="text-sm">Years</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-primary text-lg font-medium">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Dedicated Web Developer with expertise in UI/UX design and digital marketing</h3>
            </div>
            
            <p className="text-muted-foreground">
              With over 3 years of experience, I specialize in creating exceptional digital experiences
              through expert WordPress development, intuitive UI/UX design, and strategic digital marketing.
              My mission is to help businesses establish a powerful online presence that converts visitors
              into loyal customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-primary h-5 w-5" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
