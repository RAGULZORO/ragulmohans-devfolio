import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="container-portfolio mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side - Copyright */}
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-muted-foreground">
              © {currentYear} RAGUL MOHANRAJ
            </span>
          </div>

          {/* Center - Made with love */}
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-sm">and</span>
            <Code className="h-4 w-4 text-portfolio-accent" />
            <span className="text-sm">by a passionate developer</span>
          </div>

          {/* Right Side - Quick Links */}
          <div className="flex space-x-6 text-sm">
            <button
              onClick={() => {
                const element = document.querySelector('#home');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-card-border text-center">
          <p className="text-sm text-muted-foreground">
            Building the future, one line of code at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;