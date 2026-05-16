import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Server, Database, ShieldCheck, Activity } from 'lucide-react';

const systems = [
  {
    title: 'Microservices Architecture',
    description: 'Decoupled services communicating via API Gateways and Message Brokers.',
    features: ['API Gateway', 'Auth Service', 'Payment Service', 'Notification Service'],
    icon: <Server className="w-6 h-6 text-blue-400" />,
    color: 'blue'
  },
  {
    title: 'Real-Time Communication',
    description: 'High-concurrency systems for live chat and instant notifications.',
    features: ['Socket.IO', 'Redis Pub/Sub', 'Presence Tracking', 'Live Events'],
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    color: 'purple'
  },
  {
    title: 'Identity & Security',
    description: 'Enterprise-grade authentication and authorization flows.',
    features: ['JWT', 'Refresh Tokens', 'RBAC', 'Secure Middleware'],
    icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
    color: 'pink'
  },
  {
    title: 'Database Design',
    description: 'Hybrid storage strategies using Relational and Document models.',
    features: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Query Optimization'],
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    color: 'emerald'
  }
];

export default function Architecture() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
            >
              // Systems Engineering
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-6xl font-black text-white"
            >
              SYSTEM <span className="text-gradient">ARCHITECTURE</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Architecture Visualization (Conceptual) */}
          <div className="relative h-[500px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
            
            <div className="relative z-10 w-full h-full p-8 flex items-center justify-center">
              <svg width="100%" height="100%" viewBox="0 0 400 300" className="max-w-md">
                {/* Boxes and animated lines */}
                <motion.rect
                  x="150" y="20" width="100" height="40" rx="4"
                  fill="none" stroke="#3b82f6" strokeWidth="2"
                  initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                />
                <text x="200" y="45" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">API GATEWAY</text>

                <motion.line
                  x1="200" y1="60" x2="200" y2="100"
                  stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                  initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                />

                {[50, 200, 350].map((x, i) => (
                  <React.Fragment key={x}>
                    <motion.line
                      x1="200" y1="100" x2={x} y2="150"
                      stroke="#8b5cf6" strokeWidth="1"
                      initial={{ pathLength: 0 }} animate={inView ? { pathLength: 1 } : {}}
                    />
                    <motion.rect
                      x={x-40} y="150" width="80" height="40" rx="4"
                      fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" strokeWidth="2"
                      initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
                    />
                    <text x={x} y="175" textAnchor="middle" fill="white" fontSize="10">SVC 0{i+1}</text>
                  </React.Fragment>
                ))}

                <motion.circle
                  cx="200" cy="260" r="30"
                  fill="none" stroke="#ec4899" strokeWidth="2"
                  initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
                />
                <text x="200" y="265" textAnchor="middle" fill="white" fontSize="10">DB CLUSTER</text>
              </svg>
            </div>
            
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Infrasctructure Live</span>
            </div>
          </div>

          <div className="space-y-6">
            {systems.map((sys, idx) => (
              <motion.div
                key={sys.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                    {sys.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tighter">{sys.title}</h3>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{sys.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {sys.features.map(f => (
                        <span key={f} className="text-[9px] font-bold px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 uppercase">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
