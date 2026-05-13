import { motion } from 'framer-motion';

export default function DramaMeter({ value }) {
  const drama = value || 42;

  return (
    <div className="glass-card p-6 border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Match Drama Index</h3>
          <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest mt-1">Emotional Volatility Analysis</p>
        </div>
        <div className="text-[10px] font-black text-purple-500 italic">{drama}%</div>
      </div>

      <div className="relative h-12 flex items-center justify-center gap-1">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div 
            key={i}
            animate={{ 
              height: drama > 70 ? [10, 40, 15, 35, 10] : [10, 20, 15] 
            }}
            transition={{ 
              duration: 0.5 + Math.random(), 
              repeat: Infinity,
              delay: i * 0.05
            }}
            className={`w-1 rounded-full ${drama > 70 ? 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]' : 'bg-white/10'}`}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center p-3 bg-purple-500/5 rounded-xl border border-purple-500/10">
        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">State</span>
        <span className="text-[10px] font-black text-purple-400 italic">
          {drama > 70 ? 'PEAK INTENSITY' : 'STEADY FLOW'}
        </span>
      </div>
    </div>
  );
}
