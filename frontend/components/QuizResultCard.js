import { motion } from 'framer-motion';
import { Trophy, Star, TrendingUp, Share2 } from 'lucide-react';

export default function QuizResultCard({ score, accuracy, level, onAction }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-12 border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Trophy size={120} className="text-cyan-500" />
      </div>

      <div className="relative z-10 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
          <Star size={48} fill="white" className="text-white" />
        </div>

        <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white mb-4">Master Class!</h2>
        <p className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-12">Level Up: {level}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Total XP</p>
            <p className="text-4xl font-black text-white italic">+{score}</p>
          </div>
          <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Accuracy</p>
            <p className="text-4xl font-black text-white italic">{accuracy}%</p>
          </div>
          <div className="p-8 bg-white/5 rounded-[40px] border border-white/5">
            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Streak</p>
            <p className="text-4xl font-black text-orange-500 italic">x5</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={() => onAction?.('next')}
            className="flex-1 py-5 bg-cyan-500 text-black font-black uppercase italic tracking-widest rounded-2xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3"
          >
            <TrendingUp size={20} /> Continue Journey
          </button>
          <button 
            onClick={() => onAction?.('share')}
            className="px-10 py-5 bg-white/5 border border-white/10 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
          >
            <Share2 size={20} /> Share Result
          </button>
        </div>
      </div>
    </div>
  );
}
