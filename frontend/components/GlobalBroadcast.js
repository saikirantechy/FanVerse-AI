import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Globe, Users } from 'lucide-react';

export default function GlobalBroadcast({ message, visible }) {
  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] w-full max-w-2xl px-6"
      >
        <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 p-[1px] rounded-[40px] shadow-[0_0_50px_rgba(6,182,212,0.5)]">
          <div className="bg-black/90 backdrop-blur-2xl px-12 py-6 rounded-[40px] flex items-center justify-between gap-8 border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(6,182,212,0.4)] animate-pulse">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-1">Global Fan Event</h4>
                <p className="text-xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {message || "Energy Milestone Reached!"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <Users size={14} className="text-gray-500" />
              <span className="text-[10px] font-black text-white italic">124K Active</span>
            </div>
          </div>
        </div>
        
        {/* Animated Lightning Effect */}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          className="absolute inset-0 bg-cyan-400/20 blur-[40px] -z-10 rounded-full"
        />
      </motion.div>
    </AnimatePresence>
  );
}
