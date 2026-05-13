import { motion } from 'framer-motion';

export default function FanDNAProfile({ dna }) {
  if (!dna) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-6 border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
      </div>

      <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-500 rounded-full" />
        AI Fan DNA Analysis
      </p>

      <h3 className="text-xl font-black italic uppercase text-white mb-2 tracking-tighter">
        {dna.profile || 'Analyzing Behavior...'}
      </h3>

      <div className="flex flex-wrap gap-2 mb-6">
        {dna.traits?.map(trait => (
          <span key={trait} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[8px] font-bold text-gray-300 uppercase tracking-widest">
            {trait}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <div className="bg-black/40 p-4 rounded-xl border border-white/5">
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">AI Recommendation</p>
          <p className="text-xs text-cyan-200 leading-relaxed font-medium">
            "{dna.recommendation}"
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Adaptive Intensity</div>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className={`w-3 h-1 rounded-full ${i <= 4 ? 'bg-cyan-500' : 'bg-white/10'}`} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
