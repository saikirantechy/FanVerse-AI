import { motion } from 'framer-motion';
import { Trophy, Shield, Star } from 'lucide-react';

export default function ReputationLeaderboard() {
  const fans = [
    { rank: 1, name: 'CricketOracle', score: 24500, status: 'Elite', color: 'text-yellow-500' },
    { rank: 2, name: 'BowlMaster_99', score: 21200, status: 'Legend', color: 'text-purple-500' },
    { rank: 3, name: 'Tactical_Fan', score: 18900, status: 'Veteran', color: 'text-cyan-500' },
    { rank: 4, name: 'PredictorPro', score: 15400, status: 'Pro', color: 'text-blue-500' },
    { rank: 5, name: 'StadiumKing', score: 12800, status: 'Pro', color: 'text-blue-500' },
  ];

  return (
    <div className="glass-card p-8 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Global Fan Reputation</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Elite Rankings</p>
        </div>
        <Trophy size={20} className="text-yellow-500" />
      </div>

      <div className="space-y-4">
        {fans.map((fan, i) => (
          <motion.div 
            key={fan.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group cursor-pointer"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black italic text-sm ${i < 3 ? 'bg-cyan-500 text-black' : 'bg-white/10 text-gray-400'}`}>
              #{fan.rank}
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-black text-white uppercase tracking-widest">{fan.name}</h4>
              <p className={`text-[8px] font-black uppercase tracking-[0.2em] ${fan.color}`}>{fan.status}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-white italic">{fan.score.toLocaleString()}</p>
              <p className="text-[7px] font-bold text-gray-600 uppercase tracking-widest">RP Score</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <button className="w-full py-3 text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">
          View Full Leaderboard
        </button>
      </div>
    </div>
  );
}
