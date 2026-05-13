import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AICaptainConsensus({ insight }) {
  const [voted, setVoted] = useState(false);

  if (!insight) return null;

  return (
    <div className="glass-card p-6 border-blue-500/30 bg-blue-500/5 relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Digital Captain Consensus</h3>
        <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">LIVE VOTE</div>
      </div>

      <div className="bg-black/40 p-4 rounded-xl border border-white/5 mb-6">
        <p className="text-xs text-blue-100 italic leading-relaxed">
          "{insight}"
        </p>
      </div>

      {!voted ? (
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setVoted(true)}
            className="py-3 bg-blue-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-blue-400 transition-colors text-[10px]"
          >
            Agree with Captain
          </button>
          <button 
            onClick={() => setVoted(true)}
            className="py-3 bg-white/5 border border-white/10 text-white font-black uppercase italic tracking-widest rounded-xl hover:bg-white/10 transition-colors text-[10px]"
          >
            Disagree
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-2"
        >
          <div className="flex justify-between text-[8px] font-black uppercase text-gray-500">
            <span>Community Agreement</span>
            <span>84%</span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '84%' }}
              className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
          </div>
          <p className="text-[8px] font-bold text-blue-400 uppercase tracking-widest mt-2">Vote registered! +50 XP earned.</p>
        </motion.div>
      )}
    </div>
  );
}
