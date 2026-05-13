'use client';

import { motion } from 'framer-motion';

export default function StrategicInsight({ insight }) {
  return (
    <motion.div 
      key={insight}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-card p-4 border-purple-500/30 bg-purple-500/5"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-purple-400">Strategic Insight</h4>
      </div>
      <p className="text-sm italic text-gray-300 leading-relaxed">
        "{insight}"
      </p>
    </motion.div>
  );
}
