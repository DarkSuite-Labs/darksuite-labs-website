import { Instagram, Linkedin } from 'lucide-react';

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
            <span className="text-muted-foreground">·</span>
            <a
              href="https://stats.uptimerobot.com/ElhzHrykws"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              System Status
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {/* TODO: Replace with Instagram URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            {/* TODO: Replace with X/Twitter URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X (Twitter)"
            >
              <span className="h-5 w-5 flex items-center justify-center font-bold text-sm">X</span>
            </a>
            {/* TODO: Replace with LinkedIn URL */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
