import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function EmojiRain({ trigger }) {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    if (trigger) {
      const icons = ['🔥', '🚀', '❤️', '👏', '💥', '🏏'];
      const newEmojis = Array.from({ length: 15 }).map((_, i) => ({
        id: Date.now() + i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        x: Math.random() * 80 + 10,
        y: -20,
        duration: 1.5 + Math.random(),
      }));
      setEmojis(newEmojis);
      
      const timer = setTimeout(() => setEmojis([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <AnimatePresence>
        {emojis.map((e) => (
          <motion.div 
            key={e.id}
            initial={{ y: '-20%', x: `${e.x}%`, opacity: 0, scale: 0.5 }}
            animate={{ y: '120%', opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: e.duration, ease: "linear" }}
            className="absolute text-xl"
          >
            {e.icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
