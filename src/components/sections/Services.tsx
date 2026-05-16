import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Monitor, Smartphone, Palette, Globe, Zap, Database } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building fast, responsive, and interactive web applications using React and Next.js.',
    icon: <Monitor className="w-8 h-8" />,
    color: 'text-blue-400',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating cross-platform mobile experiences for iOS and Android with React Native.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'text-purple-400',
  },
  {
    title: 'UI/UX Development',
    description: 'Translating complex designs into pixel-perfect, accessible, and user-friendly interfaces.',
    icon: <Palette className="w-8 h-8" />,
    color: 'text-pink-400',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting frontends with complex backend systems and third-party APIs.',
    icon: <Zap className="w-8 h-8" />,
    color: 'text-yellow-400',
  },
  {
    title: 'Performance Optimization',
    description: 'Analyzing and improving application speed, Core Web Vitals, and resource efficiency.',
    icon: <Globe className="w-8 h-8" />,
    color: 'text-emerald-400',
  },
  {
    title: 'State Management',
    description: 'Designing robust data flows using Redux Toolkit, Zustand, and modern architectural patterns.',
    icon: <Database className="w-8 h-8" />,
    color: 'text-orange-400',
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-24 px-6 relative bg-slate-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Comprehensive development solutions tailored to meet modern digital needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="p-8 rounded-[2rem] glass border border-white/5 transition-all group"
            >
              <div className={`${service.color} mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
