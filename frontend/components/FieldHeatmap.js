import { motion } from 'framer-motion';

export default function FieldHeatmap() {
  const zones = [
    { id: 'off', label: 'Off Side', value: 65, color: 'bg-cyan-500' },
    { id: 'leg', label: 'Leg Side', value: 35, color: 'bg-orange-500' },
    { id: 'straight', label: 'Straight', value: 48, color: 'bg-green-500' },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Batter Scoring Zones</h3>
        <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Spatial Analysis</span>
      </div>

      <div className="relative h-48 flex items-center justify-center">
        {/* Abstract Cricket Field (Circle) */}
        <div className="absolute w-40 h-40 border-2 border-white/10 rounded-full flex items-center justify-center">
          <div className="w-1 h-12 bg-white/20 rounded-full" /> {/* Pitch */}
        </div>

        {/* Scoring Pulses */}
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-12 h-12 bg-cyan-500/20 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-orange-500/20 rounded-full blur-lg"
        />
      </div>

      <div className="mt-8 space-y-4">
        {zones.map((zone) => (
          <div key={zone.id}>
            <div className="flex justify-between text-[8px] font-black uppercase text-gray-500 mb-2">
              <span>{zone.label}</span>
              <span>{zone.value}%</span>
            </div>
            <div className="flex h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${zone.value}%` }}
                className={`h-full ${zone.color}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
