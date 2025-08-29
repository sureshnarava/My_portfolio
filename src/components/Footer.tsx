import { Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:devops.engineer@example.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-cyber">
                DevOps Portfolio
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building robust, scalable, and secure infrastructure solutions. 
              Passionate about automation, cloud technologies, and continuous improvement.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              <div className="text-muted-foreground">
                <div className="text-sm">Email</div>
                <div className="text-primary">devops.engineer@example.com</div>
              </div>
              <div className="text-muted-foreground">
                <div className="text-sm">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-secondary">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="terminal-text">
              © {currentYear} DevOps Portfolio. All rights reserved.
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:shadow-cyber transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Terminal Status */}
          <div className="text-sm text-muted-foreground font-mono">
            <span className="text-terminal">~/portfolio $</span>
            <span className="terminal-cursor">|</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;