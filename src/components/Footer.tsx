import { Github } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground">
            DarkSuite Labs © 2026
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <span className="text-muted-foreground">·</span>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Right: GitHub */}
          <a
            href="https://github.com/DarkSuite-Labs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
