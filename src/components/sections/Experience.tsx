import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const experiences = [
  {
    company: 'PGC Digital',
    role: 'Full Stack Developer',
    period: 'Aug 2023 – Present',
    projects: [
      'Job & Talent Management Platform',
      'Travel & Hospitality Booking Platform',
      'Talent Management & Revenue Tracking System',
    ],
    highlights: [
      'Microservice Architecture (Node.js/NestJS)',
      'Enterprise Backend with PostgreSQL & MongoDB',
      'Real-time communication using Socket.IO',
      'Advanced Auth with JWT & RBAC',
      'Prisma ORM & Mongoose integration',
      'Dockerized containerized environments',
    ],
  },
  {
    company: 'StockxBid Technologies Pvt Ltd',
    role: 'Frontend Developer',
    period: 'Nov 2022 – Aug 2023',
    projects: ['e-CMP — E-commerce & Booking Platform'],
    highlights: [
      'Streetwear product UI',
      'Filters and sorting',
      'Wishlist & Cart system',
      'Checkout flow',
    ],
  },
  {
    company: 'eReleGo Technologies Pvt Ltd',
    role: 'Junior Frontend Developer',
    period: 'Aug 2021 – Sept 2022',
    projects: ['Educational & Management Platforms'],
    highlights: [
      'HTML/CSS/PHP applications',
      'jQuery validation',
      'School website management',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-slate-400"
          >
            A timeline of my professional experience and growth.
          </motion.p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className={cn(
                "mb-12 ml-8 relative pl-8 border-l border-white/10",
                idx > 1 ? "opacity-50" : ""
              )}
            >
              {/* Timeline Dot */}
              <div className={cn(
                "absolute -left-[5px] top-1 w-2 h-2 rounded-full",
                idx === 0 ? "bg-blue-500" : idx === 1 ? "bg-gray-700" : "bg-gray-800"
              )} />

              <div>
                <p className={cn(
                  "text-[10px] font-bold mb-1 uppercase tracking-widest",
                  idx === 0 ? "text-blue-400" : "text-gray-500"
                )}>
                  {exp.period}
                </p>
                <h3 className="text-lg font-bold text-white mb-2">
                  {exp.role} @ <span className="text-blue-500">{exp.company}</span>
                </h3>
                <p className="text-xs text-gray-500 italic mb-4">
                  {exp.projects.join(', ')}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                      <div className="w-1 h-1 rounded-full bg-blue-500/50 mt-1.5 shrink-0" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
