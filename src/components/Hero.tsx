import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
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
      <div className="absolute inset-0 animated-bg"></div>
      
      <div className="container-portfolio mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-portfolio-accent font-mono text-lg mb-4 animate-fade-in-up">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-right">
              <span className="gradient-text">RAGUL</span>
              <br />
              <span className="text-foreground">MOHANRAJ</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-8 animate-fade-in-up">
              Fullstack Web Developer
            </h2>
          </div>

          {/* Professional Summary */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Passionate about creating innovative web solutions with expertise in{' '}
              <span className="text-portfolio-secondary font-semibold">modern frameworks</span>,{' '}
              <span className="text-portfolio-accent font-semibold">cloud technologies</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up">
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-primary group"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a
              href="https://github.com/RAGULZORO"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-card-border hover:bg-portfolio-primary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ragul-mohanraj-627970383/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-card-border hover:bg-portfolio-secondary hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ragulmohanrajm@example.com"
              className="p-3 rounded-full bg-card border border-card-border hover:bg-portfolio-accent hover:text-white transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 text-portfolio-accent hover:text-portfolio-secondary transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
