import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function InsightPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Randomly show an insight every 40-60 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        setShow(true);
        setTimeout(() => setShow(false), 8000); // Hide after 8s
      }
    }, 45000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-32 left-8 z-[250] max-w-xs">
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className="glass-card p-6 border-cyan-500/20 bg-cyan-500/10 shadow-[0_0_50px_rgba(6,182,212,0.2)]"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black text-xs font-black">
            AI
          </div>
          <div>
            <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Strategic Insight</h4>
            <p className="text-[8px] font-bold text-gray-500 uppercase">InsightAgent • Just Now</p>
          </div>
        </div>
        
        <p className="text-xs text-white leading-relaxed italic">
          "Our models suggest a 78% probability of a bouncer attack in the next 3 balls. The batter's pull shot efficiency is currently 12% below average."
        </p>

        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Tactical Edge</span>
          <button onClick={() => setShow(false)} className="text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">Dismiss</button>
        </div>
      </motion.div>
    </div>
  );
}
