import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, PlayCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Kubernetes Cluster Automation",
      description: "Fully automated Kubernetes cluster deployment on AWS using Terraform and Ansible. Includes monitoring, logging, and security best practices.",
      image: "🎯",
      technologies: ["Kubernetes", "Terraform", "AWS", "Ansible", "Helm", "Prometheus"],
      features: [
        "Multi-AZ cluster deployment",
        "Automated scaling policies",
        "Integrated monitoring stack",
        "Security hardening"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Production Ready"
    },
    {
      title: "CI/CD Pipeline Framework",
      description: "Comprehensive CI/CD pipeline template for microservices with automated testing, security scanning, and deployment strategies.",
      image: "🚀",
      technologies: ["Jenkins", "Docker", "SonarQube", "GitLab CI", "ArgoCD"],
      features: [
        "Multi-stage pipelines",
        "Automated security scanning",
        "Blue-green deployments",
        "Rollback mechanisms"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Active Development"
    },
    {
      title: "Infrastructure Monitoring Suite",
      description: "Complete infrastructure monitoring and alerting solution using Prometheus, Grafana, and custom dashboards.",
      image: "📊",
      technologies: ["Prometheus", "Grafana", "AlertManager", "Docker", "Python"],
      features: [
        "Real-time metrics collection",
        "Custom alerting rules",
        "Interactive dashboards",
        "Automated incident response"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Production Ready"
    },
    {
      title: "Cloud Cost Optimization Tool",
      description: "Automated tool for analyzing and optimizing cloud infrastructure costs across multiple providers.",
      image: "💰",
      technologies: ["Python", "AWS API", "Terraform", "Lambda", "CloudWatch"],
      features: [
        "Cost analysis automation",
        "Resource optimization suggestions",
        "Automated rightsizing",
        "Budget alerting system"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Beta"
    },
    {
      title: "GitOps Configuration Management",
      description: "GitOps-based configuration management system for Kubernetes applications using ArgoCD and Helm.",
      image: "⚙️",
      technologies: ["ArgoCD", "Helm", "GitLab", "Kubernetes", "Kustomize"],
      features: [
        "Declarative configuration",
        "Automated synchronization",
        "Multi-environment management",
        "Configuration drift detection"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Production Ready"
    },
    {
      title: "Security Compliance Automation",
      description: "Automated security compliance checking and remediation for cloud infrastructure and applications.",
      image: "🔒",
      technologies: ["Python", "Open Policy Agent", "Falco", "Trivy", "AWS Config"],
      features: [
        "Policy as code implementation",
        "Automated compliance scanning",
        "Vulnerability assessments",
        "Remediation workflows"
      ],
      github: "https://github.com",
      demo: "https://demo.example.com",
      status: "Active Development"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return 'border-secondary text-secondary';
      case 'Active Development':
        return 'border-primary text-primary';
      case 'Beta':
        return 'border-accent text-accent';
      default:
        return 'border-muted-foreground text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative DevOps solutions and infrastructure automation projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-cyber p-6 hover-glow animate-slide-up h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{project.image}</span>
                <Badge 
                  variant="outline" 
                  className={`px-2 py-1 text-xs ${getStatusColor(project.status)}`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Project Title & Description */}
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline"
                  size="sm"
                  className="btn-cyber flex-1"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button 
                  variant="outline"
                  size="sm"
                  className="btn-cyber flex-1"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub Stats Terminal */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="card-cyber p-6">
            <div className="terminal-text mb-4">
              $ git log --oneline --graph --all
            </div>
            <div className="font-mono text-sm text-muted-foreground space-y-2">
              <div>* 2f8a9c4 <span className="text-secondary">(HEAD -&gt; main)</span> feat: Added security compliance automation</div>
              <div>* 1a7b3e9 <span className="text-primary">feat:</span> Implemented GitOps configuration management</div>
              <div>* 9d2c8f1 <span className="text-accent">fix:</span> Optimized monitoring suite performance</div>
              <div>* 4e6a1b8 <span className="text-primary">feat:</span> Added CI/CD pipeline framework</div>
              <div>* 7c9f2a3 <span className="text-secondary">init:</span> Initial Kubernetes automation setup</div>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full"></div>
                <span className="text-muted-foreground">50+ Commits This Month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">15+ Active Repositories</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;