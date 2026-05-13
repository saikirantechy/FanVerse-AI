'use client';

import { motion } from 'framer-motion';

export default function Leaderboard() {
  const players = [
    { rank: 1, name: 'CricketFan99', points: 1250, change: 'up' },
    { rank: 2, name: 'ViratStark', points: 1180, change: 'down' },
    { rank: 3, name: 'MSD_Finisher', points: 1145, change: 'none' },
    { rank: 4, name: 'AgentP', points: 980, change: 'up' },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="font-bold uppercase tracking-wider text-sm mb-6 flex justify-between items-center">
        Fan Leaderboard
        <span className="text-[10px] text-gray-500">Live Updates</span>
      </h3>

      <div className="space-y-4">
        {players.map((player) => (
          <div key={player.rank} className="flex items-center gap-4 group">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
              player.rank === 1 ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/30' : 
              'bg-white/5 text-gray-400 border border-white/10'
            }`}>
              {player.rank}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold group-hover:text-cyan-400 transition-colors">{player.name}</p>
              <div className="flex items-center gap-2">
                <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white/20 w-[60%]" />
                </div>
                <span className="text-[10px] text-gray-500 font-mono">{player.points} PTS</span>
              </div>
            </div>
            {player.change === 'up' && <span className="text-green-500 text-xs">▲</span>}
            {player.change === 'down' && <span className="text-red-500 text-xs">▼</span>}
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-2 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest text-gray-400 hover:bg-white/5 transition-all">
        View Global Rankings
      </button>
    </div>
  );
}
