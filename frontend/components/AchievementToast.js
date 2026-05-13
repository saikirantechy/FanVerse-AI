import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AchievementToast({ achievement }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement]);

  return (
    <AnimatePresence>
      {visible && achievement && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.9 }}
          className="fixed top-24 right-6 z-[200] w-80"
        >
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-[1px] rounded-2xl shadow-[0_0_40px_rgba(0,242,255,0.3)]">
            <div className="bg-black/90 backdrop-blur-2xl p-5 rounded-2xl flex items-center gap-4 border border-white/5">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl shadow-inner">
                {achievement.icon || '🏆'}
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-1">Achievement Unlocked</p>
                <h4 className="text-sm font-black text-white uppercase italic leading-tight">{achievement.name}</h4>
                <p className="text-[10px] text-gray-400 mt-1">{achievement.reason}</p>
              </div>
              <div className="text-xs font-black text-green-400">
                +{achievement.xp || 100} XP
              </div>
            </div>
          </div>
          
          {/* Decorative Sparkles */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-4 h-4 text-cyan-400"
          >
            ✨
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
