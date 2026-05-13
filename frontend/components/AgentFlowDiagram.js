'use client';

import { motion } from 'framer-motion';

export default function AgentFlowDiagram() {
  const steps = [
    { id: 'match', label: 'Match Event', icon: '🏏' },
    { id: 'orchestrator', label: 'Orchestrator', icon: '🧠' },
    { id: 'agents', label: 'AI Agents', icon: '🤖' },
    { id: 'ui', label: 'Realtime UI', icon: '✨' },
  ];

  return (
    <div className="glass-card p-6 border-cyan-500/10">
      <h3 className="font-bold uppercase tracking-wider text-[10px] text-gray-500 mb-6">Autonomous Orchestration Flow</h3>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {steps.map((step, i) => (
          <div key={step.id} className="flex flex-col md:flex-row items-center gap-4 flex-1">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center relative z-10"
            >
              <span className="text-xl mb-1">{step.icon}</span>
              <span className="text-[8px] font-black uppercase tracking-tighter text-gray-400">{step.label}</span>
              
              {/* Pulsing effect */}
              <motion.div 
                animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                className="absolute inset-0 bg-cyan-500/10 rounded-2xl"
              />
            </motion.div>
            
            {i < steps.length - 1 && (
              <div className="flex flex-col md:flex-row items-center gap-1 flex-1">
                <motion.div 
                  animate={{ x: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                  className="hidden md:block w-full h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0"
                />
                <motion.div 
                  animate={{ y: [0, 10, 0], opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3 }}
                  className="md:hidden h-8 w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-3 bg-white/5 rounded-xl border border-white/5 text-[9px] text-gray-400 font-medium leading-relaxed italic">
        "Our system autonomously orchestrates multiple AI agents in realtime to emotionally engage fans during live matches."
      </div>
    </div>
  );
}
