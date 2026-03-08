import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiStar, FiMonitor, FiCode, FiCloud, FiExternalLink } from 'react-icons/fi';

const Achievements = () => {
  const achievements = [
    {
      title: 'Hackathon Winner',
      desc: '1x Hackathon Winner (300 teams participated). Secured 1st place by building an innovative solution.',
      icon: <FiAward size={28} />,
      link: 'https://drive.google.com/file/d/1oEVwUGP7dGOBP-wsW3JDt6vpEZqIIUJg/view'
    },
    {
      title: 'Smart India Hackathon 2025',
      desc: 'Shortlisted among the Top 45 teams out of 600 nationwide for Smart India Hackathon 2025.',
      icon: <FiStar size={28} />
    },
    {
      title: 'Programming in Java – NPTEL',
      desc: 'Awarded Elite-Silver certification with 86% final score for exceptional performance in Java concepts.',
      icon: <FiCode size={28} />,
      link: 'https://drive.google.com/file/d/1zaIh5l_5nhJ_xqVgQQmhCLHxGcfcsE_n/view?usp=drive_link'
    },
    {
      title: 'Explore Generative AI – Microsoft Learn',
      desc: 'Certified credential in exploring and leveraging generative AI models for modern applications.',
      icon: <FiMonitor size={28} />,
      link: 'https://learn.microsoft.com/en-gb/users/sriramgandra-1343/achievements?tab=credentials-tab'
    },
    {
      title: 'AWS Solutions Architecture – Forage',
      desc: 'Completed the AWS Solutions Architecture Job Simulation, demonstrating cloud architecture design capabilities.',
      icon: <FiCloud size={28} />,
      link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_Tg4DRk9GzzvDp72MC_1762327377596_completion_certificate.pdf'
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 flex items-center justify-center gap-4 text-center"
        >
          <div className="h-[1px] bg-electric/30 flex-grow max-w-[100px] hidden sm:block"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-main">Achievements & Certifications</h2>
          <div className="h-[1px] bg-electric/30 flex-grow max-w-[100px] hidden sm:block"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="glass p-8 rounded-xl relative group interactive hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
              <div className="absolute inset-[-1px] border border-electric/0 group-hover:border-electric/50 rounded-xl transition-colors duration-300 group-hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] pointer-events-none" />

              <div className="w-14 h-14 rounded-full bg-navy text-electric flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-navy transition-colors duration-300 border border-electric/30 glow-box">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-electric transition-colors">{item.title}</h3>
              <p className="text-text-main/70 leading-relaxed mb-6">{item.desc}</p>
              
              {item.link && (
                <div className="mt-auto pt-4 relative z-20">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-text-main transition-colors duration-300"
                  >
                    View Certificate <FiExternalLink />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
