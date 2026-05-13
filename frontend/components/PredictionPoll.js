'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PredictionPoll() {
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'a', text: 'Boundary (4/6)', votes: 45 },
    { id: 'b', text: 'Wicket', votes: 12 },
    { id: 'c', text: 'Dot Ball', votes: 28 },
    { id: 'd', text: '1-3 Runs', votes: 15 },
  ];

  const handleVote = (id) => {
    setSelected(id);
    setVoted(true);
  };

  return (
    <div className="glass-card p-6 border-cyan-500/20">
      <div className="flex items-center gap-2 mb-4">
        <div className="px-2 py-1 bg-cyan-500 rounded text-[10px] font-black uppercase">Active Poll</div>
        <h3 className="font-bold uppercase tracking-wider text-sm">Next Over Prediction</h3>
      </div>

      <p className="text-sm text-gray-300 mb-6">What will happen in the 16th over?</p>

      <div className="space-y-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            disabled={voted}
            onClick={() => handleVote(opt.id)}
            className={`w-full relative group overflow-hidden rounded-xl border transition-all duration-300 ${
              voted && selected === opt.id 
                ? 'border-cyan-500/50 bg-cyan-500/10' 
                : 'border-white/10 bg-white/5 hover:bg-white/10'
            }`}
          >
            {voted && (
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${opt.votes}%` }}
                className="absolute inset-y-0 left-0 bg-cyan-500/10"
              />
            )}
            <div className="relative p-3 flex justify-between items-center z-10">
              <span className="text-sm font-medium">{opt.text}</span>
              {voted && <span className="text-xs font-bold text-cyan-400">{opt.votes}%</span>}
            </div>
          </button>
        ))}
      </div>

      {voted && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] text-gray-500 mt-4 text-center font-bold uppercase tracking-widest"
        >
          Predicting Agent: Analyzing Fan Sentiment...
        </motion.p>
      )}
    </div>
  );
}
