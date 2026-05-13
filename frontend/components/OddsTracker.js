import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function OddsTracker({ momentum }) {
  const [odds, setOdds] = useState({ rcb: '1.85', csk: '2.10' });

  useEffect(() => {
    // Simulate odds fluctuations based on momentum
    const baseRcb = 1.85 - (momentum / 100);
    const baseCsk = 2.10 + (momentum / 100);
    
    setOdds({
      rcb: baseRcb.toFixed(2),
      csk: baseCsk.toFixed(2)
    });
  }, [momentum]);

  return (
    <div className="glass-card p-5 border-yellow-500/10 bg-yellow-500/5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.2em]">Live Prediction Odds</h3>
        <div className="bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20 text-[8px] font-black text-yellow-500 animate-pulse">LIVE</div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">RCB</p>
          <motion.p 
            key={odds.rcb}
            initial={{ scale: 1.2, color: '#eab308' }}
            animate={{ scale: 1, color: '#fff' }}
            className="text-lg font-black italic"
          >
            {odds.rcb}
          </motion.p>
        </div>
        <div className="text-center p-3 bg-black/40 rounded-xl border border-white/5">
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">CSK</p>
          <motion.p 
            key={odds.csk}
            initial={{ scale: 1.2, color: '#eab308' }}
            animate={{ scale: 1, color: '#fff' }}
            className="text-lg font-black italic"
          >
            {odds.csk}
          </motion.p>
        </div>
      </div>

      <p className="text-[7px] font-bold text-gray-600 uppercase tracking-widest mt-4 text-center">
        Market sentiment favors RCB after recent boundaries.
      </p>
    </div>
  );
}
