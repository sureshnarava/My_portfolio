import { Card } from '@/components/ui/card';
import { Server, Cloud, GitBranch, Shield, Zap, Monitor } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';

const About = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Infrastructure Automation",
      description: "Expert in Terraform, Ansible, and Infrastructure as Code"
    },
    {
      icon: <Cloud className="h-8 w-8 text-secondary" />,
      title: "Cloud Architecture",
      description: "AWS, Azure, and GCP certified with hands-on experience"
    },
    {
      icon: <GitBranch className="h-8 w-8 text-accent" />,
      title: "CI/CD Pipelines",
      description: "Building robust deployment pipelines with Jenkins, GitLab CI"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Security First",
      description: "Implementing DevSecOps practices and security automation"
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Performance Optimization",
      description: "Monitoring, logging, and optimizing system performance"
    },
    {
      icon: <Monitor className="h-8 w-8 text-accent" />,
      title: "Containerization",
      description: "Docker, Kubernetes, and microservices orchestration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging development and operations through innovative automation and scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <div className="relative">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-cyber">
                <img 
                  src={profileAvatar} 
                  alt="DevOps Engineer Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="terminal-text mb-4">
              $ cat about.txt
            </div>
            <h3 className="text-2xl font-bold mb-6 text-cyber">
              Crafting Digital Infrastructure
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a Junior DevOps Engineer, I'm passionate about creating robust, scalable, and secure 
              infrastructure solutions. I bridge the gap between development and operations, ensuring 
              smooth deployments and reliable systems.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey in technology is driven by a love for automation, continuous learning, and 
              the pursuit of operational excellence. I believe in the power of collaborative culture 
              and efficient toolchains to deliver exceptional results.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Problem Solver', 'Team Player', 'Continuous Learner', 'Innovation Driver'].map((trait) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="card-cyber p-6 hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{highlight.icon}</div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">
                {highlight.title}
              </h4>
              <p className="text-muted-foreground">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;