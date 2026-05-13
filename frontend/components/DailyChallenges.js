'use client';

import { motion } from 'framer-motion';

export default function DailyChallenges() {
  const challenges = [
    { id: 1, text: 'Predict next wicket', reward: '500 XP', done: false },
    { id: 2, text: 'React to 5 viral moments', reward: '200 XP', done: true },
    { id: 3, text: 'Join a live poll', reward: '100 XP', done: true },
  ];

  return (
    <div className="glass-card p-6">
      <h3 className="font-bold uppercase tracking-wider text-[10px] text-gray-500 mb-6 flex justify-between items-center">
        Daily Quests
        <span className="text-[10px] text-cyan-400 font-mono">2/3 DONE</span>
      </h3>

      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="flex items-center gap-3 group">
            <div className={`w-5 h-5 rounded border flex items-center justify-center text-[10px] transition-colors ${
              challenge.done ? 'bg-green-500 border-green-500 text-black' : 'border-white/10 text-transparent'
            }`}>
              {challenge.done ? '✓' : ''}
            </div>
            <div className="flex-1">
              <p className={`text-xs font-medium ${challenge.done ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                {challenge.text}
              </p>
              <p className="text-[8px] font-black text-cyan-500/50 uppercase tracking-widest">{challenge.reward}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 transition-all">
        All Achievements
      </button>
    </div>
  );
}
