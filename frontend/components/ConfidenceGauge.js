import { motion } from 'framer-motion';

export default function ConfidenceGauge({ confidence }) {
  const value = confidence || 78;

  return (
    <div className="glass-card p-6 border-cyan-500/10 bg-white/5 overflow-hidden relative">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">AI Confidence Gauge</h3>
        <div className="text-[10px] font-black text-cyan-400 italic">{value}%</div>
      </div>

      <div className="relative h-24 flex items-end justify-center">
        {/* Semi-circle Gauge Mock */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-[8px] border-white/5 rounded-full border-t-cyan-500/20" />
        </div>
        
        <motion.div 
          initial={{ rotate: -90 }}
          animate={{ rotate: (value / 100) * 180 - 90 }}
          className="absolute bottom-0 w-1 h-16 bg-cyan-500 origin-bottom rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"
        />
        
        <div className="absolute bottom-[-10px] flex justify-between w-40 text-[6px] font-black text-gray-600 uppercase tracking-widest">
          <span>Low</span>
          <span>Extreme</span>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-white/5">
        <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest text-center">
          Confidence is <span className="text-white italic">High</span> due to consistent middle-over performance.
        </p>
      </div>
    </div>
  );
}
