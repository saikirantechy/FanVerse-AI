import { motion } from 'framer-motion';
import { Gift, Calendar as CalIcon, Star, CheckCircle } from 'lucide-react';

export default function RewardCalendar() {
  const weeks = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ];

  const currentDay = 12;
  const claimedDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="glass-card p-8 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Fan Consistency Calendar</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">May 2024</p>
        </div>
        <CalIcon size={20} className="text-gray-500" />
      </div>

      <div className="space-y-3">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-3">
            {week.map((day) => {
              const isClaimed = claimedDays.includes(day);
              const isToday = day === currentDay;
              
              return (
                <div 
                  key={day}
                  className={`aspect-square rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                    isClaimed ? 'bg-green-500/10 border-green-500/20' :
                    isToday ? 'bg-cyan-500/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]' :
                    'bg-white/5 border-white/5 opacity-40'
                  }`}
                >
                  <span className="text-[8px] font-black text-gray-600">{day}</span>
                  {isClaimed ? (
                    <CheckCircle size={10} className="text-green-500" />
                  ) : day % 7 === 0 ? (
                    <Gift size={10} className="text-purple-500" />
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <Star size={16} />
          </div>
          <div>
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Attendance</p>
            <p className="text-xs font-black text-white italic">11 / 28 Days</p>
          </div>
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
            <Gift size={16} />
          </div>
          <div>
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Next Major</p>
            <p className="text-xs font-black text-white italic">Day 14</p>
          </div>
        </div>
      </div>
    </div>
  );
}
