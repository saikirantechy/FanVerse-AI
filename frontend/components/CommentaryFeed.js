'use client';

import { motion, AnimatePresence } from 'framer-motion';
import AudioPulse from './AudioPulse';

export default function CommentaryFeed({ events }) {
  const mockEvents = events || [
    { id: 1, type: 'wicket', text: 'OUT! Ravindra Jadeja caught by Kohli! Huge moment in the match.', time: '15.4', agent: 'AI Commentary' },
    { id: 2, type: 'boundary', text: 'FOUR! Shivam Dube clears the infield with ease.', time: '15.2', agent: 'AI Commentary' },
    { id: 3, type: 'normal', text: 'Single taken. Rotation of strike is key here.', time: '15.1', agent: 'Match Bot' },
  ];

  return (
    <div className="glass-card flex flex-col h-[400px]">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h3 className="font-bold uppercase tracking-wider text-sm flex items-center gap-2">
          <AudioPulse isActive={true} />
          Live Commentary
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        <AnimatePresence initial={false}>
          {mockEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`p-3 rounded-lg border ${
                event.type === 'wicket' ? 'bg-red-500/10 border-red-500/20' : 
                event.type === 'boundary' ? 'bg-green-500/10 border-green-500/20' : 
                'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase text-gray-500">{event.time} OVERS</span>
                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-white/10 text-gray-400">{event.agent}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-200">
                {event.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
