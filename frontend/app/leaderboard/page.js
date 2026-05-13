'use client';

import Navbar from '../../components/Navbar';
import BroadcastTicker from '../../components/BroadcastTicker';
import { motion } from 'framer-motion';

export default function LeaderboardPage() {
  const topFans = [
    { rank: 1, name: 'Virat_King_18', xp: '142,500', clan: 'RCB Dominators', avatar: '🦁' },
    { rank: 2, name: 'MSD_Finisher', xp: '138,200', clan: 'CSK Superstars', avatar: '🚁' },
    { rank: 3, name: 'Rohit_Hitman', xp: '135,400', clan: 'MI Legends', avatar: '🏏' },
    { rank: 4, name: 'Sky_Surya', xp: '128,900', clan: 'MI Legends', avatar: '🔥' },
    { rank: 5, name: 'Jadeja_Sir', xp: '125,600', clan: 'CSK Superstars', avatar: '⚔️' },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              Global <span className="text-cyan-500">Arena</span>
            </h1>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
              The World's Elite Fan Leaderboard
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Season 1</button>
            <button className="px-6 py-2 bg-cyan-500 text-black rounded-full text-[10px] font-black uppercase tracking-widest">Global</button>
          </div>
        </header>

        {/* Podium Visualization */}
        <div className="grid grid-cols-3 gap-6 mb-16 items-end">
          {/* Rank 2 */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: 'auto' }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl mb-4">🚁</div>
            <div className="w-full bg-white/5 border border-white/5 rounded-t-3xl p-6 text-center">
              <div className="text-[10px] font-black text-gray-500 uppercase mb-2">Rank 2</div>
              <div className="text-sm font-black uppercase italic mb-1">{topFans[1].name}</div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{topFans[1].xp} XP</div>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: 'auto' }}
            className="flex flex-col items-center"
          >
            <div className="text-5xl mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">🦁</div>
            <div className="w-full bg-gradient-to-t from-cyan-900/40 to-cyan-500/20 border border-cyan-500/30 rounded-t-3xl p-8 text-center shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              <div className="text-xs font-black text-yellow-400 uppercase mb-3">🏆 Season King</div>
              <div className="text-lg font-black uppercase italic mb-1">{topFans[0].name}</div>
              <div className="text-sm font-black text-white uppercase tracking-widest">{topFans[0].xp} XP</div>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div 
            initial={{ height: 0 }} animate={{ height: 'auto' }}
            className="flex flex-col items-center"
          >
            <div className="text-3xl mb-4">🏏</div>
            <div className="w-full bg-white/5 border border-white/5 rounded-t-3xl p-6 text-center">
              <div className="text-[10px] font-black text-gray-500 uppercase mb-2">Rank 3</div>
              <div className="text-sm font-black uppercase italic mb-1">{topFans[2].name}</div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{topFans[2].xp} XP</div>
            </div>
          </motion.div>
        </div>

        {/* Full List */}
        <div className="space-y-4">
          {topFans.slice(3).map((fan, i) => (
            <motion.div 
              key={fan.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 flex items-center justify-between border-white/5 bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="text-lg font-black italic text-gray-600 w-6">#{fan.rank}</div>
                <div className="text-2xl">{fan.avatar}</div>
                <div>
                  <h4 className="text-sm font-black uppercase italic text-white leading-tight">{fan.name}</h4>
                  <p className="text-[8px] font-bold text-cyan-500 uppercase tracking-widest mt-0.5">{fan.clan}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-black text-white">{fan.xp}</div>
                <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Total Season XP</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BroadcastTicker />
    </main>
  );
}
