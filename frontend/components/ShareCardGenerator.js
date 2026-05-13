import { motion } from 'framer-motion';
import { Share2, Download, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ShareCardGenerator({ type, data }) {
  const templates = {
    prediction: { title: 'MATCH ORACLE', color: 'from-cyan-500', icon: '🔮' },
    level: { title: 'LEVEL UP', color: 'from-purple-500', icon: '⭐' },
    streak: { title: 'STREAK KING', color: 'from-orange-500', icon: '🔥' },
  };

  const current = templates[type] || templates.prediction;

  return (
    <div className="glass-card p-8 border-white/10 bg-white/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Social Share Engine</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Export Your Legacy</p>
        </div>
        <Share2 size={20} className="text-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Share Card Preview */}
        <div className={`aspect-[4/5] bg-gradient-to-br ${current.color} to-black rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl group`}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cyber-glow.png')] opacity-30" />
          
          <div className="relative flex justify-between items-start">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-xl">
              {current.icon}
            </div>
            <div className="text-right">
              <p className="text-[8px] font-black text-white/70 uppercase tracking-widest">FanVerse AI</p>
              <p className="text-[6px] font-bold text-white/50 uppercase tracking-[0.3em]">Agentic Premier League</p>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none mb-2">
              {current.title}
            </h2>
            <p className="text-xs font-bold text-white/70 uppercase tracking-widest">Achievement Unlocked</p>
          </div>

          <div className="relative flex items-end justify-between">
            <div>
              <p className="text-[8px] font-black text-white/50 uppercase tracking-widest mb-1">Fan Identity</p>
              <p className="text-sm font-black text-white italic uppercase tracking-tighter">@FanAnalyst_99</p>
            </div>
            <div className="w-16 h-16 bg-white p-1 rounded-xl">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fanverse.ai" alt="QR" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Share Options */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all group">
              <Instagram className="text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest">Instagram Story</span>
            </button>
            <button className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all group">
              <Twitter className="text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] font-black uppercase text-gray-500 tracking-widest">Twitter Post</span>
            </button>
          </div>
          
          <button className="w-full py-5 bg-white text-black font-black uppercase italic tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all">
            <Download size={18} /> Download High-Res Card
          </button>
          
          <p className="text-[8px] text-gray-600 uppercase font-bold tracking-widest text-center leading-relaxed">
            All cards include your unique QR code <br/> & localized fan metadata.
          </p>
        </div>
      </div>
    </div>
  );
}
