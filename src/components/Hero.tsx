import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a simple PDF content for demonstration
    const link = document.createElement('a');
    link.href = '#'; // You would replace this with actual CV URL
    link.download = 'DevOps_Engineer_CV.pdf';
    // For demo purposes, we'll show an alert
    alert('CV download functionality - Replace with actual CV file link');
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden cyber-grid"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-floating opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Terminal-style greeting */}
          <div className="mb-6">
            <span className="terminal-text text-sm">
              $ whoami<span className="terminal-cursor">|</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-cyber text-glow">DevOps Engineer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Orchestrating seamless deployments, automating infrastructure, and building
            <span className="text-primary font-semibold"> scalable cloud solutions </span>
            that power the future of technology.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg"
              className="btn-cyber text-lg px-8 py-3"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="btn-cyber text-lg px-8 py-3"
              onClick={handleDownloadCV}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-cyber transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-cyber transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all duration-300"
            >
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;