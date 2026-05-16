import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, ExternalLink, Shield, Cpu, Zap, Box } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-black text-white mb-6 uppercase italic">Project Not Found</h1>
        <Link to="/projects" className="text-blue-400 hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  {project.category}
                </span>
                {project.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-gradient leading-[0.9]">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-8 md:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-widest text-blue-400 flex items-center gap-3">
                <div className="w-8 h-1 bg-blue-500" /> Executive Summary
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                <h3 className="text-lg font-bold uppercase tracking-widest text-pink-500 flex items-center gap-2">
                  <Shield size={20} /> The Challenge
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.challenge}
                </p>
              </div>
              <div className="space-y-6 p-8 bg-white/5 rounded-3xl border border-white/10">
                <h3 className="text-lg font-bold uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                  <Zap size={20} /> The Solution
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.solution}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-black uppercase tracking-widest text-white flex items-center gap-3">
                 Core Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-sm text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-8">
              <div className="space-y-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs font-bold text-white">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Actions</h3>
                <div className="flex flex-col gap-3">
                  <a href={project.github} className="flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-blue-500 hover:text-white transition-colors">
                    <Github size={18} /> View Source
                  </a>
                  <a href={project.link} className="flex items-center justify-center gap-3 w-full py-4 border border-white/20 text-white font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl text-center">
              <h4 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest italic">Interested in similar architecture?</h4>
              <Link to="/#contact" className="inline-block px-8 py-3 bg-blue-600/10 border border-blue-600/50 text-blue-400 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Let's Discuss
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
