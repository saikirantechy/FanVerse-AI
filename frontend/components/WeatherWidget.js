import { motion } from 'framer-motion';

export default function WeatherWidget() {
  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Stadium Atmosphere</h3>
        <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Live: Chinnaswamy</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="text-2xl">☀️</div>
          <div>
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Weather</p>
            <p className="text-xs font-black text-white italic">28°C Clear</p>
          </div>
        </div>
        <div className="p-4 bg-black/40 rounded-2xl border border-white/5 flex items-center gap-4">
          <div className="text-2xl">🏏</div>
          <div>
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Pitch</p>
            <p className="text-xs font-black text-white italic">Hard & Dry</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
        <div className="flex justify-between text-[8px] font-black uppercase text-gray-500 mb-2">
          <span>Humidity</span>
          <span>Dew Point</span>
        </div>
        <div className="flex h-1 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div initial={{ width: 0 }} animate={{ width: '45%' }} className="h-full bg-cyan-500" />
          <div className="flex-1" />
          <motion.div initial={{ width: 0 }} animate={{ width: '12%' }} className="h-full bg-purple-500" />
        </div>
        <p className="text-[7px] font-bold text-gray-600 uppercase tracking-widest mt-3 text-center">
          Dew expected to play a role in the 2nd innings.
        </p>
      </div>
    </div>
  );
}
