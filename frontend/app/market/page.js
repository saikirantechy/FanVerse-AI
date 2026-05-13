'use client';

import Navbar from '../../components/Navbar';
import BroadcastTicker from '../../components/BroadcastTicker';
import { motion } from 'framer-motion';

export default function MarketPage() {
  const items = [
    { id: 1, name: '2x XP Booster', cost: '1,500', type: 'BOOSTER', icon: '⚡', desc: 'Double your XP for the next 30 minutes.' },
    { id: 2, name: 'Streak Shield', cost: '2,000', type: 'UTILITY', icon: '🛡️', desc: 'Prevent your streak from resetting if you miss a match.' },
    { id: 3, name: 'Neon Cyan Theme', cost: '5,000', type: 'COSMETIC', icon: '✨', desc: 'Unlock the exclusive neon dashboard theme.' },
    { id: 4, name: 'Clan Power Up', cost: '3,500', type: 'CLAN', icon: '🛡️', desc: 'Boost your clan XP contribution by 20%.' },
    { id: 5, name: 'AI Avatar Pack', cost: '10,000', type: 'COSMETIC', icon: '🤖', desc: 'Set of 5 premium AI-generated avatars.' },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
              Fan <span className="text-yellow-500">Market</span>
            </h1>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
              Spend Your Fan Coins on Elite Perks
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-4">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Your Balance</span>
            <span className="text-xl font-black text-yellow-500 italic">2,840 COINS</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 border-white/5 bg-white/5 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-6xl">{item.icon}</div>
              </div>

              <div className="mb-4">
                <span className="text-[8px] font-black text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20 uppercase tracking-widest">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-black uppercase italic text-white mb-2">{item.name}</h3>
              <p className="text-xs text-gray-400 font-medium leading-relaxed mb-8">
                {item.desc}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-black text-yellow-500 italic">{item.cost}</span>
                  <span className="text-[8px] font-bold text-gray-600 uppercase">Coins</span>
                </div>
                <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
                  PURCHASE
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-yellow-600/20 to-transparent border border-yellow-500/20 rounded-3xl flex items-center justify-between">
          <div>
            <h4 className="text-xl font-black italic uppercase text-white mb-2">Season 1 Battle Pass</h4>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest">Unlock premium rewards and 5x XP boosters.</p>
          </div>
          <button className="px-8 py-4 bg-yellow-500 text-black font-black uppercase italic tracking-widest rounded-xl hover:bg-yellow-400 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.2)]">
            VIEW PASS
          </button>
        </div>
      </div>

      <BroadcastTicker />
    </main>
  );
}
