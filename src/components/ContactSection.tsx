
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, MessageSquare, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: "Email",
      value: "contact@example.com",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      label: "Call",
      value: "+1 (555) 123-4567",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  ];

  return (
    <section id="contact" className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary text-lg font-medium">Contact Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Get In Touch</h3>
          <p className="text-muted-foreground">
            Have a project in mind or want to discuss how I can help your business?
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-none">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-medium">Your Name</label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-medium">Email Address</label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="font-medium">Subject</label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-medium">Message</label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-white resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-lg border-none h-full bg-gradient-to-br from-primary to-accent text-white">
              <CardContent className="p-6 flex flex-col h-full">
                <h4 className="text-2xl font-semibold mb-6">Contact Information</h4>
                
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-2 bg-white/20 rounded-full">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-white/70">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <h5 className="font-medium text-lg mb-4">Connect with me</h5>
                  <div className="flex gap-3">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.href}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/30 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
