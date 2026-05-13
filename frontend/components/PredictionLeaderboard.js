import { motion, AnimatePresence } from 'framer-motion';

export default function PredictionLeaderboard({ isOpen, onClose }) {
  if (!isOpen) return null;

  const topPredictors = [
    { rank: 1, name: 'StatMaster_99', accuracy: '94%', points: '2,400', streak: 8 },
    { rank: 2, name: 'CricketOracle', accuracy: '91%', points: '2,150', streak: 5 },
    { rank: 3, name: 'BallByBall_AI', accuracy: '89%', points: '1,980', streak: 12 },
    { rank: 4, name: 'Rohan_Stats', accuracy: '88%', points: '1,850', streak: 3 },
    { rank: 5, name: 'Sneha_Preds', accuracy: '85%', points: '1,720', streak: 4 },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="w-full max-w-lg bg-[#0a0a0a] border border-cyan-500/20 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.15)]"
        >
          <div className="p-8 bg-gradient-to-r from-cyan-600/20 to-transparent flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">Smartest Fans</h2>
              <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-1">Live Match Prediction Rank</p>
            </div>
            <button onClick={onClose} className="text-white hover:text-white/70 transition-colors">✕</button>
          </div>

          <div className="p-8 space-y-4">
            {topPredictors.map((fan, i) => (
              <motion.div 
                key={fan.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="text-lg font-black italic text-cyan-500 w-6">#{fan.rank}</div>
                  <div>
                    <h4 className="text-sm font-black uppercase italic text-white">{fan.name}</h4>
                    <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{fan.accuracy} Accuracy • 🔥 {fan.streak} Streak</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-black text-white">{fan.points}</div>
                  <div className="text-[7px] font-black text-gray-600 uppercase tracking-widest">Prediction XP</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-8 bg-white/5 border-t border-white/5 text-center">
            <p className="text-[8px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">Your Rank: #1,248 (Top 12%)</p>
            <button className="w-full py-4 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-cyan-400 transition-colors">
              Climb the Ranks
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
