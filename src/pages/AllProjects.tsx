import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowLeft, Search, Filter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';

const categories = ['All', 'Backend', 'Full Stack', 'Security'];

export default function AllProjects() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white pb-24">
      {/* Header */}
      <header className="py-20 px-6 border-b border-white/5 relative bg-black/40">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-12 transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back to Portfolio</span>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            PROJECT <span className="text-gradient">ARCHIVE</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Exploring the full spectrum of development, from complex microservice ecosystems to 
            high-performance web interfaces. Every project is built with scalability and security in mind.
          </p>
        </div>
      </header>

      {/* Filters & Search */}
      <div className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/5 text-gray-500 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text"
              placeholder="Search stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 text-sm focus:outline-hidden focus:border-blue-500/50 transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex flex-col h-full relative cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] px-2 py-0.5 border border-white/10 text-gray-500 font-bold uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-black mb-3 group-hover:text-blue-400 transition-colors uppercase italic tracking-tighter">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs leading-relaxed mb-8 h-12 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-white/5 flex gap-4">
                    <a href={project.github} onClick={(e) => e.stopPropagation()} className="text-[10px] font-black flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                      <Github size={14} /> Github
                    </a>
                    <a href={project.link} onClick={(e) => e.stopPropagation()} className="text-[10px] font-black flex items-center gap-2 text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                      <ExternalLink size={14} /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <p className="text-gray-500 font-mono italic">// No matching projects found in the archive.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
