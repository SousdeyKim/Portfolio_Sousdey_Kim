import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.span
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              KS
            </motion.span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Kim Sousdey
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/SousdeyKim"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sousdey-k-56021728b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:sousdey716@gmail.com"
              className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
