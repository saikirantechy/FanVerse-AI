import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import AIChatPanel from './AIChatPanel';

export default function ChatFAB({ matchContext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-16 right-6 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-16 right-0 w-[400px] shadow-[0_0_50px_rgba(6,182,212,0.2)]"
          >
            <AIChatPanel matchContext={matchContext} isFABMode onClose={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyan-500 rounded-full flex items-center justify-center text-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)] border border-white/20"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>
    </div>
  );
}
