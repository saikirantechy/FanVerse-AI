import { motion } from 'framer-motion';

export default function ShareCardGenerator({ matchData, storyline }) {
  const handleShare = () => {
    const text = `Watching FanVerse AI! ${matchData.team1.name} vs ${matchData.team2.name}. ${storyline} #FanVerseAI #AgenticAPL`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Share Match Vibe</h3>
      
      <div className="relative group cursor-pointer overflow-hidden rounded-xl mb-4" onClick={handleShare}>
        <div className="aspect-[1.91/1] bg-gradient-to-br from-cyan-600 to-purple-600 p-6 flex flex-col justify-between transition-transform group-hover:scale-105">
          <div className="flex justify-between items-start">
            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold">LIVE UPDATE</div>
            <div className="text-xl italic font-black">FanVerse AI</div>
          </div>
          
          <div>
            <div className="text-2xl font-black uppercase italic tracking-tighter mb-1">
              {matchData.team1.name} <span className="text-white/50">VS</span> {matchData.team2.name}
            </div>
            <p className="text-xs text-white/80 line-clamp-2">"{storyline}"</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm">GENERATE POSTER</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold uppercase hover:bg-white/10 transition-colors">
          Download PNG
        </button>
        <button 
          onClick={handleShare}
          className="py-2 bg-[#1DA1F2]/20 border border-[#1DA1F2]/30 rounded-lg text-[10px] font-bold uppercase text-[#1DA1F2] hover:bg-[#1DA1F2]/30 transition-colors"
        >
          Share to X
        </button>
      </div>
    </div>
  );
}
