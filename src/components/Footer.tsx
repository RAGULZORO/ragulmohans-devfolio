import { Heart, Code, Sparkles, Github, Linkedin, Mail, ArrowUp, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/RAGULZORO', 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/ragul-mohanraj-627970383/', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:ragulmohanrajm@example.com', 
      label: 'Email',
      color: 'hover:text-red-400'
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-card via-card to-muted border-t border-border">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-portfolio-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-portfolio-accent/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-portfolio mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-portfolio-primary to-portfolio-secondary flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <span className="text-3xl font-black gradient-text">RAGUL MOHANRAJ</span>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate <span className="gradient-text-secondary font-semibold">Fullstack Developer</span> dedicated 
              to crafting exceptional digital experiences with modern technologies and secure coding practices.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-portfolio-primary to-portfolio-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-bold gradient-text mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-portfolio-secondary to-portfolio-accent rounded-full" />
              Let's Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-3 text-muted-foreground ${social.color} transition-all duration-300 group`}
                  aria-label={social.label}
                >
                  <div className="w-8 h-8 rounded-lg bg-muted group-hover:bg-gradient-to-r group-hover:from-portfolio-primary/20 group-hover:to-portfolio-secondary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                    <social.icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} RAGUL MOHANRAJ</span>
            <span>•</span>
            <span className="text-sm">All rights reserved</span>
          </div>

          {/* Made with Love */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Crafted with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-sm">and</span>
            <Code className="h-4 w-4 text-portfolio-accent" />
            <span className="text-sm">and</span>
            <Coffee className="h-4 w-4 text-amber-500" />
            <span className="text-sm">by a passionate developer</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group flex items-center gap-2 px-4 py-2 rounded-xl glass-button text-sm font-medium hover:scale-105 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-sm gradient-text font-medium">
            "Building the future, one pixel and one line of code at a time"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;