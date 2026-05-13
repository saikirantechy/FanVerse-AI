'use client';

import { motion } from 'framer-motion';

export default function MomentumMeter({ value }) {
  // value from -100 (Team 2) to 100 (Team 1)
  const momentumValue = value || 35; 

  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold uppercase tracking-wider text-sm">Momentum Meter</h3>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-cyan-400 font-bold uppercase">Aggressive AI Analysis</span>
        </div>
      </div>

      <div className="relative h-12 bg-white/5 rounded-xl overflow-hidden border border-white/10 flex items-center">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 z-10" />
        
        {/* Momentum Bar */}
        <motion.div 
          initial={{ width: '50%' }}
          animate={{ 
            width: `${Math.abs(momentumValue)}%`,
            left: momentumValue > 0 ? '50%' : `${50 - Math.abs(momentumValue)}%`,
            backgroundColor: momentumValue > 0 ? 'rgba(0, 242, 255, 0.4)' : 'rgba(112, 0, 255, 0.4)'
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="absolute top-1 bottom-1 rounded-sm"
        />

        {/* Labels */}
        <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none uppercase font-black italic tracking-tighter text-lg">
          <span className={momentumValue < 0 ? 'text-white' : 'text-white/20'}>CSK</span>
          <span className={momentumValue > 0 ? 'text-white' : 'text-white/20'}>RCB</span>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between text-[10px] uppercase font-bold tracking-widest text-gray-500">
        <span>Defensive</span>
        <span>Neutral</span>
        <span>Attacking</span>
      </div>
    </div>
  );
}
