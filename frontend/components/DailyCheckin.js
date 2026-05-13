import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gift, Calendar, CheckCircle, Star } from 'lucide-react';

export default function DailyCheckin() {
  const [claimed, setClaimed] = useState(false);
  const days = [
    { day: 1, reward: 100, type: 'XP', status: 'claimed' },
    { day: 2, reward: 200, type: 'XP', status: 'claimed' },
    { day: 3, reward: 50, type: 'Coins', status: 'current' },
    { day: 4, reward: 300, type: 'XP', status: 'upcoming' },
    { day: 5, reward: 500, type: 'XP', status: 'upcoming' },
    { day: 6, reward: 100, type: 'Coins', status: 'upcoming' },
    { day: 7, reward: 'Mystery', type: 'Badge', status: 'upcoming' },
  ];

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-cyan-500/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">Daily Rewards</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Consistency Bonus</p>
        </div>
        <Gift size={20} className="text-cyan-400 animate-bounce" />
      </div>

      <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mb-8">
        {days.map((d) => (
          <div 
            key={d.day}
            className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all ${
              d.status === 'claimed' ? 'bg-green-500/10 border-green-500/20 opacity-50' :
              d.status === 'current' ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)] scale-105' :
              'bg-white/5 border-white/5'
            }`}
          >
            <span className="text-[8px] font-black text-gray-500 uppercase">Day {d.day}</span>
            <div className={`text-xs font-black ${d.status === 'claimed' ? 'text-green-500' : 'text-white'}`}>
              {d.status === 'claimed' ? <CheckCircle size={14} /> : d.reward}
            </div>
            <span className="text-[6px] font-bold text-gray-600 uppercase">{d.type}</span>
          </div>
        ))}
      </div>

      <button 
        disabled={claimed}
        onClick={() => setClaimed(true)}
        className={`w-full py-4 rounded-xl text-[10px] font-black uppercase italic tracking-widest transition-all ${
          claimed ? 'bg-green-500/20 text-green-500 border border-green-500/20 cursor-default' : 'bg-cyan-500 text-black hover:bg-cyan-400'
        }`}
      >
        {claimed ? 'REWARD CLAIMED' : 'CLAIM DAY 3 REWARD'}
      </button>

      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
        <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Streak: 3 Days Active</p>
      </div>
    </div>
  );
}
