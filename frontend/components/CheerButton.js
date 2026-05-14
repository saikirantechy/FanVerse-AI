import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { AIMemoryManager } from '../utils/AIMemoryManager';

export default function CheerButton({ onCheer }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Randomly show the cheer button every 15-30 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setShow(true);
        setTimeout(() => setShow(false), 8000); // Hide after 8s
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (onCheer) onCheer();
    AIMemoryManager.saveReaction('Cheer', { energy: 15, context: 'User tapped the cheer button' });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[250]">
      <motion.button 
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: 50 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black uppercase italic tracking-[0.2em] rounded-full shadow-[0_0_50px_rgba(249,115,22,0.6)] border-2 border-white/20 flex items-center gap-5 group"
      >
        <span className="text-3xl group-hover:animate-bounce">📣</span>
        <div className="flex flex-col items-start">
          <span className="text-xs">MOMENTUM BOOST!</span>
          <span className="text-[10px] opacity-70">Tap to Cheer!</span>
        </div>
        <span className="bg-black text-orange-500 px-3 py-1 rounded-lg text-[10px] font-black border border-orange-500/30">+15 ENERGY</span>
      </motion.button>
    </div>
  );
}

