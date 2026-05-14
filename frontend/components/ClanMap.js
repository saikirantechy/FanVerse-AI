import { motion } from 'framer-motion';
import { Globe, Crosshair, Zap } from 'lucide-react';

export default function ClanMap() {
  const regions = [
    { id: 1, name: 'Mumbai Delta', dominance: 'MI', color: 'bg-blue-500', influence: 88 },
    { id: 2, name: 'Bangalore Sector', dominance: 'RCB', color: 'bg-red-500', influence: 94 },
    { id: 3, name: 'Chennai Grid', dominance: 'CSK', color: 'bg-yellow-500', influence: 91 },
    { id: 4, name: 'Delhi Core', dominance: 'DC', color: 'bg-blue-800', influence: 76 },
    { id: 5, name: 'Kolkata Hub', dominance: 'KKR', color: 'bg-purple-700', influence: 82 },
    { id: 6, name: 'Hyderabad Zone', dominance: 'SRH', color: 'bg-orange-500', influence: 79 },
  ];

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent relative overflow-hidden group h-full">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-1">Territorial Matrix</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Global Arena Dominance</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-[9px] font-black text-cyan-400 animate-pulse">
          <Zap size={10} /> LIVE SYNCHRONIZING
        </div>
      </div>

      <div className="relative h-64 bg-black/60 rounded-3xl border border-white/5 overflow-hidden p-6 mb-8 flex items-center justify-center">
        {/* Radar Effect Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
            className="w-40 h-40 border border-cyan-500/30 rounded-full"
          />
          <motion.div 
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }}
            className="w-40 h-40 border border-cyan-500/20 rounded-full"
          />
          <div className="w-[1px] h-full bg-white/5 absolute" />
          <div className="h-[1px] w-full bg-white/5 absolute" />
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-6 w-full">
          {regions.map((region) => (
            <motion.div 
              key={region.id}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-crosshair group/item"
            >
              <div className="relative mb-3">
                <div className={`w-4 h-4 rounded-full ${region.color} shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse`} />
                <div className={`absolute inset-0 w-4 h-4 rounded-full ${region.color} blur-md opacity-50 group-hover/item:opacity-100 transition-opacity`} />
              </div>
              <span className="text-[9px] font-black uppercase text-white truncate w-full text-center tracking-tight mb-1">{region.name}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[8px] font-bold text-cyan-400 uppercase italic">{region.dominance}</span>
                <span className="text-[7px] text-gray-700">|</span>
                <span className="text-[8px] font-black text-gray-500">{region.influence}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 relative z-10">
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Globe size={12} className="text-cyan-400" />
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Active Fronts</span>
          </div>
          <p className="text-xl font-black text-white italic">1,428 <span className="text-[10px] text-green-400 ml-1">↑ 12</span></p>
        </div>
        <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 mb-1">
            <Crosshair size={12} className="text-purple-400" />
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Contested</span>
          </div>
          <p className="text-xl font-black text-white italic">34 <span className="text-[10px] text-red-400 ml-1">!!</span></p>
        </div>
      </div>

      <button className="w-full mt-6 py-4 bg-cyan-500 text-black rounded-2xl text-[10px] font-black uppercase italic tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(6,182,212,0.2)]">
        ENTER GLOBAL ARENA
      </button>
    </div>
  );
}

