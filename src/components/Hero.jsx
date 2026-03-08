import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiJavascript } from 'react-icons/si';

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Particles */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-electric/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-96 h-96 bg-highlight/10 rounded-full blur-[120px] animate-pulse delay-1000" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-3/5 mt-16 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-electric font-mono mb-4 tracking-wider">Hi, my name is</div>
          <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 tracking-tight">
            Sriram Gandra.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-text-main/70 mb-6">
            Web Developer | CSE Undergraduate
          </h2>
          <p className="text-lg md:text-xl text-text-main/80 max-w-xl mb-4 leading-relaxed">
            Building clean, scalable and impactful web experiences.
          </p>
          <p className="text-base text-text-main/60 max-w-xl mb-10 leading-relaxed font-light">
            Motivated 2nd year B.Tech Computer Science student with a strong foundation in Web Development and Object-Oriented Programming. Seeking internship opportunities to gain hands-on industry experience and contribute to real-world software projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded border border-electric text-electric font-medium hover:bg-electric/10 transition-colors duration-300 interactive"
            >
              View Projects
            </a>
            <a 
              href="/resume.pdf" 
              download="Sriram_Gandra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded bg-highlight text-navy font-semibold hover:bg-highlight/90 transition-colors duration-300 interactive"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          className="w-full md:w-2/5 flex justify-center relative my-10 md:my-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Glowing Ring & Profile Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full border-2 border-electric/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border border-highlight/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-electric/50 glow-box bg-dark flex items-center justify-center">
              <img 
                src="/profile.jpg" 
                alt="Sriram Gandra"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ display: 'none' }} className="w-full h-full items-center justify-center">
                 <div className="text-8xl text-electric font-bold pb-2">SG</div>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div 
              className="absolute -top-4 left-10 text-4xl text-[#61DAFB] bg-navy rounded-full p-2 glow-box"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            >
              <FaReact />
            </motion.div>
            
            <motion.div 
              className="absolute top-20 -right-6 text-4xl text-[#339933] bg-navy rounded-full p-2 glow-box"
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <FaNodeJs />
            </motion.div>

            <motion.div 
              className="absolute -bottom-4 right-10 text-4xl text-[#47A248] bg-navy rounded-full p-2 glow-box"
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            >
              <SiMongodb />
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -left-8 text-4xl text-[#F7DF1E] bg-navy rounded-full p-2 glow-box flex items-center justify-center"
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <SiJavascript className="bg-black" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
