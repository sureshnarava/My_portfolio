import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 85, color: "text-primary" },
        { name: "Azure", level: 75, color: "text-secondary" },
        { name: "Google Cloud", level: 70, color: "text-accent" }
      ]
    },
    {
      title: "Infrastructure as Code",
      icon: "🏗️",
      skills: [
        { name: "Terraform", level: 90, color: "text-primary" },
        { name: "Ansible", level: 80, color: "text-secondary" },
        { name: "CloudFormation", level: 75, color: "text-accent" }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: "🔄",
      skills: [
        { name: "Jenkins", level: 85, color: "text-primary" },
        { name: "GitLab CI", level: 80, color: "text-secondary" },
        { name: "GitHub Actions", level: 85, color: "text-accent" }
      ]
    },
    {
      title: "Containerization",
      icon: "🐳",
      skills: [
        { name: "Docker", level: 90, color: "text-primary" },
        { name: "Kubernetes", level: 80, color: "text-secondary" },
        { name: "Helm", level: 70, color: "text-accent" }
      ]
    },
    {
      title: "Monitoring & Logging",
      icon: "📊",
      skills: [
        { name: "Prometheus", level: 80, color: "text-primary" },
        { name: "Grafana", level: 85, color: "text-secondary" },
        { name: "ELK Stack", level: 75, color: "text-accent" }
      ]
    },
    {
      title: "Scripting & Programming",
      icon: "💻",
      skills: [
        { name: "Python", level: 80, color: "text-primary" },
        { name: "Bash", level: 85, color: "text-secondary" },
        { name: "Go", level: 65, color: "text-accent" }
      ]
    }
  ];

  const tools = [
    "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitLab CI", 
    "GitHub Actions", "AWS", "Azure", "GCP", "Prometheus", "Grafana", 
    "ELK Stack", "Python", "Bash", "Go", "Linux", "Git", "Helm", "Vault"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps practices and cloud-native development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="card-cyber p-6 hover-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${skill.color}`}>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-cyber">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <Badge 
                key={tool}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        {/* Terminal Command Display */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="card-cyber p-6">
            <div className="terminal-text mb-2">
              $ kubectl get skills --namespace=devops
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-1">
              <div>NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS&nbsp;&nbsp;&nbsp;&nbsp;EXPERIENCE&nbsp;&nbsp;&nbsp;PROFICIENCY</div>
              <div>cloud-platforms&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2+ years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advanced</div>
              <div>infrastructure-code&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2+ years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expert</div>
              <div>containerization&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2+ years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advanced</div>
              <div>ci-cd-automation&nbsp;&nbsp;&nbsp;&nbsp;Ready&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2+ years&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;