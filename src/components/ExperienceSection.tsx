import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Web Developer Intern",
    company: "Cam-Active Co., Ltd",
    location: "Phnom Penh, Cambodia",
    period: "July 2025 – September 2025",
    type: "Internship",
    responsibilities: [
      "Designed and developed scalable Laravel backend architecture for inventory management systems",
      "Implemented RESTful APIs with optimized CRUD operations for efficient data processing",
      "Optimized MySQL queries and added indexing to improve database performance",
      "Structured modular and maintainable codebase following MVC best practices",
      "Built secure authentication and role-based access control systems",
    ],
    achievements: [
      "Enhanced system scalability by optimizing database queries and reducing response time",
      "Improved inventory tracking accuracy and operational efficiency",
      "Reduced query execution time through indexing and performance tuning",
      "Delivered all assigned features within deadlines while maintaining code quality",
    ],
    skills: ["Laravel", "PHP", "MySQL", "Git", "REST APIs"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience building real-world applications and
            contributing to production systems.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline */}
              <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                  <Briefcase className="text-primary" size={18} />
                </div>
                {index < experiences.length - 1 && (
                  <div className="flex-1 w-0.5 bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="ml-16 pb-12">
                <div className="glass-card p-6 md:p-8 glow-effect hover:border-primary/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold">
                          {exp.title}
                        </h3>
                        <Badge className="hidden sm:inline-flex">
                          {exp.type}
                        </Badge>
                      </div>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2
                            size={16}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          <span className="text-foreground">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
