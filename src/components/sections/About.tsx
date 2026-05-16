import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Years Experience', value: 4, suffix: '+' },
  { label: 'Projects Delivered', value: 20, suffix: '+' },
  { label: 'Full Stack Engineer', value: 100, suffix: '%' },
  { label: 'Cloud Solutions', value: 10, suffix: '+' },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                About <span className="text-gradient">The Engineer</span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Full Stack Developer with 4+ years of experience building scalable web and mobile applications 
                using React, React Native, Next.js, Node.js, and NestJS.
              </p>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Experienced in designing microservice architectures, REST APIs, authentication systems, 
                real-time applications, and database-driven enterprise platforms using PostgreSQL and MongoDB. 
                Passionate about clean architecture, reusable systems, and modern UI/UX.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-center text-center backdrop-blur-md"
                  >
                    <div className="text-4xl font-black text-white mb-1">
                      {inView ? (
                        <Counter target={stat.value} duration={2} suffix={stat.suffix} />
                      ) : (
                        '0'
                      )}
                    </div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[450px] mx-auto"
            >
              <div className="absolute inset-0 bg-gradient rounded-3xl opacity-20 blur-2xl" />
              <div className="relative h-full w-full rounded-3xl glass border border-white/20 p-4">
                <div className="h-full w-full rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center border border-white/10">
                  <pre className="text-xs md:text-sm font-mono text-neon-blue p-6 leading-relaxed opacity-60">
{`const engineer = {
  name: 'Sanjeev Kumar K',
  role: 'Full Stack Architect',
  stacks: ['NestJS', 'PostgreSQL', 'React'],
  architecture: 'Microservices',
  focus: ['Performance', 'Security'],
  motto: 'Scalability-First'
};

function deploy() {
  const system = build(engineer);
  return system.scale();
}`}
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Counter({ target, duration, suffix }: { target: number; duration: number; suffix: string }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = target;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}{suffix}</>;
}
