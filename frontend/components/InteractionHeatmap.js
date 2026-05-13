import { motion } from 'framer-motion';

export default function InteractionHeatmap() {
  const cities = [
    { name: 'Mumbai', energy: 85, color: 'bg-blue-500', x: 20, y: 60 },
    { name: 'Bangalore', energy: 95, color: 'bg-red-500', x: 30, y: 80 },
    { name: 'Chennai', energy: 70, color: 'bg-yellow-500', x: 40, y: 75 },
    { name: 'Delhi', energy: 60, color: 'bg-blue-800', x: 25, y: 30 },
    { name: 'Kolkata', energy: 50, color: 'bg-purple-700', x: 70, y: 45 },
  ];

  return (
    <div className="glass-card p-6 border-cyan-500/10 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Global Reaction Heatmap</h3>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Live Pulse</span>
        </div>
      </div>

      <div className="relative h-48 bg-black/40 rounded-2xl border border-white/5 overflow-hidden">
        {/* Abstract India Map Visual */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div className="w-64 h-64 border border-white/20 rounded-full animate-ping" />
        </div>

        {cities.map((city) => (
          <motion.div 
            key={city.name}
            initial={{ scale: 0 }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6] 
            }}
            transition={{ 
              duration: 2 + Math.random(), 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{ 
              left: `${city.x}%`, 
              top: `${city.y}%` 
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className={`w-4 h-4 rounded-full ${city.color} blur-[4px]`} />
            <div className={`absolute inset-0 w-4 h-4 rounded-full ${city.color} animate-ping opacity-40`} />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-0.5 rounded border border-white/10 opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-[6px] font-black text-white uppercase whitespace-nowrap">{city.name}: {city.energy}%</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
        <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Highest Energy</span>
        <span className="text-[10px] font-black text-cyan-400 italic">Bangalore (RCB Fans)</span>
      </div>
    </div>
  );
}
