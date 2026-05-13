import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import EmojiRain from './EmojiRain';

export default function InteractionHeatmap() {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(true);
      setTimeout(() => setTrigger(false), 500);
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  const cities = [
    { name: 'Mumbai', energy: 85, color: 'bg-blue-500', x: 20, y: 60, trend: '#HitmanEra' },
    { name: 'Bangalore', energy: 95, color: 'bg-red-500', x: 30, y: 80, trend: '#RCBForever' },
    { name: 'Chennai', energy: 70, color: 'bg-yellow-500', x: 40, y: 75, trend: '#WhistlePodu' },
    { name: 'Delhi', energy: 60, color: 'bg-blue-800', x: 25, y: 30, trend: '#RoarMachaa' },
    { name: 'Kolkata', energy: 50, color: 'bg-purple-700', x: 70, y: 45, trend: '#AmiKKR' },
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
        <EmojiRain trigger={trigger} />
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
            className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-30"
          >
            <div className={`w-4 h-4 rounded-full ${city.color} blur-[4px]`} />
            <div className={`absolute inset-0 w-4 h-4 rounded-full ${city.color} animate-ping opacity-40`} />
            <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/90 px-3 py-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
              <p className="text-[8px] font-black text-white uppercase whitespace-nowrap mb-1">{city.name}: {city.energy}%</p>
              <p className="text-[10px] font-black text-cyan-400 italic whitespace-nowrap">{city.trend}</p>
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
