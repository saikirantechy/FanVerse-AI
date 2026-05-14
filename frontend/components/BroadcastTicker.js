'use client';

import { motion } from 'framer-motion';

export default function BroadcastTicker() {
  const news = [
    "LIVE: Virat Kohli reaches 50 runs in just 28 balls!",
    "TRENDING: #FanVerseAI is the #1 sports app in India right now!",
    "AI INSIGHT: CSK's win probability drops by 12% after the recent wicket.",
    "FAN ALERT: 'Rohan_Fan1' just unlocked the 'Momentum Oracle' badge!",
    "TRIVIA: Can you guess who has the most centuries in IPL history?",
    "CLAN BATTLE: RCB Dominators are leading the Season XP leaderboard.",
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-xl border-t border-border z-[100] overflow-hidden h-12 flex items-center shadow-[0_-10px_30px_rgba(0,0,0,0.2)]">
      <div className="bg-accent-primary text-black px-6 h-full flex items-center font-black italic text-[10px] uppercase tracking-tighter skew-x-[-20deg] -ml-3 z-10">
        <span className="skew-x-[20deg]">LIVE FEED</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-16 items-center pl-10"
        >
          {news.map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">{item}</span>
              <span className="w-1.5 h-1.5 bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent)]" />
            </div>
          ))}
          {news.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-6">
              <span className="text-[10px] font-black text-foreground uppercase tracking-widest italic">{item}</span>
              <span className="w-1.5 h-1.5 bg-accent-primary rounded-full shadow-[0_0_8px_var(--accent)]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="bg-card px-8 h-full flex items-center gap-6 border-l border-border relative">
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-accent-primary/20 to-transparent" />
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
          <span className="text-[10px] font-black text-foreground uppercase tracking-[0.2em]">128,420 <span className="text-muted">FANS</span></span>
        </div>
      </div>
    </div>
  );
}
