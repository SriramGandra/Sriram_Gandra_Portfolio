import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Programming',
      skills: ['Java', 'Python', 'JavaScript', 'C'],
    },
    {
      title: 'Web',
      skills: ['HTML', 'CSS', 'React', 'Node.js'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Oracle'],
    },
    {
      title: 'Other',
      skills: ['Data Structures', 'OOP'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[1px] bg-electric/30 flex-grow max-w-[100px]"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main text-center tracking-tight">Technical Skills</h2>
          <div className="h-[1px] bg-electric/30 flex-grow max-w-[100px]"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="glass p-8 rounded-xl relative group interactive hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <div className="absolute inset-[-1px] border border-electric/0 group-hover:border-electric/50 rounded-xl transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] pointer-events-none" />
              
              <h3 className="text-2xl font-semibold text-electric mb-6 tracking-wide">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-text-main/80 group-hover:text-text-main transition-colors duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-highlight mr-3 glow-box" />
                    <span className="text-lg">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
