import { motion } from 'framer-motion';

export default function FanRewardStore() {
  const rewards = [
    { id: 1, name: 'Cyan Neon Theme', cost: '5,000 XP', icon: '✨', unlocked: true },
    { id: 2, name: 'Gold Legend Frame', cost: '12,000 XP', icon: '👑', unlocked: false },
    { id: 3, name: 'Tactical Analyst Badge', cost: '2,500 XP', icon: '🧠', unlocked: true },
    { id: 4, name: 'Stadium Sound Pack', cost: '8,000 XP', icon: '🔊', unlocked: false },
    { id: 5, name: 'AI Avatar Customizer', cost: '20,000 XP', icon: '🤖', unlocked: false },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Fan Reward Store</h3>
        <div className="bg-yellow-500/20 px-3 py-1 rounded-full text-[10px] font-black text-yellow-500 border border-yellow-500/30">
          SHOP OPEN
        </div>
      </div>

      <div className="space-y-3">
        {rewards.map((reward) => (
          <motion.div 
            key={reward.id}
            whileHover={{ x: 5 }}
            className={`p-4 rounded-xl border flex items-center justify-between transition-all ${
              reward.unlocked 
                ? 'bg-green-500/5 border-green-500/20' 
                : 'bg-white/5 border-white/10 opacity-70'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="text-xl">{reward.icon}</div>
              <div>
                <h4 className="text-xs font-black uppercase text-white leading-tight">{reward.name}</h4>
                <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{reward.cost}</p>
              </div>
            </div>
            
            <button className={`text-[8px] font-black uppercase px-3 py-1.5 rounded-lg border tracking-widest ${
              reward.unlocked 
                ? 'bg-green-500/20 text-green-500 border-green-500/30' 
                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
            }`}>
              {reward.unlocked ? 'UNLOCKED' : 'PURCHASE'}
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-white/5 flex items-center justify-between">
        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Season Pass Progress</span>
        <span className="text-[9px] font-black text-white uppercase tracking-widest">Level 12</span>
      </div>
    </div>
  );
}
