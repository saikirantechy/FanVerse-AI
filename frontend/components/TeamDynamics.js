import { motion } from 'framer-motion';

export default function TeamDynamics() {
  const metrics = [
    { label: 'Synergy', value: 85 },
    { label: 'Morale', value: 92 },
    { label: 'Tactical', value: 78 },
    { label: 'Aggression', value: 88 },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">AI Team Dynamics</h3>
        <span className="text-[8px] font-black text-green-400 uppercase tracking-widest">Optimized</span>
      </div>

      <div className="relative h-40 flex items-center justify-center">
        {/* Abstract Radar Web */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border border-white/5 rounded-full" />
          <div className="absolute w-24 h-24 border border-white/5 rounded-full" />
          <div className="absolute w-16 h-16 border border-white/5 rounded-full" />
        </div>

        {/* Dynamic Shape */}
        <motion.svg viewBox="0 0 100 100" className="w-32 h-32 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <motion.polygon 
            points="50,10 90,50 50,90 10,50"
            fill="rgba(34, 197, 94, 0.2)"
            stroke="#22c55e"
            strokeWidth="1"
            animate={{ 
              points: [
                "50,10 90,50 50,90 10,50",
                "50,5 95,50 50,95 5,50",
                "50,10 90,50 50,90 10,50"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex justify-between items-center p-2 bg-black/40 rounded-lg border border-white/5">
            <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{m.label}</span>
            <span className="text-[10px] font-black text-white italic">{m.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
