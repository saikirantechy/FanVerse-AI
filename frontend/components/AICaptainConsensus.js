'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from './ui/GlassCard';

export default function AICaptainConsensus({ insight }) {
  const [voted, setVoted] = useState(false);

  if (!insight) return null;

  return (
    <GlassCard className="p-8 border-accent-primary/20">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-accent-primary uppercase tracking-[0.3em]">Digital Captain Consensus</h3>
        <div className="px-3 py-1 bg-accent-primary/10 rounded-full border border-accent-primary/20 text-[8px] font-black text-accent-primary uppercase tracking-widest animate-pulse">
          LIVE VOTE
        </div>
      </div>

      <div className="bg-black/20 dark:bg-black/40 p-5 rounded-2xl border border-border mb-8 relative group overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent-primary" />
        <p className="text-sm text-foreground italic leading-relaxed pl-2">
          "{insight}"
        </p>
      </div>

      {!voted ? (
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setVoted(true)}
            className="py-4 bg-accent-primary text-black font-black uppercase italic tracking-widest rounded-2xl hover:bg-accent-primary/90 transition-all text-[10px] shadow-lg active:scale-95"
          >
            Agree with Captain
          </button>
          <button 
            onClick={() => setVoted(true)}
            className="py-4 bg-card border border-border text-foreground font-black uppercase italic tracking-widest rounded-2xl hover:bg-white/5 transition-all text-[10px] active:scale-95"
          >
            Disagree
          </button>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-1">Global Sentiment</p>
              <p className="text-2xl font-black text-accent-primary italic">84% AGREEMENT</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-black text-gray-500 uppercase">Confidence Score</p>
              <p className="text-xs font-black text-foreground">HIGH</p>
            </div>
          </div>
          <div className="h-2 w-full bg-white/5 dark:bg-black/20 rounded-full overflow-hidden border border-border">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '84%' }}
              className="h-full bg-accent-primary shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-accent-primary/10 rounded-xl border border-accent-primary/20">
            <span className="w-1.5 h-1.5 bg-accent-primary rounded-full animate-ping" />
            <p className="text-[10px] font-black text-accent-primary uppercase tracking-widest">Vote registered! +50 XP earned.</p>
          </div>
        </motion.div>
      )}
    </GlassCard>
  );
}
