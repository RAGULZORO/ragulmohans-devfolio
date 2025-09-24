import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Calendar, Coffee, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const quickActions = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Drop me a line anytime',
      action: 'ragulmohanrajm@example.com',
      href: 'mailto:ragulmohanrajm@example.com',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat on WhatsApp',
      action: 'Start Conversation',
      href: 'https://wa.me/919361944903',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: '15-30 min free consultation',
      action: 'Book a Slot',
      href: 'https://calendly.com/ragulmohanraj',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
    },
    {
      icon: Coffee,
      title: 'Coffee Chat',
      description: 'Let\'s meet for coffee in Tamil Nadu',
      action: 'Suggest a Place',
      href: 'mailto:ragulmohanrajm@example.com?subject=Coffee%20Chat',
      color: 'from-amber-500 to-amber-600',
      hoverColor: 'hover:from-amber-600 hover:to-amber-700',
    },
  ];

  const socialConnections = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/RAGULZORO',
      description: 'Check out my code',
      followers: '50+',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ragul-mohanraj-627970383/',
      description: 'Professional network',
      followers: '100+',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container-portfolio mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-portfolio-secondary to-portfolio-accent bg-clip-text text-transparent font-mono text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-portfolio-accent" />
            Available for new opportunities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Choose your preferred way to connect, 
            and let's start the conversation about turning your ideas into reality.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${action.color} ${action.hoverColor} p-6 text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <action.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                  {action.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>{action.action}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Background */}
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
            </a>
          ))}
        </div>

        {/* Social Connections & Location */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-portfolio-secondary to-portfolio-accent rounded-full" />
              Connect on Social
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {socialConnections.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-6 bg-card border border-card-border rounded-xl hover:shadow-lg hover:border-portfolio-accent/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-portfolio-secondary to-portfolio-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <social.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{social.name}</h4>
                      <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                        {social.followers}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{social.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-portfolio-accent group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="space-y-6">
            <div className="portfolio-card">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-portfolio-secondary to-portfolio-accent rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Based in</h4>
                  <p className="text-muted-foreground mb-2">Tamil Nadu, India</p>
                  <p className="text-xs text-muted-foreground">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card">
              <div className="text-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                <h4 className="font-semibold text-foreground mb-2">Currently Available</h4>
                <p className="text-sm text-muted-foreground">
                  Open for freelance projects and full-time opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-8 bg-gradient-to-r from-portfolio-primary/10 via-portfolio-secondary/10 to-portfolio-accent/10 rounded-2xl border border-card-border backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to start your project?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how we can bring your vision to life
              </p>
            </div>
            <a
              href="mailto:ragulmohanrajm@example.com?subject=New%20Project%20Inquiry"
              className="btn-accent flex-shrink-0"
            >
              Start Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;