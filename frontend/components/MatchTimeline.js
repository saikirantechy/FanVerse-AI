'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function MatchTimeline({ events }) {
  return (
    <div className="glass-card p-6 h-[300px] flex flex-col">
      <h3 className="font-bold uppercase tracking-wider text-[10px] text-gray-500 mb-4 flex justify-between items-center">
        Match Event Timeline
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
      </h3>
      
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        <AnimatePresence initial={false}>
          {events.map((event, i) => (
            <motion.div 
              key={event.id || i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative pl-6 border-l border-white/10 pb-4 last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(0,242,255,0.5)]" />
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-bold text-cyan-400/70">{event.time}</span>
                <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${
                  event.type === 'boundary' || event.type === 'six' ? 'bg-green-500/20 text-green-400' :
                  event.type === 'wicket' ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-gray-500'
                }`}>
                  {event.type}
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1 line-clamp-2">{event.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
