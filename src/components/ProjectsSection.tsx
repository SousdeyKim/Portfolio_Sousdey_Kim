import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Users, Briefcase, ShoppingCart, Building, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  icon: LucideIcon;
  role: string;
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "MajorConnect",
    description: "A comprehensive mentorship platform designed to help students explore university majors through personalized 1-on-1 sessions with experienced senior students, bridging the gap between academic choices and career paths.",
    features: [
      "Major browsing & intelligent search",
      "Detailed mentor profiles",
      "Student satisfaction indicators",
      "Integrated booking system",
      "Payment flow UI",
      "Progress tracking dashboard",
      "Reviews & feedback system",
    ],
    techStack: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    icon: Users,
    role: "Full Stack Developer",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Job Board Applications",
    description: "Two comprehensive Laravel-based job board platforms focused on robust backend architecture and efficient database design, enabling seamless connections between employers and job seekers.",
    features: [
      "Dynamic job listings management",
      "Secure authentication system",
      "Clean MVC architecture",
      "Advanced search & filtering",
      "Application tracking",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    icon: Briefcase,
    role: "Backend Developer",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Point of Sale (POS)",
    description: "A feature-rich Point of Sale system designed for retail businesses, streamlining product management, sales operations, and seller performance analytics with intuitive interfaces.",
    features: [
      "Complete CRUD operations",
      "Invoice generation & management",
      "Comprehensive sales reporting",
      "Inventory tracking",
      "Seller performance metrics",
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
    icon: ShoppingCart,
    role: "Full Stack Developer",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Hotel Management System",
    description: "A Java-based comprehensive hotel operations management system providing efficient handling of guest check-ins, room availability, and secure staff authentication.",
    features: [
      "Guest check-in / check-out",
      "Real-time room availability",
      "Secure login system",
      "Reservation management",
      "Staff access control",
    ],
    techStack: ["Java", "MySQL", "Swing UI"],
    icon: Building,
    role: "Java Developer",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card overflow-hidden glow-effect hover:border-primary/30 transition-all duration-300"
    >
      {/* Header with gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
        <div className="flex items-start justify-between">
          <div className="w-14 h-14 rounded-xl bg-background/90 flex items-center justify-center shadow-lg">
            <project.icon className="text-primary" size={28} />
          </div>
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {project.role}
          </Badge>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Key Features:</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
            {project.features.slice(0, 6).map((feature) => (
              <li key={feature} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <span className="text-primary mt-1">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild size="sm" className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Demo
              </a>
            </Button>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <Button variant="outline" size="sm" className="flex-1" disabled>
              <Github size={16} className="mr-2" />
              Private Project
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in building full-stack 
            applications with clean code and user-focused design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
