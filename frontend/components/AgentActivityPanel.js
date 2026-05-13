'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AGENTS = [
  { id: 'match', name: 'Match Agent', task: 'Monitoring Stream' },
  { id: 'comm', name: 'Commentary Agent', task: 'Generating Insights' },
  { id: 'pred', name: 'Prediction Agent', task: 'Calculating Odds' },
  { id: 'social', name: 'Social Agent', task: 'Analyzing Sentiment' },
  { id: 'insight', name: 'Insight Agent', task: 'Detecting Patterns' },
  { id: 'eng', name: 'Engagement Agent', task: 'Reward Distribution' },
];

export default function AgentActivityPanel() {
  const [activeAgent, setActiveAgent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgent((prev) => (prev + 1) % AGENTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6">
      <h3 className="font-bold uppercase tracking-wider text-[10px] text-gray-500 mb-6 flex justify-between items-center">
        Agent Orchestrator Status
        <span className="text-green-500 font-mono text-[8px]">SYSTEM ONLINE</span>
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {AGENTS.map((agent, i) => (
          <div key={agent.id} className="relative p-3 rounded-xl bg-white/5 border border-white/5 overflow-hidden">
            {activeAgent === i && (
              <motion.div 
                layoutId="active-glow"
                className="absolute inset-0 bg-cyan-500/5 border border-cyan-500/20 rounded-xl"
                initial={false}
              />
            )}
            <div className="relative z-10 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-1.5 h-1.5 rounded-full ${activeAgent === i ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'}`} />
                <span className="text-[10px] font-bold text-gray-200">{agent.name}</span>
              </div>
              <span className="text-[8px] text-gray-500 uppercase tracking-widest leading-none">
                {activeAgent === i ? agent.task : 'Standby'}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
        <div className="flex gap-1">
          {[...Array(20)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [4, 12, 4] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
              className="w-1 bg-cyan-500/30 rounded-full"
            />
          ))}
        </div>
        <span className="text-[8px] font-black text-cyan-400/50">DATA STREAMING...</span>
      </div>
    </div>
  );
}
