import React from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import Magnetic from '@/src/components/common/Magnetic';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
          >
            // Full Stack Developer & Backend Engineer
          </motion.p>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] text-white tracking-tighter mb-8">
            FULL STACK<br />
            <span className="text-gradient underline decoration-neon-purple/50">DEVELOPER.</span>
          </h1>

          <div className="text-xl md:text-2xl font-mono text-gray-500 mb-8 h-12 uppercase tracking-tight">
            <Typewriter
              options={{
                strings: [
                  'Frontend + Backend Engineer',
                  'React | React Native Specialist',
                  'Node.js | NestJS Expert',
                  'Next.js & TypeScript Architect',
                  'PostgreSQL & MongoDB',
                  'Microservices & Docker',
                  'AWS Cloud Solutions',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed mb-10">
            Building <span className="text-white italic">enterprise-grade</span> full stack applications. 
            From scalable microservices to high-performance frontend interfaces.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors shadow-2xl"
              >
                View Projects
              </motion.button>
            </Magnetic>
            
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm uppercase tracking-widest hover:border-blue-500 transition-all"
              >
                Resume
              </motion.button>
            </Magnetic>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Connect:</span>
            {[
              { icon: <Github size={20} />, href: 'https://github.com' },
              { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
              { icon: <Mail size={20} />, href: 'mailto:sanjeev.kukanur@gmail.com' },
            ].map((social, i) => (
              <div key={i}>
                <Magnetic>
                  <motion.a
                    href={social.href}
                    whileHover={{ y: -3, color: '#00d2ff' }}
                    className="text-slate-400 transition-colors block p-2"
                  >
                    {social.icon}
                  </motion.a>
                </Magnetic>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border border-dashed border-neon-blue/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 border border-dashed border-neon-purple/30 rounded-full"
            />
            
            {/* Profile Placeholder with Glass effect */}
            <div className="absolute inset-12 rounded-full overflow-hidden glass p-4 border border-white/20">
              <div className="w-full h-full rounded-full bg-linear-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <span className="text-8xl font-display font-bold text-gradient opacity-50">SK</span>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-8 left-1/4 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-8 right-1/4 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 -right-8 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" className="w-10 h-10" alt="NestJS" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ x: [0, -20, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute bottom-1/4 -right-8 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="w-10 h-10" alt="TypeScript" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-8 right-1/4 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              className="absolute -bottom-8 left-1/4 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className="w-10 h-10 invert" alt="Next.js" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ x: [0, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-1/4 -left-8 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="w-10 h-10" alt="PostgreSQL" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              className="absolute top-1/4 -left-8 glass p-3 rounded-2xl border border-white/10"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="w-10 h-10" alt="Tailwind CSS" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-linear-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

