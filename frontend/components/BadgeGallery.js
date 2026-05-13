import { motion } from 'framer-motion';

export default function BadgeGallery() {
  const badges = [
    { id: 1, name: 'Prediction King', icon: '👑', rarity: 'Legendary', color: 'text-yellow-500' },
    { id: 2, name: 'Tactical Genius', icon: '🧠', rarity: 'Epic', color: 'text-purple-500' },
    { id: 3, name: 'Trivia Master', icon: '💎', rarity: 'Rare', color: 'text-cyan-500' },
    { id: 4, name: 'Viral Fan', icon: '🤳', rarity: 'Common', color: 'text-gray-400' },
    { id: 5, name: 'Match Oracle', icon: '🔮', rarity: 'Legendary', color: 'text-yellow-500' },
    { id: 6, name: 'AI Captain', icon: '👨‍✈️', rarity: 'Epic', color: 'text-purple-500' },
  ];

  return (
    <div className="glass-card p-8 border-white/5">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Achievement Gallery</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Your Collection</p>
        </div>
        <div className="text-[10px] font-black text-cyan-400 italic">6 / 24 Unlocked</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {badges.map((badge, i) => (
          <motion.div 
            key={badge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-6 bg-white/5 rounded-[32px] border border-white/5 hover:bg-white/10 transition-all text-center cursor-pointer overflow-hidden"
          >
            <div className={`text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 ${badge.color}`}>
              {badge.icon}
            </div>
            <h4 className="text-[10px] font-black uppercase text-white tracking-widest mb-1">{badge.name}</h4>
            <p className={`text-[7px] font-black uppercase tracking-[0.2em] ${badge.color}`}>{badge.rarity}</p>
            
            {/* Holographic Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
