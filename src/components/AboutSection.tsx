import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, GraduationCap, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Proficient in both frontend and backend technologies",
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always exploring new technologies and best practices",
    },
    {
      icon: GraduationCap,
      title: "Currently Studying",
      description: "App & Web Development at TUX Global Institute",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering clean, scalable solutions",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a motivated <span className="text-foreground font-medium">Full Stack Web Developer</span> based 
              in Phnom Penh, Cambodia, with hands-on experience in building robust web applications. 
              My journey in tech started with a curiosity about how things work, which evolved into 
              a passion for creating digital solutions that make a real impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in <span className="text-primary">Laravel, PHP, React, Java, and Express</span>, 
              I specialize in developing database-driven applications with clean architecture. I believe 
              in writing code that is not only functional but also maintainable and scalable.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my <span className="text-foreground font-medium">Associate Degree in App and 
              Web Development</span> at TUX Global Institute, I'm constantly expanding my skill set and staying 
              updated with the latest industry trends. My goal is to grow as a developer and contribute 
              to projects that push technological boundaries.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During my internship at <span className="text-foreground font-medium">Cam-Active Co., Ltd</span>, 
              I gained valuable real-world experience in Laravel backend development, working on inventory 
              management systems and improving operational efficiency through technology.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Let's connect and build something great together
                <span className="text-xl">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card p-6 glow-effect group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
