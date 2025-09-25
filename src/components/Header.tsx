import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-portfolio mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="group cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-portfolio-primary to-portfolio-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">RAGUL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-6 py-3 rounded-xl font-medium text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-1 left-6 right-6 h-0.5 bg-gradient-to-r from-portfolio-primary to-portfolio-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl glass-button group overflow-hidden"
              aria-label="Toggle theme"
            >
              <div className="relative z-10">
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 transition-transform group-hover:scale-110" />
                ) : (
                  <Sun className="h-5 w-5 transition-transform group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-3 rounded-xl glass-button group overflow-hidden"
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-5 w-5 transition-transform group-hover:scale-110" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/20 to-portfolio-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/20 animate-slide-in-left">
            <div className="flex flex-col space-y-2 pt-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative p-4 rounded-xl text-left font-medium transition-all duration-300 animate-bounce-in`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10 text-foreground/80 group-hover:text-foreground">
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-primary/10 to-portfolio-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;