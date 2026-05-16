import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';

export default function Projects() {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 max-w-xl"
            >
              A selection of my recent works in web and mobile development, 
              focusing on high performance and clean UI.
            </motion.p>
          </div>
          
          <Link
            to="/projects"
            className="flex items-center gap-2 text-neon-blue font-bold hover:underline"
          >
            View All Work <Layers size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => navigate(`/projects/${project.id}`)}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full relative cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    <a 
                      href={project.link} 
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 pb-12 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 text-gray-400 font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">View Case Study</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    <ArrowRightIcon className="w-4 h-4 text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
