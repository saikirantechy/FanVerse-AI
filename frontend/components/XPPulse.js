import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function XPPulse({ xp }) {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    if (xp > 0) {
      const id = Date.now();
      setPulses(prev => [...prev, { id, amount: xp }]);
      setTimeout(() => {
        setPulses(prev => prev.filter(p => p.id !== id));
      }, 2000);
    }
  }, [xp]);

  return (
    <div className="fixed top-1/4 right-1/4 pointer-events-none z-[400]">
      <AnimatePresence>
        {pulses.map(pulse => (
          <motion.div 
            key={pulse.id}
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: 1, y: -100, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="flex items-center gap-2 bg-cyan-500 text-black font-black italic px-4 py-2 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            <span className="text-lg">+{pulse.amount}</span>
            <span className="text-[10px] uppercase">XP</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
