import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Hash, Terminal } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const apis = [
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    description: 'Secure JWT-based authentication with refresh tokens.',
    response: '{ "token": "ey...", "user": { ... } }'
  },
  {
    method: 'GET',
    path: '/api/v1/users/profile',
    description: 'Retrieves authenticated user profile with RBAC details.',
    response: '{ "id": "1", "role": "ADMIN", ... }'
  },
  {
    method: 'PATCH',
    path: '/api/v1/bookings/:id',
    description: 'Atomically updates booking state with concurrency check.',
    response: '{ "status": "CONFIRMED", ... }'
  }
];

export default function APIShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-6 relative bg-black/40" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase"
            >
              // RESTful Interfaces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-6xl font-black text-white mb-8"
            >
              API <span className="text-gradient">SHOWCASE</span>
            </motion.h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Designing clean, predictable, and robust APIs. 
              Implementing Swagger documentation, input validation, and secure endpoints for enterprise consumption.
            </p>
            
            <div className="flex gap-4">
              <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-xs font-bold uppercase tracking-widest">
                Swagger Docs
              </div>
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-400 text-xs font-bold uppercase tracking-widest">
                Postman Verified
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient blur-[100px] opacity-10" />
            <div className="relative glass rounded-3xl border border-white/10 overflow-hidden">
              <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="ml-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">Enterprise API Explorer</div>
              </div>
              
              <div className="p-6 space-y-6">
                {apis.map((api, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.15 }}
                    className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-blue-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={cn(
                        "text-[10px] font-black px-2 py-0.5 rounded-md",
                        api.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                        api.method === 'GET' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      )}>
                        {api.method}
                      </span>
                      <span className="text-xs font-mono text-white tracking-widest">{api.path}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mb-3">{api.description}</p>
                    <div className="p-3 bg-black/60 rounded-lg border border-white/5 font-mono text-[10px] text-blue-300">
                      <code>{api.response}</code>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

