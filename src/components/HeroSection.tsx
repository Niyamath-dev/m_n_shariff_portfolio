
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hello, I'm Mohammed Niyamathulla Shariff</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Creative <span className="text-gradient">Digital Expert</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md">
              Specialist in WordPress Development, UI/UX Design, and Digital Marketing strategies that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="font-medium">
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="font-medium">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl relative z-10 max-w-md mx-auto lg:mr-0">
              <div className="aspect-square bg-secondary rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                  alt="Creative Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="res-cls absolute -bottom-5 -right-3 bg-primary rounded-full w-24 h-24 flex items-center justify-center text-white font-bold text-xl">
                3+ YRS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
