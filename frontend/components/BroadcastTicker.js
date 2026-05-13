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
    <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-cyan-500/30 z-50 overflow-hidden h-10 flex items-center">
      <div className="bg-cyan-500 text-black px-4 h-full flex items-center font-black italic text-xs uppercase tracking-tighter skew-x-[-20deg] -ml-2 z-10">
        <span className="skew-x-[20deg]">LIVE TICKER</span>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12 items-center pl-8"
        >
          {news.map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item}</span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {news.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item}</span>
              <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="bg-black px-6 h-full flex items-center gap-4 border-l border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-white uppercase tracking-widest">128K WATCHING</span>
        </div>
      </div>
    </div>
  );
}
