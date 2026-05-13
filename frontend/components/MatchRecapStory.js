import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Share2, Download } from 'lucide-react';

export default function MatchRecapStory({ matchData, storyline }) {
  const recap = storyline || [
    "The match began with high tension, RCB winning the toss and electing to bat first.",
    "A massive momentum shift at over 17.4 defined the inning, with 26 runs scored in a single over.",
    "Viral energy peaked at 99% during the final delivery, a stunning six that sealed the victory.",
    "AI Analysis: Virat Kohli's tactical positioning in the death overs was the 88% win factor."
  ];

  return (
    <div className="glass-card p-10 border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <BookOpen size={120} className="text-purple-500" />
      </div>

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-1">AI Match Recap Story</h3>
            <p className="text-sm font-black text-white italic uppercase tracking-tighter">Cinematic Summary</p>
          </div>
          <Sparkles size={20} className="text-purple-400 animate-pulse" />
        </div>

        <div className="space-y-8 max-w-2xl">
          {recap.map((paragraph, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
              className="flex gap-6 items-start group"
            >
              <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-[10px] font-black text-purple-400 shrink-0 border border-purple-500/20">
                0{i + 1}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed italic group-hover:text-white transition-colors">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-white/5 flex flex-wrap gap-4">
          <button className="flex items-center gap-3 px-8 py-4 bg-purple-600 text-white rounded-xl text-[10px] font-black uppercase italic tracking-widest hover:bg-purple-500 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <Share2 size={16} /> Share Recap
          </button>
          <button className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-black uppercase italic tracking-widest hover:bg-white/10 transition-all">
            <Download size={16} /> Export HD Story
          </button>
        </div>
      </div>
    </div>
  );
}
