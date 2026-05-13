import { motion } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Share2, Globe } from 'lucide-react';

export default function PublicProfileCard({ user }) {
  const data = user || {
    username: "CricketOracle_99",
    level: 42,
    accuracy: "94%",
    team: "RCB",
    achievements: 24,
    prestige: true
  };

  return (
    <div className="glass-card overflow-hidden border-cyan-500/20 bg-cyan-500/5 relative group max-w-2xl mx-auto shadow-[0_0_50px_rgba(6,182,212,0.1)]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-purple-600/10" />
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Globe size={120} className="text-cyan-500" />
      </div>

      <div className="relative z-10 p-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar with Elite Glow */}
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(6,182,212,0.1)", "0 0 40px rgba(6,182,212,0.4)", "0 0 20px rgba(6,182,212,0.1)"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-40 h-40 rounded-[48px] bg-black border-4 border-white/10 overflow-hidden relative"
          >
            <img 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${data.username}`} 
              alt="Public Avatar" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
              <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">
                {data.username}
              </h1>
              <ShieldCheck size={24} className="text-cyan-400" />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="px-3 py-1 bg-cyan-500 text-black rounded-lg text-[8px] font-black uppercase tracking-widest">
                VERIFIED ORACLE
              </span>
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black text-white uppercase tracking-widest">
                LVL {data.level}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Accuracy</p>
                <p className="text-xl font-black text-cyan-400 italic">{data.accuracy}</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Legacy</p>
                <p className="text-xl font-black text-white italic">{data.achievements} Badges</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10">
              <Trophy size={20} className="text-yellow-500" />
            </div>
            <div>
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Global Rank</p>
              <p className="text-sm font-black text-white italic">Top 1% Worldwide</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl text-[10px] font-black uppercase italic tracking-widest hover:bg-cyan-400 transition-all">
            <Share2 size={16} /> Follow Fan Identity
          </button>
        </div>
      </div>
    </div>
  );
}
