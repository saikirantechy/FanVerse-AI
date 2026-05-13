import { motion } from 'framer-motion';
import { Mic, Brain, FastForward, Rewind } from 'lucide-react';

export default function AIReplayCommentary({ matchId }) {
  const insights = [
    { time: '17.4 Over', text: "Critical momentum shift detected. The high-risk batting choice here had a 22% success probability, yet yielded 6 runs.", type: 'Analysis' },
    { time: '19.2 Over', text: "BowlMaster Agent suggests a yorker was the optimal choice, but the slower ball induced the false shot.", type: 'Tactical' },
    { time: 'End of Match', text: "Historical parallel identified: 2019 WC Final. Emotional volatility reached 98% in the final delivery.", type: 'Narrative' },
  ];

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-cyan-500/5">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">AI Hindsight Commentary</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Retrospective Analysis</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-gray-500 hover:text-white"><Rewind size={16} /></button>
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-gray-500 hover:text-white"><Mic size={16} /></button>
          <button className="p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all text-gray-500 hover:text-white"><FastForward size={16} /></button>
        </div>
      </div>

      <div className="space-y-6">
        {insights.map((insight, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex gap-6 p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-cyan-500/30 transition-all"
          >
            <div className="w-16 text-right">
              <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{insight.time}</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[8px] font-black text-cyan-500 uppercase tracking-widest">{insight.type}</span>
                <div className="h-[1px] flex-1 bg-white/5" />
              </div>
              <p className="text-xs text-gray-300 leading-relaxed italic group-hover:text-white transition-colors">
                "{insight.text}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20 flex items-center gap-4">
        <Brain className="text-cyan-400 animate-pulse" size={20} />
        <p className="text-[9px] text-cyan-100/70 font-medium uppercase tracking-widest leading-relaxed">
          The Hindsight Engine has analyzed 12,400 data points for this match.
        </p>
      </div>
    </div>
  );
}
