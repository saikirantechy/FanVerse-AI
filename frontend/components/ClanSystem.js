import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ClanService } from '../services/ClanService';
import { Users, Trophy, ShieldCheck, Map, ArrowLeft } from 'lucide-react';
import ClanMap from './ClanMap';

export default function ClanSystem() {
  const [clans, setClans] = useState([]);
  const [userClan, setUserClan] = useState(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    setClans(ClanService.getClans());
    setUserClan(ClanService.getUserClan());
  }, []);

  const handleJoin = (id) => {
    ClanService.joinClan(id);
    setUserClan(id);
  };

  if (showMap) {
    return (
      <div className="relative">
        <button 
          onClick={() => setShowMap(false)}
          className="absolute top-8 left-8 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/50 border border-white/10 rounded-lg text-[10px] font-black text-white hover:bg-cyan-500 hover:text-black transition-all"
        >
          <ArrowLeft size={14} /> BACK
        </button>
        <ClanMap />
      </div>
    );
  }

  return (
    <div className="glass-card p-6 border-cyan-500/10 bg-gradient-to-br from-cyan-500/5 to-transparent relative overflow-hidden group">
      {/* Decorative Background Icon */}
      <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
        <Users size={120} className="text-cyan-400" />
      </div>

      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Fan Alliance Matrix</h3>
          <p className="text-xs font-black text-cyan-400 uppercase tracking-widest italic flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            Global Clan War Active
          </p>
        </div>
        <div 
          onClick={() => setShowMap(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white hover:bg-white/10 cursor-pointer transition-all"
        >
          <Map size={14} className="text-cyan-400" /> WORLD MAP
        </div>
      </div>

      <div className="space-y-4 relative z-10">
        {clans.map((clan) => {
          const isUserIn = userClan === clan.id;
          
          return (
            <motion.div 
              key={clan.id}
              whileHover={{ x: 5 }}
              className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                isUserIn 
                  ? 'border-cyan-500/40 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                  : 'border-white/5 bg-black/40 hover:bg-black/60'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${clan.gradient} opacity-50`} />
              
              <div className="relative p-4 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-black text-gray-600">#{clan.rank}</span>
                    <Trophy size={14} className={isUserIn ? "text-cyan-400" : "text-gray-700"} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-black uppercase italic tracking-tighter text-white">
                        {clan.name}
                      </h4>
                      {isUserIn && <ShieldCheck size={14} className="text-cyan-400" />}
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1">
                        <Users size={10} /> {clan.members}
                      </p>
                      <span className="text-[8px] text-gray-700">|</span>
                      <p className="text-[8px] font-black text-cyan-400/70 uppercase tracking-widest">
                        {clan.xp} SEASON XP
                      </p>
                    </div>
                  </div>
                </div>

                {!isUserIn ? (
                  <button 
                    onClick={() => handleJoin(clan.id)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[8px] font-black text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                  >
                    DEPLOY
                  </button>
                ) : (
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-[8px] font-black uppercase tracking-widest border border-cyan-500/30">
                    ACTIVE CLAN
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5">
        <p className="text-[9px] text-gray-500 leading-relaxed italic text-center">
          "Joining a clan synchronizes your AI interactions with your alliance's global influence score."
        </p>
      </div>
    </div>
  );
}

