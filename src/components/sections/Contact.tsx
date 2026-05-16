import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10"
            >
              Have a project in mind or just want to say hi? 
              Feel free to reach out. I'm always open to discussing new opportunities.
            </motion.p>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-neon-blue" />, label: 'Email', value: 'sanjeev.kukanur@gmail.com', href: 'mailto:sanjeev.kukanur@gmail.com' },
                { icon: <Phone className="text-neon-purple" />, label: 'Phone', value: '+91 1234567890', href: 'tel:+911234567890' },
                { icon: <MapPin className="text-neon-pink" />, label: 'Location', value: 'Bangalore, India', href: '#' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-6 group cursor-pointer"
                >
                  <div className="p-4 rounded-2xl glass border border-white/10 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-white font-medium group-hover:text-neon-blue transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[80px] -z-10" />
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="SANJEEV KUMAR"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-hidden transition-all text-white placeholder:text-gray-600 font-bold text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="SANJEEV.DEV@GMAIL.COM"
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-hidden transition-all text-white placeholder:text-gray-600 font-bold text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="DESCRIBE YOUR VISION..."
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-hidden transition-all text-white placeholder:text-gray-600 font-bold text-sm resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-colors mt-4 shadow-2xl"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
