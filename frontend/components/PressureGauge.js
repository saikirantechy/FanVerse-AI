import { motion } from 'framer-motion';

export default function PressureGauge({ value }) {
  const pressure = value || 65;

  return (
    <div className="glass-card p-6 border-red-500/20 bg-red-500/5 relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Match Pressure Gauge</h3>
          <p className="text-[8px] font-black text-red-400 uppercase tracking-widest mt-1">Mental Intensity Analysis</p>
        </div>
        <div className="text-[10px] font-black text-red-500 italic">{pressure}%</div>
      </div>

      <div className="relative h-4 bg-white/5 rounded-full overflow-hidden mb-6">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${pressure}%` }}
          className="h-full bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.5)]"
        />
        {/* Animated Pressure "Spikes" */}
        <motion.div 
          animate={{ x: ['0%', '100%'], opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-20 bg-white/20 skew-x-[45deg]"
        />
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="text-center">
          <p className="text-[7px] font-black text-gray-600 uppercase tracking-widest mb-1">Low</p>
          <div className="w-full h-1 bg-green-500/20 rounded-full" />
        </div>
        <div className="text-center">
          <p className="text-[7px] font-black text-gray-600 uppercase tracking-widest mb-1">Critical</p>
          <div className="w-full h-1 bg-orange-500/20 rounded-full" />
        </div>
        <div className="text-center">
          <p className="text-[7px] font-black text-gray-600 uppercase tracking-widest mb-1">Extreme</p>
          <div className="w-full h-1 bg-red-500/20 rounded-full" />
        </div>
      </div>

      <div className="mt-6 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
        <p className="text-[8px] text-red-200/70 italic leading-relaxed text-center">
          "The BehaviorAgent detects high anxiety levels in the middle order. Next 12 balls are critical."
        </p>
      </div>
    </div>
  );
}
