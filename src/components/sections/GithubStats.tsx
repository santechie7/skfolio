import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { GitBranch, GitCommit, GitMerge, Star, Github } from 'lucide-react';

export default function GithubStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 relative bg-slate-900/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative glass rounded-3xl border border-white/10 p-8 overflow-hidden">
               {/* Concept: Animated Contribution Grid */}
               <div className="grid grid-cols-12 gap-2 mb-8">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0.1, scale: 0.8 }}
                    animate={inView ? { 
                      opacity: [0.1, Math.random() * 0.8 + 0.2, 0.1],
                      scale: 1,
                      backgroundColor: i % 7 === 0 ? 'rgba(59, 130, 246, 0.5)' : 
                                      i % 5 === 0 ? 'rgba(139, 92, 246, 0.4)' : 
                                      'rgba(255, 255, 255, 0.05)'
                    } : {}}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 3 + Math.random() * 2, 
                      delay: Math.random() * 2 
                    }}
                    className="aspect-square rounded-sm"
                  />
                ))}
               </div>

               <div className="flex justify-between items-end">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <GitCommit size={16} className="text-blue-400" />
                    <span className="text-xl font-bold text-white">1,200+</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Commits This Year</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GitBranch size={16} className="text-purple-400" />
                    <span className="text-xl font-bold text-white">45+</span>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Open Repositories</span>
                  </div>
                </div>
                <div className="p-4 bg-white/5 rounded-2xl text-center border border-white/10">
                   <div className="flex items-center gap-1 justify-center text-yellow-400 mb-1">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Gold Star Contributor</span>
                </div>
               </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
            >
              // Open Source Footprint
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-6xl font-black text-white mb-8"
            >
              COMMITMENT <span className="text-gradient">TO CODE</span>
            </motion.h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Highly active in the developer ecosystem. Contributing to open-source systems 
              and maintaining production-grade monorepos with strict CI/CD standards.
            </p>
            
            <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GitHub <Github size={18} />
              </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
