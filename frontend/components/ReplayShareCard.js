import { motion } from 'framer-motion';
import { Share2, Download, Instagram, Twitter } from 'lucide-react';

export default function ReplayShareCard({ matchData }) {
  const data = matchData || {
    teams: 'RCB vs CSK',
    result: 'RCB won by 27 runs',
    topPerformer: 'Virat Kohli (92)',
    aiInsight: 'Momentum shift at 17.4 overs defined the victory.',
    date: 'May 12, 2024'
  };

  return (
    <div className="glass-card p-8 border-white/10 bg-white/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Replay Story Export</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Match Legacy Card</p>
        </div>
        <Share2 size={20} className="text-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card Preview */}
        <div className="aspect-[9/16] bg-gradient-to-br from-purple-600 via-blue-700 to-black rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl group border border-white/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cyber-glow.png')] opacity-20" />
          
          <div className="relative">
            <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-4">Match Recap</p>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white leading-tight mb-2">
              {data.teams}
            </h2>
            <p className="text-sm font-black text-cyan-400 italic uppercase">{data.result}</p>
          </div>

          <div className="relative p-6 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
            <p className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-2">AI Hindsight</p>
            <p className="text-xs text-white/90 leading-relaxed font-medium italic">"{data.aiInsight}"</p>
          </div>

          <div className="relative flex justify-between items-end">
            <div>
              <p className="text-[8px] font-black text-white/50 uppercase tracking-widest mb-1">{data.date}</p>
              <p className="text-xs font-black text-white uppercase tracking-tighter">FanVerse AI</p>
            </div>
            <div className="w-12 h-12 bg-white p-1 rounded-lg">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fanverse.ai" alt="QR" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Export Controls */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all group">
              <Instagram className="text-pink-500" />
              <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest">IG Story</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all group">
              <Twitter className="text-blue-400" />
              <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest">X Card</span>
            </button>
          </div>
          
          <button className="w-full py-5 bg-white text-black font-black uppercase italic tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all">
            <Download size={18} /> Export High-Res PNG
          </button>
          
          <p className="text-[8px] text-gray-600 uppercase font-bold tracking-widest text-center leading-relaxed">
            Exports include all tactical metadata <br/> and personalized fan watermarks.
          </p>
        </div>
      </div>
    </div>
  );
}
