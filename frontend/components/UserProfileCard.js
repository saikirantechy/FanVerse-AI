import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Link as LinkIcon, Edit3 } from 'lucide-react';

export default function UserProfileCard({ user, onEdit }) {
  const stats = [
    { label: 'Level', value: user?.level || 15, icon: <Star size={16} /> },
    { label: 'XP', value: '12,480', icon: <TrendingUp size={16} /> },
    { label: 'Rank', value: 'Global #124', icon: <Trophy size={16} /> },
  ];

  return (
    <div className="glass-card overflow-hidden border-white/10 group">
      {/* Banner */}
      <div className="h-40 bg-gradient-to-r from-cyan-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cyber-glow.png')] opacity-20" />
        <motion.button 
          whileHover={{ scale: 1.1 }}
          onClick={onEdit}
          className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-black/40 transition-all"
        >
          <Edit3 size={16} />
        </motion.button>
      </div>

      {/* Profile Info */}
      <div className="px-8 pb-8 -mt-16 relative">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-[#050505] overflow-hidden shadow-2xl">
              <img 
                src={user?.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Fan123"} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-[#050505] rounded-full" />
          </div>

          <div className="flex-1 pt-16 md:pt-0">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white">
                {user?.username || "Fan Analyst"}
              </h1>
              {user?.level >= 15 && (
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="px-3 py-1 bg-gradient-to-tr from-yellow-500 to-orange-600 rounded-lg shadow-[0_0_20px_rgba(234,179,8,0.4)] border border-yellow-400/50"
                >
                  <span className="text-[8px] font-black text-black uppercase tracking-widest flex items-center gap-1">
                    <Star size={10} fill="black" /> Prestige
                  </span>
                </motion.div>
              )}
            </div>
            <p className="text-gray-400 font-medium mb-4 max-w-lg">{user?.bio || "AI-powered sports strategist. Predicting momentum shifts since 2024."}</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest">
                Team: RCB
              </span>
              <div className="flex gap-3">
                <LinkIcon size={14} className="text-gray-500 cursor-pointer hover:text-white transition-colors" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">fanverse.ai/profile/fan123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 bg-white/5 rounded-3xl border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                <p className="text-2xl font-black text-white italic">{stat.value}</p>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl text-cyan-500">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* XP Progress */}
        <div className="p-6 bg-cyan-500/5 rounded-3xl border border-cyan-500/10">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Next Level Progress</p>
            <p className="text-[10px] font-black text-white italic">12,480 / 15,000 XP</p>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '83%' }}
              className="h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
