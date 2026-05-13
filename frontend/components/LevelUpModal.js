import { motion, AnimatePresence } from 'framer-motion';

export default function LevelUpModal({ isOpen, onClose, level }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[700] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
          className="w-full max-w-lg text-center"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[120px] mb-8 drop-shadow-[0_0_50px_rgba(6,182,212,0.5)]"
          >
            ⭐
          </motion.div>

          <h2 className="text-6xl font-black italic uppercase tracking-tighter text-white mb-4">
            LEVEL <span className="text-cyan-500">UP!</span>
          </h2>
          <p className="text-xl font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">
            YOU ARE NOW LEVEL {level || 15}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Reward Unlocked</p>
              <p className="text-lg font-black text-cyan-400 uppercase italic">Neon Pulse Theme</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Bonus Earned</p>
              <p className="text-lg font-black text-yellow-500 uppercase italic">+500 Fan Coins</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-6 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)]"
          >
            CONTINUE JOURNEY
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
