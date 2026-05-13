'use client';

import { motion } from 'framer-motion';

export default function ProfileCard() {
  const stats = [
    { label: 'XP', value: '12,450' },
    { label: 'Coins', value: '2,840', color: 'text-yellow-500' },
    { label: 'Streak', value: '5 Days' },
  ];

  const badges = [
    { icon: '🎯', name: 'Oracle', color: 'text-cyan-400' },
    { icon: '🔥', name: 'Viral', color: 'text-orange-500' },
    { icon: '👑', name: 'Legend', color: 'text-yellow-400' },
    { icon: '🚀', name: 'Momentum', color: 'text-purple-400' },
  ];

  return (
    <div className="glass-card p-6 border-cyan-500/10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-500 p-0.5 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
          <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center text-2xl font-black italic border border-white/10">
            SK
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black italic tracking-tighter uppercase leading-none mb-1">Legendary Captain</h3>
          <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            Level 12 Fan Analyst
          </p>
        </div>
      </div>

      {/* Fan Rank Progression */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-500">
          <span>Season Progress</span>
          <span>12,480 / 15,000 XP</span>
        </div>
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '83%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_rgba(0,242,255,0.3)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 border border-white/5 p-2 rounded-xl text-center">
            <p className="text-[8px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5">{stat.label}</p>
            <p className={`text-xs font-black italic ${stat.color || 'text-gray-200'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[8px] font-black uppercase tracking-[0.2em] text-gray-600 mb-3">Top Badges</p>
        <div className="flex gap-2">
          {badges.map((badge) => (
            <motion.div 
              key={badge.name}
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex flex-col items-center justify-center cursor-help shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-shadow ${badge.color}`}
              title={badge.name}
            >
              <span className="text-sm">{badge.icon}</span>
              <span className="text-[6px] font-black uppercase text-gray-500 mt-0.5">{badge.name}</span>
            </motion.div>
          ))}
          <div className="w-10 h-10 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-xs text-gray-600">
            +12
          </div>
        </div>
      </div>
    </div>
  );
}
