import { motion } from 'framer-motion';
import { RecommendationEngine } from '../utils/RecommendationEngine';
import { Zap, Target, Star, Brain } from 'lucide-react';

export default function RecommendedContent() {
  const recommendations = RecommendationEngine.getRecommendations();

  return (
    <div className="glass-card p-8 border-cyan-500/20 bg-cyan-500/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">AI For You</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Recommended Quests</p>
        </div>
        <Brain size={20} className="text-cyan-400" />
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, i) => (
          <motion.div 
            key={rec.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-black/40 rounded-xl flex items-center justify-center text-cyan-500">
                {rec.type === 'Quiz' ? <Brain size={18} /> : rec.type === 'Poll' ? <Target size={18} /> : <Zap size={18} />}
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{rec.title}</h4>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-bold text-cyan-400 uppercase tracking-widest">{rec.reward}</span>
                  <span className="text-[8px] font-bold text-gray-600 uppercase tracking-widest">{rec.difficulty}</span>
                </div>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <Star size={14} className="text-cyan-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
