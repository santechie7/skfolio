import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-white/10 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex gap-12">
          <div>
            <p className="text-[10px] font-bold text-gray-600 uppercase mb-2">Email Me</p>
            <p className="text-sm font-bold text-white transition-colors hover:text-blue-500">sanjeev.kukanur@gmail.com</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-600 uppercase mb-2">Location</p>
            <p className="text-sm font-bold text-white">Bangalore, India</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={20} />, href: '#' },
            { icon: <Linkedin size={20} />, href: '#' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 uppercase">
        <div className="text-xl font-black tracking-tighter text-white">SANJEEV<span className="text-blue-500 underline decoration-2 underline-offset-4 ml-1">K.</span></div>
        <div className="text-gray-600 text-[10px] font-bold tracking-widest">
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </div>
        <button
          onClick={scrollToTop}
          className="text-[10px] font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-2 tracking-widest"
        >
          BACK TO TOP <ChevronUp size={14} />
        </button>
      </div>
    </footer>
  );
}
