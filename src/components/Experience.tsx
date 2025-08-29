import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Junior DevOps Engineer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      location: "Remote",
      description: "Implementing CI/CD pipelines, managing cloud infrastructure, and automating deployment processes using modern DevOps tools and practices.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Python"],
      achievements: [
        "Reduced deployment time by 60% through automated CI/CD pipelines",
        "Managed infrastructure for 10+ microservices using Kubernetes",
        "Implemented monitoring solutions reducing system downtime by 40%"
      ]
    },
    {
      title: "DevOps Intern",
      company: "CloudTech Startup",
      period: "2022 - 2023",
      location: "Hybrid",
      description: "Assisted in cloud migration projects and learned fundamental DevOps practices while working with senior engineers on infrastructure automation.",
      technologies: ["Azure", "Git", "Docker", "Ansible", "Bash", "Linux"],
      achievements: [
        "Successfully migrated 5 applications to Azure cloud platform",
        "Automated server provisioning using Ansible playbooks",
        "Created comprehensive documentation for deployment processes"
      ]
    },
    {
      title: "IT Support Specialist",
      company: "Local IT Services",
      period: "2021 - 2022",
      location: "On-site",
      description: "Provided technical support and system administration services, gaining foundational knowledge in networking and system operations.",
      technologies: ["Linux", "Windows Server", "Networking", "PowerShell", "MySQL"],
      achievements: [
        "Maintained 99.5% system uptime across 50+ workstations",
        "Implemented backup solutions reducing data loss incidents by 80%",
        "Provided technical training to 20+ team members"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in DevOps and cloud technologies, building expertise through hands-on experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-cyber"></div>
              
              <Card className="card-cyber ml-16 mb-8 p-6 hover-glow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyber mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                      <span className="text-lg font-semibold text-secondary">
                        {exp.company}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary self-start md:self-center">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">▶</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/60 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Terminal Command Display */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card-cyber p-6">
            <div className="terminal-text mb-2">
              $ git log --oneline --graph --decorate
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <div>* <span className="text-primary">a7f3d2c</span> feat: Advanced DevOps practices implementation</div>
              <div>* <span className="text-secondary">b2e5f8a</span> feat: Cloud infrastructure automation</div>
              <div>* <span className="text-accent">c9d1a4e</span> feat: CI/CD pipeline optimization</div>
              <div>* <span className="text-primary">d5b7c3f</span> init: Started DevOps journey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;