'use client';

import { motion } from 'framer-motion';

export default function LiveScoreCard({ matchData }) {
  const { team1, team2, score, overs, target, status } = matchData || {
    team1: { name: 'RCB', score: '185/4' },
    team2: { name: 'CSK', score: '142/3' },
    overs: '15.4',
    target: '186',
    status: 'CSK need 44 runs in 26 balls'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-3">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div className="text-center flex-1">
          <h2 className="text-3xl font-black italic tracking-tighter mb-2">{team1.name}</h2>
          <p className="text-4xl font-bold text-cyan-400 neon-text">{team1.score}</p>
        </div>
        
        <div className="px-4 text-gray-500 font-bold text-xl">VS</div>

        <div className="text-center flex-1">
          <h2 className="text-3xl font-black italic tracking-tighter mb-2">{team2.name}</h2>
          <p className="text-4xl font-bold text-purple-400">{team2.score}</p>
        </div>
      </div>

      <div className="flex justify-between items-end border-t border-white/10 pt-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Overs</p>
          <p className="text-xl font-mono font-bold">{overs}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-cyan-400/80 mb-1">{status}</p>
          <div className="h-1.5 w-48 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
