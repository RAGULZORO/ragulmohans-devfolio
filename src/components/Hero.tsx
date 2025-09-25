import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-portfolio-secondary/20 to-portfolio-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-portfolio-accent/10 to-portfolio-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container-portfolio mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-full border border-portfolio-primary/20 mb-8 animate-bounce-in">
            <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium gradient-text">Available for Exciting Projects</span>
            <Sparkles className="w-4 h-4 text-portfolio-accent" />
          </div>

          {/* Main Introduction */}
          <div className="mb-12">
            <div className="mb-6 animate-text-reveal animate-delay-200">
              <span className="inline-flex items-center gap-2 text-portfolio-accent font-mono text-lg font-medium">
                <Code2 className="w-5 h-5" />
                Hello World, I'm
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-zoom-in animate-delay-300">
              <span className="gradient-text">RAGUL</span>
              <br />
              <span className="gradient-text-secondary">MOHANRAJ</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-in-left animate-delay-400">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary rounded-full text-white font-semibold">
                <Zap className="w-5 h-5" />
                Fullstack Developer
              </div>
              <div className="flex items-center gap-2 px-6 py-3 glass-card text-foreground font-medium">
                <Sparkles className="w-4 h-4 text-portfolio-accent" />
                UI/UX Enthusiast
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto mb-16 animate-text-reveal animate-delay-500">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Crafting <span className="gradient-text font-semibold">digital experiences</span> that blend 
              innovative design with robust functionality. Passionate about{' '}
              <span className="gradient-text-secondary font-semibold">modern web technologies</span> and{' '}
              <span className="gradient-text-accent font-semibold">cybersecurity</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-bounce-in animate-delay-600">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group relative overflow-hidden bg-gradient-to-r from-portfolio-primary via-portfolio-secondary to-portfolio-accent text-white px-10 py-5 rounded-2xl font-bold shadow-2xl hover:shadow-glow transition-all duration-500 hover:scale-110 hover:-translate-y-2"
            >
              <span className="relative z-10 flex items-center text-lg">
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                Explore My Work
                <ArrowDown className="ml-3 h-6 w-6 group-hover:translate-y-1 group-hover:animate-bounce transition-all duration-300" />
              </span>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-secondary via-portfolio-accent to-portfolio-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="group relative glass-card px-10 py-5 rounded-2xl font-bold hover:scale-110 hover:-translate-y-2 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center text-lg text-foreground">
                <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Let's Connect
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-in-left animate-delay-700">
            {[
              { icon: Github, href: 'https://github.com/RAGULZORO', label: 'GitHub', color: 'from-gray-600 to-gray-800' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/ragul-mohanraj-627970383/', label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
              { icon: Mail, href: 'mailto:ragulmohanrajm@example.com', label: 'Email', color: 'from-red-500 to-pink-600' }
            ].map(({ icon: Icon, href, label, color }, index) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative p-4 rounded-2xl bg-gradient-to-br ${color} text-white hover:scale-125 hover:-translate-y-3 transition-all duration-500 shadow-lg hover:shadow-2xl animate-bounce-in`}
                style={{ animationDelay: `${700 + index * 100}ms` }}
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="group p-3 rounded-full glass-button hover:scale-110 transition-all duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-portfolio-primary group-hover:text-portfolio-secondary transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;