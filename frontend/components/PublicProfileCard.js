import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Share2, Globe } from 'lucide-react';

export default function PublicProfileCard({ user }) {
  const data = user || {
    username: "CricketOracle_99",
    level: 42,
    accuracy: "94%",
    team: "RCB",
    achievements: 24,
    prestige: true,
    bio: "AI Sports Analyst & Die-hard Cricket Fan."
  };

  return (
    <div className="glass-card overflow-hidden border-cyan-500/20 bg-cyan-500/5 relative group max-w-2xl mx-auto shadow-[0_0_80px_rgba(6,182,212,0.15)] hover:shadow-[0_0_100px_rgba(6,182,212,0.25)] transition-all duration-700">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-purple-600/10 opacity-50 group-hover:opacity-80 transition-opacity" />
      
      {/* Scanning Line Effect */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1px] bg-cyan-400/20 z-0 pointer-events-none"
      />

      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <Globe size={180} className="text-cyan-500" />
      </div>

      <div className="relative z-10 p-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar with Elite Multi-Layer Glow */}
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-cyan-500/30 rounded-full"
            />
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 20px rgba(6,182,212,0.2)", "0 0 60px rgba(6,182,212,0.5)", "0 0 20px rgba(6,182,212,0.2)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-44 h-44 rounded-[40px] bg-black border-4 border-cyan-500/30 overflow-hidden relative z-10 p-2"
            >
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-gray-900 to-black">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.username}`} 
                  alt="Public Avatar" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
            </motion.div>
            
            {/* Level Badge Overlay */}
            <div className="absolute -bottom-2 -right-2 z-20 bg-cyan-500 text-black px-4 py-1.5 rounded-full text-[10px] font-black italic shadow-lg border-2 border-black">
              LVL {data.level}
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
              <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {data.username}
              </h1>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ShieldCheck size={28} className="text-cyan-400" />
              </motion.div>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-xl text-[9px] font-black uppercase tracking-[0.2em]">
                VERIFIED ORACLE
              </span>
              <span className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded-xl text-[9px] font-black uppercase tracking-[0.2em]">
                LEGENDARY STATUS
              </span>
            </div>

            <p className="text-gray-400 text-sm italic mb-8 max-w-md leading-relaxed">
              "{data.bio || "This fan identity is processed by agentic AI models on the FanVerse Sports Metaverse."}"
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 rounded-3xl border border-white/5 group-hover:border-cyan-500/20 transition-colors">
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Star size={10} className="text-cyan-400" /> Prediction Accuracy
                </p>
                <p className="text-2xl font-black text-cyan-400 italic">{data.accuracy}</p>
              </div>
              <div className="p-5 bg-white/5 rounded-3xl border border-white/5 group-hover:border-purple-500/20 transition-colors">
                <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Trophy size={10} className="text-purple-400" /> AI Achievements
                </p>
                <p className="text-2xl font-black text-white italic">{data.achievements} Badges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center shadow-inner">
              <Trophy size={24} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Global Ranking</p>
              <p className="text-lg font-black text-white italic">Top 1% <span className="text-cyan-400 font-medium text-xs opacity-60 ml-2">WORLDWIDE</span></p>
            </div>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-2xl text-[11px] font-black uppercase italic tracking-widest hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
              <Share2 size={18} /> Share Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

