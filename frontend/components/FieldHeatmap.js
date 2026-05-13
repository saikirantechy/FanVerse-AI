'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

export default function FieldHeatmap() {
  const [historyIndex, setHistoryIndex] = useState(10);

  const points = [
    { x: 30, y: 40, intensity: 0.8 * (historyIndex / 10) },
    { x: 70, y: 60, intensity: 0.6 * (historyIndex / 10) },
    { x: 50, y: 50, intensity: 0.9 * (historyIndex / 10) },
    { x: 20, y: 80, intensity: 0.4 * (historyIndex / 10) },
  ];

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Field Activity Heatmap</h3>
          <p className="text-xs font-black text-white italic uppercase tracking-tighter">Tactical Hotspots</p>
        </div>
        <Map size={16} className="text-gray-500" />
      </div>

      <div className="relative aspect-square bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden mb-6">
        {/* Field Lines */}
        <div className="absolute inset-0 border-2 border-white/5 rounded-full m-4" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/5" />
        
        {/* Heat Points */}
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: p.intensity * 2.5 }}
            className="absolute w-12 h-12 bg-cyan-500/30 rounded-full blur-xl"
            style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }}
          />
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-[8px] font-black text-gray-600 uppercase tracking-widest">
          <span>Tactical Replay</span>
          <span>{historyIndex * 2} min ago</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={historyIndex}
          onChange={(e) => setHistoryIndex(parseInt(e.target.value))}
          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
      </div>
    </div>
  );
}
