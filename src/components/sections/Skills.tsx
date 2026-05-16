import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3'],
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Mobile',
    skills: ['React Native'],
    color: 'from-purple-400 to-indigo-400',
  },
  {
    title: 'State & Data',
    skills: ['Redux Toolkit', 'Zustand', 'RTK Query'],
    color: 'from-pink-400 to-rose-400',
  },
  {
    title: 'Styling',
    skills: ['Tailwind CSS', 'Styled Components', 'CSS Modules'],
    color: 'from-orange-400 to-amber-400',
  },
  {
    title: 'Backend & Tools',
    skills: ['Node.js', 'REST APIs', 'GitHub', 'Figma', 'Postman'],
    color: 'from-emerald-400 to-teal-400',
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            I leverage the latest technologies to build powerful and efficient applications 
            that deliver exceptional user experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl group relative overflow-hidden"
            >
              <p className="text-[10px] font-bold text-blue-400 uppercase mb-4 tracking-widest">{category.title} Expertise</p>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold uppercase tracking-wide hover:border-blue-500 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Icons (Decorative) */}
        <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-20 filter grayscale hover:grayscale-0 transition-all duration-700">
          {['react', 'nextjs', 'typescript', 'tailwindcss', 'redux', 'nodejs'].map((icon) => (
            <img
              key={icon}
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${icon === 'nextjs' ? 'original' : 'original'}.svg`}
              className={`w-12 h-12 ${icon === 'nextjs' ? 'invert' : ''}`}
              referrerPolicy="no-referrer"
              alt={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
