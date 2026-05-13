import { motion } from 'framer-motion';
import { Zap, ShieldAlert, Target } from 'lucide-react';

export default function ClutchFactor({ player, value }) {
  const clutch = value || 85;

  return (
    <div className="glass-card p-6 border-orange-500/20 bg-orange-500/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Zap size={60} className="text-orange-500" />
      </div>

      <div className="relative z-10 flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Player Clutch Factor</h3>
          <p className="text-xs font-black text-white italic uppercase tracking-tighter">{player || "Virat Kohli"}</p>
        </div>
        <div className="text-xl font-black text-orange-500 italic">{clutch}%</div>
      </div>

      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden mb-6">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${clutch}%` }}
          className="h-full bg-gradient-to-r from-orange-600 to-yellow-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <ShieldAlert size={14} className="text-orange-500" />
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Pressure Handling: ELITE</span>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Target size={14} className="text-orange-500" />
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Decision Speed: 0.2s</span>
        </div>
      </div>
    </div>
  );
}
