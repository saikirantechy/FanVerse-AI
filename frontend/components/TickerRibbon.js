'use client';

import { motion } from 'framer-motion';

export default function TickerRibbon() {
  const items = [
    "VIRAT KOHLI REACHES 50* (32) 🔥",
    "MOMENTUM SHIFT: RCB NOW 72% FAVORITES 📈",
    "CSK NEED 36 RUNS IN 18 BALLS 🏏",
    "AI PREDICTION: PROBABILITY OF BOUNDARY IN NEXT OVER IS 45% 🧠",
    "12,482 FANS CURRENTLY ENGAGED IN FANVERSE AI 🌐",
    "SIRAJ TO DHONI: THE ULTIMATE BATTLE CONTINUES... ⚔️",
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-cyan-600 text-black h-8 flex items-center overflow-hidden border-t border-cyan-400 shadow-[0_-4px_20px_rgba(0,242,255,0.2)]">
      <div className="bg-black text-cyan-400 px-4 h-full flex items-center font-black italic text-xs tracking-tighter border-r border-cyan-400/50 z-10">
        LIVE TICKER
      </div>
      
      <motion.div 
        animate={{ x: [0, -2000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="whitespace-nowrap flex gap-12 items-center"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
