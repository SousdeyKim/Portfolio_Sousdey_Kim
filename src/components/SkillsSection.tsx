import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LucideIcon } from "lucide-react";
import { 
  Code, 
  Server, 
  Database, 
  Wrench,
  Layers,
  Palette,
  FileCode,
  Terminal,
  GitBranch,
  MonitorSmartphone
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 85, icon: Code },
      { name: "JavaScript", level: 90, icon: FileCode },
      { name: "HTML/CSS", level: 95, icon: Layers },
      { name: "Tailwind CSS", level: 88, icon: Palette },
      { name: "Bootstrap", level: 85, icon: MonitorSmartphone },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "PHP", level: 88, icon: FileCode },
      { name: "Laravel", level: 85, icon: Server },
      { name: "Java", level: 75, icon: Code },
      { name: "Express.js", level: 70, icon: Terminal },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85, icon: Database },
      { name: "MongoDB", level: 70, icon: Database },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch },
      { name: "VS Code", level: 95, icon: Code },
      { name: "MAMP", level: 80, icon: Server },
    ],
  },
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 glow-effect hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <category.icon className="text-primary" size={20} />
        </div>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <skill.icon size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="skill-progress">
              <motion.div
                className="skill-progress-fill"
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : {}}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.1 + skillIndex * 0.1,
                  ease: "easeOut"
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications 
            from frontend to backend.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
