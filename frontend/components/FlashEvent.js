import { motion, AnimatePresence } from 'framer-motion';

export default function FlashEvent({ event }) {
  if (!event) return null;

  const config = {
    six: { label: 'MAXIMUM SIX', color: 'from-cyan-500', icon: '🚀' },
    boundary: { label: 'FOUR RUNS', color: 'from-green-500', icon: '🔥' },
    wicket: { label: 'OUT!', color: 'from-red-500', icon: '☝️' },
  };

  const current = config[event.type] || { label: 'MATCH MOMENT', color: 'from-purple-500', icon: '⭐' };

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center pointer-events-none p-12">
      <motion.div 
        initial={{ scale: 0, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 2, opacity: 0 }}
        className={`w-full max-w-4xl bg-gradient-to-r ${current.color} to-transparent p-[2px] rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.1)]`}
      >
        <div className="bg-black/90 backdrop-blur-xl p-16 rounded-[40px] flex items-center justify-between">
          <div>
            <motion.h2 
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className="text-8xl font-black italic uppercase tracking-tighter text-white mb-2"
            >
              {current.label}
            </motion.h2>
            <p className="text-xl font-bold text-white/50 uppercase tracking-[0.5em]">{event.text}</p>
          </div>
          <div className="text-[120px] drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            {current.icon}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
