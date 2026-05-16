import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const BOOT_LINES = [
  'Initializing portfolio...',
  'Loading system architecture...',
  'Mounting microservices...',
  'Verifying PostgreSQL cluster...',
  'Synchronizing MongoDB...',
  'Establishing Socket.IO connection...',
  'ACCESS GRANTED.',
];

export default function TerminalIntro({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let isMounted = true;
    let timer: NodeJS.Timeout;

    const typeLine = () => {
      if (!isMounted) return;

      if (currentLine < BOOT_LINES.length) {
        const line = BOOT_LINES[currentLine];
        
        if (currentChar < line.length) {
          const nextChar = line[currentChar];
          if (nextChar !== undefined) {
            setText((prev) => prev + nextChar);
          }
          currentChar++;
          timer = setTimeout(typeLine, 20);
        } else {
          setText((prev) => prev + '\n');
          currentLine++;
          currentChar = 0;
          timer = setTimeout(typeLine, 200);
        }
      } else {
        timer = setTimeout(() => {
          if (isMounted) setIsFinished(true);
          setTimeout(() => {
            if (isMounted) onComplete();
          }, 700);
        }, 500);
      }
    };

    timer = setTimeout(typeLine, 500);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []); // Only run once

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 font-mono"
        >
          <div className="max-w-2xl w-full">
            <div className="flex items-center justify-between gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <span className="text-[10px] text-gray-500 ml-4 uppercase tracking-widest hidden sm:inline">System Boot Sequence</span>
              </div>
              <button 
                onClick={() => {
                  setIsFinished(true);
                  setTimeout(onComplete, 300);
                }}
                className="text-[10px] text-gray-500 hover:text-white uppercase tracking-[0.2em] transition-colors"
              >
                [ SKIP_INTRO ]
              </button>
            </div>
            <pre className="text-blue-400 text-sm md:text-base whitespace-pre-wrap leading-relaxed">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-blue-500 ml-1 translate-y-0.5"
              />
            </pre>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
