'use client';

import { motion } from 'framer-motion';

export default function CrowdEnergy({ energy, viral }) {
  return (
    <div className="glass-card p-4">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Crowd Energy</h4>
        {viral && (
          <motion.span 
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full font-black italic"
          >
            VIRAL MOMENT
          </motion.span>
        )}
      </div>
      
      <div className="flex items-end gap-1 h-12">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: '10%' }}
            animate={{ 
              height: `${Math.random() * (energy / 100) * 100 + 10}%`,
              backgroundColor: energy > 80 ? 'rgba(239, 68, 68, 0.6)' : 'rgba(0, 242, 255, 0.4)'
            }}
            transition={{ repeat: Infinity, duration: 0.5, repeatType: 'reverse' }}
            className="flex-1 rounded-t-sm"
          />
        ))}
      </div>
      
      <div className="mt-2 flex justify-between text-[8px] font-bold text-gray-600 uppercase">
        <span>Quiet</span>
        <span>Electric</span>
      </div>
    </div>
  );
}
