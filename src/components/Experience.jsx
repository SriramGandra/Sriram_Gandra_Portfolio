import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Software Engineer Intern',
      company: 'Yugayatra Retail Private Limited',
      description: 'Working on FreshIn10 quick commerce platform, contributing to scalable software solutions and efficient delivery systems.',
      date: 'March 2026 - Present'
    },
    {
      role: 'PR Team Member',
      company: 'Web Development Club & IEEE Student Branch',
      description: 'Handled public relations, organized events, and collaborated with team members to foster a strong developer community.',
      date: 'August 2025 - Present'
    },
    {
      role: 'Active Member',
      company: 'CSI (Computer Society of India)',
      description: 'Participated in numerous technical workshops, coding activities, and collaborative tech initiatives.',
      date: 'August 2025 - Present'
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">Experience</h2>
            <div className="h-[1px] bg-electric/30 flex-grow max-w-sm mt-2"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative group interactive">
                {/* Timeline Line & Node (Desktop) */}
                <div className="hidden md:flex flex-col items-center col-span-1 md:mt-1 h-full relative">
                  <div className="w-5 h-5 rounded-full bg-navy border-2 border-electric group-hover:bg-electric transition-colors duration-300 z-10 glow-box" />
                  {idx !== experiences.length - 1 && (
                    <div className="absolute top-5 bottom-[-3rem] w-[2px] bg-electric/20" />
                  )}
                </div>

                {/* Timeline Node (Mobile) */}
                <div className="absolute left-[-5px] top-1.5 w-4 h-4 rounded-full bg-navy border-2 border-electric group-hover:bg-electric transition-colors duration-300 z-10 md:hidden glow-box" />
                {idx !== experiences.length - 1 && (
                  <div className="absolute left-[2px] top-5 bottom-[-3rem] w-[2px] bg-electric/20 md:hidden" />
                )}

                {/* Content Panel */}
                <div className="md:col-span-4 glass p-6 md:p-8 rounded-xl group-hover:border-electric/50 transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-electric/10 transition-colors duration-500" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-text-main group-hover:text-electric transition-colors">{exp.role}</h3>
                    <span className="text-electric/80 font-mono text-sm mt-2 md:mt-0 px-3 py-1 border border-electric/30 rounded-full inline-block md:inline w-max">
                      {exp.date}
                    </span>
                  </div>

                  <h4 className="text-xl font-medium text-text-main/80 mb-4">{exp.company}</h4>
                  <p className="text-text-main/70 leading-relaxed text-lg">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
