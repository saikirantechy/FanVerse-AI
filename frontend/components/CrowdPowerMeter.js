import { motion } from 'framer-motion';

export default function CrowdPowerMeter({ energy }) {
  const intensity = energy || 65; // Default 65%

  return (
    <div className="glass-card p-6 border-orange-500/20 bg-gradient-to-br from-orange-500/5 to-transparent">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">Live Crowd Power</h3>
          <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mt-1">Fan Influence Active</p>
        </div>
        <div className="text-right">
          <div className="text-xl font-black text-orange-400 italic">{intensity}%</div>
        </div>
      </div>

      <div className="relative h-12 flex items-end gap-1">
        {[...Array(20)].map((_, i) => {
          const barHeight = 20 + Math.random() * 80;
          const isActive = (i / 20) * 100 < intensity;
          
          return (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${isActive ? barHeight : 20}%` }}
              className={`flex-1 rounded-t-sm transition-colors duration-500 ${
                isActive ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-white/5'
              }`}
            />
          );
        })}
      </div>

      <div className="mt-4 flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-gray-600">
        <span>Silent</span>
        <span className="text-orange-400">Roaring</span>
      </div>
      
      <p className="text-[9px] text-gray-400 mt-4 leading-tight italic">
        "Your reactions are directly boosting the home team's momentum!"
      </p>
    </div>
  );
}
