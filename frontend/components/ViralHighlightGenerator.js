import { motion } from 'framer-motion';

export default function ViralHighlightGenerator({ matchData, storyline }) {
  const viralStats = [
    { label: 'Reactions', value: '12.4K', icon: '🔥' },
    { label: 'Shares', value: '2.8K', icon: '🚀' },
    { label: 'Reach', value: '1.2M', icon: '🌍' },
  ];

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent relative overflow-hidden">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">Viral Moment Generator</h3>
          <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-1">AI-Powered Social Engine</p>
        </div>
        <div className="bg-black/50 px-3 py-1.5 rounded-full border border-cyan-500/30 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[8px] font-black text-white uppercase tracking-widest">Trending Now</span>
        </div>
      </div>

      <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-lg">🤖</div>
          <div>
            <h4 className="text-xs font-black uppercase text-white">FanVerse AI Bot</h4>
            <p className="text-[8px] font-bold text-gray-500 uppercase">@FanVerseAI • 2m ago</p>
          </div>
        </div>
        <p className="text-sm font-medium text-gray-200 leading-relaxed italic mb-6">
          "Unbelievable! Kohli's straight drive just hit the camera! The momentum has shifted completely. #IPL2026 #FanVerseAI"
        </p>
        
        <div className="flex justify-between border-t border-white/5 pt-4">
          {viralStats.map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-sm mb-1">{stat.icon}</div>
              <div className="text-[10px] font-black text-white italic">{stat.value}</div>
              <div className="text-[7px] font-bold text-gray-600 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="py-4 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-cyan-400 transition-colors text-xs">
          Generate Poster
        </button>
        <button className="py-4 bg-white/5 border border-white/10 text-white font-black uppercase italic tracking-widest rounded-xl hover:bg-white/10 transition-colors text-xs">
          Share Highlight
        </button>
      </div>
    </div>
  );
}
