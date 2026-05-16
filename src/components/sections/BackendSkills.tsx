import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const backendSkills = [
  {
    title: 'Core Backend',
    skills: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'JavaScript ES6+'],
    color: 'from-green-400 to-emerald-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    title: 'Architecture & Scalability',
    skills: ['Microservices', 'Monorepo', 'REST API Design', 'Socket.IO', 'RBAC'],
    color: 'from-blue-400 to-indigo-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg'
  },
  {
    title: 'Databases & ORM',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'Mongoose'],
    color: 'from-cyan-400 to-blue-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    title: 'Authentication',
    skills: ['JWT', 'AWS Amplify Auth', 'OTP Auth', 'OAuth 2.0', 'Refresh Tokens'],
    color: 'from-purple-400 to-pink-600',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }
];

export default function BackendSkills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="backend-skills" className="py-24 px-6 relative bg-slate-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
          >
            // Backend Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            SERVER-SIDE <span className="text-gradient">MASTERY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {backendSkills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <img src={category.icon} className="w-20 h-20" alt="" referrerPolicy="no-referrer" />
              </div>

              <h3 className="text-2xl font-black mb-6 text-white tracking-widest uppercase italic">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="w-full">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{skill}</span>
                      <span className="text-[10px] text-blue-500 font-mono">OPTIMIZED</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '90%' } : {}}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 1.5, ease: 'easeOut' }}
                        className={`h-full bg-linear-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
