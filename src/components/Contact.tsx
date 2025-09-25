import { 
  Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Calendar, Coffee, 
  ArrowRight, Sparkles, Send, Zap, Heart, Globe 
} from 'lucide-react';

const Contact = () => {
  const quickActions = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Get a response within 24 hours',
      action: 'Send Message',
      href: 'mailto:ragulmohanrajm@example.com',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600',
      badge: 'Fastest',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat & instant replies',
      action: 'Start Chat',
      href: 'https://wa.me/919361944903',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600',
      badge: 'Popular',
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: '30-min free consultation',
      action: 'Book Meeting',
      href: 'https://calendly.com/ragulmohanraj',
      color: 'from-purple-500 to-violet-500',
      hoverColor: 'hover:from-purple-600 hover:to-violet-600',
      badge: 'Professional',
    },
    {
      icon: Coffee,
      title: 'Coffee Chat',
      description: 'Let\'s meet in Tamil Nadu',
      action: 'Suggest Place',
      href: 'mailto:ragulmohanrajm@example.com?subject=Coffee%20Chat',
      color: 'from-amber-500 to-orange-500',
      hoverColor: 'hover:from-amber-600 hover:to-orange-600',
      badge: 'Local',
    },
  ];

  const socialConnections = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/RAGULZORO',
      description: 'Code repositories & contributions',
      followers: '50+',
      color: 'from-gray-700 to-gray-900',
      stats: '15+ Repos'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ragul-mohanraj-627970383/',
      description: 'Professional network & updates',
      followers: '100+',
      color: 'from-blue-600 to-blue-800',
      stats: 'Active'
    },
  ];

  const contactStats = [
    { label: 'Response Time', value: '<24h', icon: Zap },
    { label: 'Projects Completed', value: '15+', icon: Heart },
    { label: 'Happy Clients', value: '100%', icon: Sparkles },
    { label: 'Countries Reached', value: '5+', icon: Globe },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-l from-portfolio-primary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-portfolio-accent/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-portfolio-secondary/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className="container-portfolio mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-accent/10 rounded-full border border-portfolio-primary/20 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium gradient-text">Available for new opportunities</span>
            <Sparkles className="w-4 h-4 text-portfolio-accent" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Let's Create Something{' '}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent mx-auto rounded-full mb-8" />
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to turn your vision into reality? I'm here to help you build amazing digital experiences. 
            Choose your preferred way to connect and let's start creating magic together.
          </p>
        </div>

        {/* Contact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {contactStats.map((stat, index) => (
            <div
              key={index}
              className="text-center portfolio-card-glow hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${action.color} ${action.hoverColor} p-8 text-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl animate-bounce-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                {/* Badge */}
                <div className="absolute -top-2 -right-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold">
                  {action.badge}
                </div>

                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <action.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                <p className="text-white/90 text-sm mb-6 leading-relaxed">
                  {action.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span>{action.action}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/5 transition-transform duration-500 group-hover:scale-125" />
            </a>
          ))}
        </div>

        {/* Social Connections & Info */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Social Links */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
              <span className="h-10 w-2 bg-gradient-to-b from-portfolio-primary to-portfolio-accent rounded-full" />
              Social Connections
            </h3>
            <div className="grid gap-6">
              {socialConnections.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group portfolio-card-glow hover-lift flex items-center p-8"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <social.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold gradient-text">{social.name}</h4>
                      <span className="px-3 py-1 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full text-xs font-bold text-portfolio-primary">
                        {social.followers}
                      </span>
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-bold text-muted-foreground">
                        {social.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{social.description}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-portfolio-accent group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="space-y-6">
            <div className="portfolio-card-glow hover-lift">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-portfolio-secondary to-portfolio-accent rounded-2xl flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold gradient-text mb-3">Based in</h4>
                  <p className="text-foreground font-semibold mb-2">Tamil Nadu, India</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Available for remote work worldwide & local meetups in Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            <div className="portfolio-card-glow hover-lift">
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-4 animate-pulse" />
                <h4 className="text-xl font-bold gradient-text mb-3">Currently Available</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Open for exciting freelance projects, full-time opportunities, 
                  and collaborative ventures.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">
                  <Zap className="w-3 h-3" />
                  Ready to Start
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="portfolio-card-glow max-w-3xl mx-auto p-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-portfolio-primary to-portfolio-accent rounded-2xl flex items-center justify-center animate-pulse-glow">
                <Send className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">
              Ready to Start Your Project?
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Every great project starts with a conversation. Let's discuss your ideas, 
              challenges, and how we can create something amazing together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ragulmohanrajm@example.com?subject=New%20Project%20Inquiry"
                className="group btn-primary text-lg"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Start Project Discussion</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="https://wa.me/919361944903"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-secondary text-lg"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Quick Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;