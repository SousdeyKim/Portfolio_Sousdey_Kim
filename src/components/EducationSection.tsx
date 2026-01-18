import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Education {
  degree: string;
  institution: string;
  period: string;
  status: string;
  description: string;
  icon: typeof GraduationCap;
}

const educations: Education[] = [
  {
    degree: "Associate Degree in App and Web Development",
    institution: "TUX Global Institute",
    period: "2024 – Present",
    status: "In Progress",
    description: "Focused on modern web development technologies, application design, and software engineering principles. Building practical skills through hands-on projects.",
    icon: GraduationCap,
  },
  {
    degree: "Bachelor's Degree in International Studies",
    institution: "Institute of Foreign Languages",
    period: "2016 – 2020",
    status: "Completed",
    description: "Developed strong communication, research, and analytical skills. Gained cross-cultural understanding and global perspective.",
    icon: BookOpen,
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A blend of technical expertise and global perspective, continuously 
            learning and growing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 md:p-8 glow-effect hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative">
                {/* Icon and status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <edu.icon className="text-primary" size={28} />
                  </div>
                  <Badge 
                    variant={edu.status === "In Progress" ? "default" : "secondary"}
                    className={edu.status === "In Progress" ? "animate-pulse-glow" : ""}
                  >
                    {edu.status}
                  </Badge>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                  <Calendar size={14} />
                  {edu.period}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
