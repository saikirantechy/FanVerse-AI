'use client';

import { motion } from 'framer-motion';

export default function LivePlayMode({ isActive, onToggle }) {
  return (
    <div className="glass-card p-6 border-cyan-500/30 bg-cyan-500/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4">
        <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-red-500 animate-pulse' : 'bg-gray-600'}`} />
      </div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-black italic tracking-tighter uppercase mb-2">
          Autonomous <span className="text-cyan-400">Live Play</span>
        </h3>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-6">
          Self-Running Demo Mode for Judges
        </p>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggle}
            className={`flex-1 py-3 px-6 rounded-xl font-black italic uppercase tracking-widest transition-all duration-500 ${
              isActive 
                ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
          >
            {isActive ? 'Stop Live Simulation' : 'Start Live Simulation'}
          </button>
        </div>
        
        <div className="mt-6 space-y-3">
          <div className="flex justify-between items-center text-[8px] font-black uppercase tracking-widest text-gray-500">
            <span>Simulation Status</span>
            <span className={isActive ? 'text-green-500' : 'text-gray-600'}>
              {isActive ? 'ORCHESTRATING...' : 'IDLE'}
            </span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            {isActive && (
              <motion.div 
                animate={{ x: [-100, 200] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-1/3 h-full bg-cyan-500"
              />
            )}
          </div>
        </div>
      </div>
      
      {/* Decorative background logo */}
      <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="w-24 h-24 bg-cyan-400 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
