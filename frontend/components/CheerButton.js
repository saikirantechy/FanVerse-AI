import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CheerButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Randomly show the cheer button every 15-30 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        setShow(true);
        setTimeout(() => setShow(false), 5000); // Hide after 5s
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-32 left-1/2 -translate-x-1/2 z-[250]">
      <motion.button 
        initial={{ scale: 0, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: 50 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShow(false)}
        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-black uppercase italic tracking-[0.2em] rounded-full shadow-[0_0_50px_rgba(249,115,22,0.4)] border-2 border-white/20 flex items-center gap-4 group"
      >
        <span className="text-2xl group-hover:animate-bounce">📣</span>
        <span>Tap to Cheer!</span>
        <span className="bg-black/20 px-2 py-1 rounded text-[10px]">+50 XP</span>
      </motion.button>
    </div>
  );
}
