import { motion } from 'framer-motion';

export default function ClanSystem() {
  const clans = [
    { name: 'CSK Superstars', xp: '1.2M', members: '42K', rank: 1, color: 'text-yellow-400' },
    { name: 'RCB Dominators', xp: '1.1M', members: '38K', rank: 2, color: 'text-red-500' },
    { name: 'MI Legends', xp: '980K', members: '35K', rank: 3, color: 'text-blue-500' },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Global Fan Clans</h3>
          <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest mt-1">Season Rivalry Active</p>
        </div>
        <div className="bg-cyan-500/10 px-3 py-1 rounded-full text-[8px] font-black text-cyan-400 border border-cyan-500/20">
          JOIN CLAN
        </div>
      </div>

      <div className="space-y-4">
        {clans.map((clan) => (
          <motion.div 
            key={clan.name}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5"
          >
            <div className="flex items-center gap-4">
              <div className="text-sm font-black text-gray-500 w-4">#{clan.rank}</div>
              <div>
                <h4 className={`text-xs font-black uppercase italic ${clan.color}`}>{clan.name}</h4>
                <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{clan.members} Fans</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-black text-white">{clan.xp}</div>
              <div className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Total XP</div>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">
        View Clan Rivalry Map
      </button>
    </div>
  );
}
