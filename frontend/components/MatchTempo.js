import { motion } from 'framer-motion';

export default function MatchTempo({ overs }) {
  // Generate random tempo points for the wave
  const points = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    height: Math.random() * 40 + 10,
    active: i < (overs % 10)
  }));

  return (
    <div className="glass-card p-6 border-cyan-500/10 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Match Tempo Tracker</h3>
        <div className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Steady Build-up</div>
      </div>

      <div className="flex items-end justify-between h-16 gap-1">
        {points.map((p) => (
          <motion.div 
            key={p.id}
            initial={{ height: 4 }}
            animate={{ 
              height: p.height,
              backgroundColor: p.active ? '#06b6d4' : 'rgba(255,255,255,0.05)'
            }}
            className="flex-1 rounded-t-sm"
          />
        ))}
      </div>

      <div className="mt-4 flex justify-between text-[7px] font-black text-gray-600 uppercase tracking-widest">
        <span>Slow</span>
        <span>Explosive</span>
      </div>
    </div>
  );
}
