import { motion, AnimatePresence } from 'framer-motion';

export default function AgentActivityMonitor({ agents }) {
  // Static list if no dynamic data
  const defaultAgents = [
    { id: 'match', name: 'MatchAgent', status: 'analyzing', icon: '🏏' },
    { id: 'narrative', name: 'NarrativeAgent', status: 'storytelling', icon: '🎬' },
    { id: 'commentary', name: 'CommentaryAgent', status: 'reacting', icon: '🎤' },
    { id: 'prediction', name: 'PredictionAgent', status: 'calculating', icon: '📈' },
    { id: 'behavior', name: 'BehaviorAgent', status: 'profiling', icon: '🧠' },
    { id: 'social', name: 'SocialAgent', status: 'monitoring', icon: '🌍' },
    { id: 'trivia', name: 'TriviaAgent', status: 'generating', icon: '🧠' },
    { id: 'insight', name: 'InsightAgent', status: 'reviewing', icon: '🔬' },
    { id: 'engagement', name: 'EngagementAgent', status: 'rewarding', icon: '🏆' },
  ];

  const displayAgents = agents || defaultAgents;

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Agent Orchestration Monitor</h3>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-cyan-500 rounded-full animate-ping" />
          <div className="w-1 h-1 bg-cyan-500 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {displayAgents.map((agent) => (
          <motion.div 
            key={agent.id}
            whileHover={{ scale: 1.05 }}
            className="p-3 bg-black/40 rounded-xl border border-white/5 flex flex-col items-center text-center relative overflow-hidden"
          >
            <div className="text-xl mb-1 opacity-80">{agent.icon}</div>
            <h4 className="text-[8px] font-black uppercase text-white tracking-tighter truncate w-full">
              {agent.name}
            </h4>
            <div className="mt-2 flex items-center gap-1">
              <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[6px] font-bold text-gray-500 uppercase tracking-widest">{agent.status}</span>
            </div>
            
            {/* Animated Scanning Effect */}
            <motion.div 
              animate={{ y: [-20, 60] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/30 blur-[2px]"
            />
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 flex items-center justify-between p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
        <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Global Sync Latency</span>
        <span className="text-[10px] font-black text-white italic">14ms</span>
      </div>
    </div>
  );
}
