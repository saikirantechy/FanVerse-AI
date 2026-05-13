import { motion } from 'framer-motion';
import { Trophy, Crown, ArrowUp, ArrowDown } from 'lucide-react';

export default function MegaLeaderboard() {
  const ranks = [
    { rank: 1, name: 'CricketOracle_99', level: 42, points: 124500, team: 'RCB', trend: 'up' },
    { rank: 2, name: 'BowlMaster_PRO', level: 38, points: 112200, team: 'CSK', trend: 'down' },
    { rank: 3, name: 'Tactical_Fanatic', level: 35, points: 98900, team: 'MI', trend: 'up' },
    { rank: 4, name: 'Prediction_King', level: 32, points: 85400, team: 'GT', trend: 'same' },
    { rank: 5, name: 'Stadium_Legend', level: 30, points: 72800, team: 'KKR', trend: 'up' },
  ];

  return (
    <div className="glass-card p-12 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <div>
          <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">Global Rankings</h2>
          <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Season 1: Agentic Origins</p>
        </div>
        
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-white hover:bg-white/10 transition-all">Weekly</button>
          <button className="px-6 py-3 bg-cyan-500 text-black rounded-xl text-[10px] font-black uppercase italic tracking-widest">Season</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5">
              <th className="pb-6 text-[10px] font-black text-gray-500 uppercase tracking-widest px-4">Rank</th>
              <th className="pb-6 text-[10px] font-black text-gray-500 uppercase tracking-widest px-4">Fan Identity</th>
              <th className="pb-6 text-[10px] font-black text-gray-500 uppercase tracking-widest px-4">Level</th>
              <th className="pb-6 text-[10px] font-black text-gray-500 uppercase tracking-widest px-4">Points</th>
              <th className="pb-6 text-[10px] font-black text-gray-500 uppercase tracking-widest px-4">Trend</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {ranks.map((row, i) => (
              <motion.tr 
                key={row.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group hover:bg-white/5 transition-all"
              >
                <td className="py-6 px-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black italic ${
                    i === 0 ? 'bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]' : 
                    i === 1 ? 'bg-gray-300 text-black' : 
                    i === 2 ? 'bg-orange-600 text-black' : 'bg-white/5 text-gray-500'
                  }`}>
                    {i === 0 ? <Crown size={16} /> : row.rank}
                  </div>
                </td>
                <td className="py-6 px-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${row.name}`} alt="Avatar" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white uppercase tracking-widest">{row.name}</p>
                      <p className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest">Team {row.team}</p>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-4">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white italic">LVL {row.level}</span>
                </td>
                <td className="py-6 px-4">
                  <p className="text-sm font-black text-white italic">{row.points.toLocaleString()}</p>
                </td>
                <td className="py-6 px-4">
                  {row.trend === 'up' ? <ArrowUp size={16} className="text-green-500" /> : 
                   row.trend === 'down' ? <ArrowDown size={16} className="text-red-500" /> : 
                   <div className="w-4 h-1 bg-gray-600 rounded-full" />}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
