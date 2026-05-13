import { motion } from 'framer-motion';

export default function ClanMap() {
  const regions = [
    { id: 1, name: 'Mumbai', dominance: 'MI', color: 'bg-blue-500' },
    { id: 2, name: 'Bangalore', dominance: 'RCB', color: 'bg-red-500' },
    { id: 3, name: 'Chennai', dominance: 'CSK', color: 'bg-yellow-500' },
    { id: 4, name: 'Delhi', dominance: 'DC', color: 'bg-blue-800' },
    { id: 5, name: 'Kolkata', dominance: 'KKR', color: 'bg-purple-700' },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Clan Rivalry Map</h3>
          <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-1">Live Territorial Dominance</p>
        </div>
      </div>

      <div className="relative h-48 bg-black/40 rounded-2xl border border-white/5 overflow-hidden p-4">
        {/* Simple Abstract Map Visualization */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-64 h-64 border-[0.5px] border-white/20 rounded-full animate-[spin_60s_linear_infinite]" />
          <div className="absolute w-48 h-48 border-[0.5px] border-white/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
          {regions.map((region) => (
            <motion.div 
              key={region.id}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10"
            >
              <div className={`w-3 h-3 rounded-full ${region.color} shadow-[0_0_10px_rgba(255,255,255,0.2)] mb-2 animate-pulse`} />
              <span className="text-[8px] font-black uppercase text-white truncate w-full text-center">{region.name}</span>
              <span className="text-[6px] font-bold text-gray-500 uppercase">{region.dominance}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Total Territories</span>
        <span className="text-[10px] font-black text-white italic">148</span>
      </div>
    </div>
  );
}
