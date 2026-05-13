import { motion } from 'framer-motion';

export default function SeasonPassport() {
  const milestones = [
    { id: 1, title: 'Rookie', status: 'completed', icon: '🐣' },
    { id: 2, title: 'Analyst', status: 'completed', icon: '📊' },
    { id: 3, title: 'Strategist', status: 'active', icon: '🧠' },
    { id: 4, title: 'Elite', status: 'locked', icon: '🎖️' },
    { id: 5, title: 'Captain', status: 'locked', icon: '👑' },
  ];

  return (
    <div className="glass-card p-6 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black italic uppercase tracking-tighter text-white">Season Passport</h3>
          <p className="text-[8px] font-black text-purple-400 uppercase tracking-widest mt-1">Your Achievement Journey</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-black text-white italic">72%</div>
          <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Global Progress</div>
        </div>
      </div>

      <div className="relative flex justify-between">
        {/* Progress Line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-white/5 z-0">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          />
        </div>

        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="relative z-10 flex flex-col items-center">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm border-2 transition-all ${
                milestone.status === 'completed' 
                  ? 'bg-purple-500 border-purple-400 text-white' 
                  : milestone.status === 'active'
                  ? 'bg-black border-purple-500 animate-pulse text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                  : 'bg-black border-white/10 text-gray-700'
              }`}
            >
              {milestone.icon}
            </motion.div>
            <span className={`text-[8px] font-black uppercase tracking-widest mt-3 ${
              milestone.status === 'locked' ? 'text-gray-600' : 'text-gray-300'
            }`}>
              {milestone.title}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Current Quest</p>
          <p className="text-[10px] font-bold text-white uppercase italic">Strategic Mastermind</p>
        </div>
        <div className="p-3 bg-white/5 rounded-xl border border-white/5">
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Reward Unlock</p>
          <p className="text-[10px] font-bold text-purple-400 uppercase italic">Neon Avatar Frame</p>
        </div>
      </div>
    </div>
  );
}
