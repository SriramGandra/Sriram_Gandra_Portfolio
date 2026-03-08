import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { title: 'MERN Stack Development', desc: 'Building scalable full-stack applications with MongoDB, Express, React, and Node.js.' },
    { title: 'Problem Solving', desc: 'Passionate about tackling complex algorithmic challenges and optimizing code performance.' },
    { title: 'Hackathon Experience', desc: 'Participated in a couple of hackathons and won once. Also placed in the Top 45 teams in Smart India Hackathon 2025.' },
    { title: 'Real World Projects', desc: 'Developing solutions that address actual problems, from smart community platforms to IoT soil fertility analysis.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-main">About Me</h2>
            <div className="h-[1px] bg-electric/30 flex-grow max-w-sm mt-2"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <p className="text-lg text-text-main/80 leading-relaxed mb-6">
                I am a highly motivated Web Developer and Computer Science Undergraduate with a strong foundation in modern web technologies. My journey in tech is driven by a passion for creating pristine, user-centric experiences and writing clean, scalable code.
              </p>
              <p className="text-lg text-text-main/80 leading-relaxed">
                Currently in my 2nd year of B.Tech CSE, I am actively building my expertise in the MERN stack while actively participating in hackathons and technical communities. I believe in learning by doing, which has led me to develop software spanning from AI assistants to IoT platforms.
              </p>
            </div>

            {/* Timeline Layout */}
            <div className="lg:w-1/2">
              <motion.div
                className="relative border-l-2 border-electric/20 pl-8 space-y-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {highlights.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative group">
                    {/* Timeline Node */}
                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-navy border-2 border-electric group-hover:bg-electric transition-colors duration-300 shadow-[0_0_10px_rgba(100,255,218,0.5)]" />

                    <div className="glass p-6 rounded-lg hover:border-electric/50 transition-colors duration-300 glow-box interactive">
                      <h3 className="text-xl font-semibold text-text-main mb-2">{item.title}</h3>
                      <p className="text-text-main/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
