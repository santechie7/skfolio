import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Cloud, Container, Github, Globe, RefreshCcw } from 'lucide-react';

const devopsTech = [
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
  { name: 'Github Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', invert: true }
];

export default function DevOps() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 relative bg-slate-900/10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
          >
            // Deployment & Orchestration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-6xl font-black text-white"
          >
            DEVOPS <span className="text-gradient">& CLOUD</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-center">
            {/* CI/CD Pipeline Visualization */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              {[
                { label: 'Code', icon: <Github className="w-8 h-8" /> },
                { label: 'Build', icon: <RefreshCcw className="w-8 h-8" /> },
                { label: 'Containerize', icon: <Container className="w-8 h-8" /> },
                { label: 'Deploy', icon: <Cloud className="w-8 h-8" /> },
                { label: 'Monitor', icon: <Globe className="w-8 h-8" /> }
              ].map((step, i, arr) => (
                <React.Fragment key={step.label}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{step.label}</span>
                  </motion.div>
                  {i < arr.length - 1 && (
                    <div className="hidden md:block w-px h-12 bg-white/10 relative">
                       <motion.div 
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : {}}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                        className="absolute top-0 left-0 w-full bg-blue-500"
                       />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-black/40 border border-white/5 rounded-2xl text-center">
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto italic font-mono uppercase tracking-tighter">
                "Automating the delivery pipeline from commit to cloud production. 
                Implementing Docker-based containerization for environmental consistency."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {devopsTech.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-3xl flex flex-col items-center justify-center group hover:bg-white/10 transition-all"
              >
                <img 
                  src={tech.icon} 
                  className={`w-12 h-12 mb-4 group-hover:scale-110 transition-transform ${tech.invert ? 'invert' : ''}`} 
                  alt={tech.name}
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
