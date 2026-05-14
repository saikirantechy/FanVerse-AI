import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlassCard from './ui/GlassCard';

export default function CrowdPowerMeter({ energy }) {
  const intensity = energy || 65; // Default 65%
  const [barHeights, setBarHeights] = useState([]);

  useEffect(() => {
    // Generate heights only on the client
    setBarHeights([...Array(20)].map(() => 20 + Math.random() * 80));
  }, []);

  return (
    <GlassCard className="p-8 border-orange-500/20">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.3em] mb-1">Live Crowd Power</h3>
          <p className="text-sm font-black text-foreground italic uppercase tracking-tighter">Fan Influence Active</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black text-orange-400 italic">{intensity}%</div>
        </div>
      </div>

      <div className="relative h-20 flex items-end gap-1.5 px-2 bg-black/5 dark:bg-black/20 rounded-2xl py-4 border border-border">
        {barHeights.length > 0 ? barHeights.map((h, i) => {
          const isActive = (i / 20) * 100 < intensity;
          
          return (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${isActive ? h : 15}%` }}
              className={`flex-1 rounded-t-lg transition-colors duration-500 ${
                isActive ? 'bg-gradient-to-t from-orange-600 to-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'bg-muted/20'
              }`}
            />
          );
        }) : [...Array(20)].map((_, i) => (
          <div key={i} className="flex-1 h-[15%] bg-muted/20 rounded-t-lg" />
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted">
        <span>Silent Stage</span>
        <span className="text-orange-400 animate-pulse">Roaring Atmosphere</span>
      </div>
      
      <p className="text-[10px] text-muted mt-6 leading-relaxed italic text-center border-t border-border pt-4">
        "Global fan reactions are directly boosting the home team's critical momentum thresholds."
      </p>
    </GlassCard>
  );
}
