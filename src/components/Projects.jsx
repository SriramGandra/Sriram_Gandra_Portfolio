import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Yukti AI',
    description: 'An AI coding assistant that seamlessly analyzes and improves code across 20+ languages. Features real-time refactoring and deep architecture insights.',
    tech: ['React', 'Node.js', 'Express', 'OpenAI API', 'MongoDB'],
    github: 'https://github.com/SriramGandra/YuktiAI.git',
    live: 'https://69863eddbe5019000709d638--yukti-ai.netlify.app/'
  },
  {
    title: 'Smart Community Platform',
    description: 'A comprehensive community management platform for residents. Integrates announcements, services tracking, and real-time maintenance requests.',
    tech: ['MERN Stack', 'TailwindCSS', 'Socket.io', 'JWT'],
    github: 'https://github.com/SriramGandra/Smart_Building_Automation.git',
    live: null
  },
  {
    title: 'Event Management Application',
    description: 'A robust web platform to dynamically create, manage, and track events with a responsive UI built for both organizers and attendees.',
    tech: ['React', 'Firebase', 'Node.js', 'Stripe'],
    github: null,
    live: null
  },
  {
    title: 'Campus to Corporate Application',
    description: 'An educational application aimed at helping students easily transition into corporate environments with structured learning paths.',
    tech: ['React', 'Express', 'MongoDB', 'AWS S3'],
    github: null,
    live: null
  },
  {
    title: 'Soil Fertility Device Software',
    description: 'An innovative IoT-based software system that analyzes multiple soil parameters to accurately recommend optimal fertilizers to farmers.',
    tech: ['Python', 'C++', 'IoT Sensors', 'React Dashboard'],
    github: null,
    live: null
  }
];

const TiltCard = ({ project }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-2xl glass p-8 group hover:-translate-y-2 transition-all duration-300 flex flex-col h-full interactive"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ transform: "translateZ(1px)" }}
      />
      <div 
        className="absolute inset-[-1px] rounded-2xl border border-electric/0 group-hover:border-electric/50 transition-colors duration-500 glow-box pointer-events-none" 
        style={{ transform: "translateZ(1px)" }}
      />
      
      <div className="flex-grow" style={{ transform: "translateZ(50px)" }}>
        <h3 className="text-2xl font-bold text-text-main group-hover:text-electric transition-colors mb-4 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-text-main/70 leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div style={{ transform: "translateZ(40px)" }}>
        <ul className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, idx) => (
            <li key={idx} className="text-xs font-mono text-highlight bg-highlight/10 px-3 py-1 rounded-full">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex gap-4 min-h-[40px]">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-electric transition-colors p-2 -ml-2">
              <FiGithub size={22} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-text-main hover:text-electric transition-colors p-2">
              <FiExternalLink size={22} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">Featured Projects</h2>
            <div className="h-[1px] bg-electric/30 flex-grow max-w-sm mt-2"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className={idx === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
