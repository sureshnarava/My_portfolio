import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thanks for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "devops.engineer@example.com",
      link: "mailto:devops.engineer@example.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "@devops-engineer",
      link: "https://github.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "DevOps Engineer",
      link: "https://linkedin.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Available Remotely",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-glow">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next DevOps project or discuss opportunities? 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="card-cyber p-8 h-full">
              <div className="terminal-text mb-6">
                $ curl -X GET /api/contact/info
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-cyber">
                Get In Touch
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or simply connecting with fellow tech enthusiasts. Whether you need help 
                with infrastructure automation, CI/CD optimization, or cloud migration, 
                I'm here to help.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-medium text-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-secondary">Response Time</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours during business days. 
                  For urgent matters, feel free to connect on LinkedIn.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="card-cyber p-8">
              <div className="terminal-text mb-6">
                $ nano contact-form.json
              </div>

              <h3 className="text-2xl font-bold mb-6 text-cyber">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-primary/30 focus:border-primary/60 text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-2 bg-background/50 border-primary/30 focus:border-primary/60 text-foreground"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground font-medium">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-background/50 border-primary/30 focus:border-primary/60 text-foreground"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-2 bg-background/50 border-primary/30 focus:border-primary/60 text-foreground resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-cyber w-full py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Additional Note */}
              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-accent">Pro Tip:</strong> Include details about your 
                  project timeline, tech stack, and specific requirements to get a more 
                  tailored response.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;