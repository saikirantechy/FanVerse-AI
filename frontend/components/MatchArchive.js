import { motion } from 'framer-motion';
import { PlayCircle, History, Calendar, Star } from 'lucide-react';

export default function MatchArchive() {
  const matches = [
    { id: 'h1', teams: 'CSK vs RCB', date: 'May 12, 2024', result: 'RCB won by 27 runs', highlights: 'Emotional final over thriller' },
    { id: 'h2', teams: 'MI vs KKR', date: 'May 10, 2024', result: 'KKR won by 18 runs', highlights: 'Tactical bowling masterclass' },
    { id: 'h3', teams: 'GT vs SRH', date: 'May 08, 2024', result: 'GT won by 3 wickets', highlights: 'Last ball finish' },
  ];

  return (
    <div className="glass-card p-8 border-white/5 bg-white/5">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Historical Match Archive</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">AI Match Replay Engine</p>
        </div>
        <History size={20} className="text-gray-500" />
      </div>

      <div className="space-y-6">
        {matches.map((match, i) => (
          <motion.div 
            key={match.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <PlayCircle size={24} />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">{match.teams}</h4>
                <div className="flex items-center gap-3 text-[8px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar size={10} /> {match.date}</span>
                  <span className="text-cyan-500 italic">{match.result}</span>
                </div>
              </div>
            </div>
            
            <div className="text-right hidden md:block">
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">AI Context</p>
              <p className="text-[10px] font-bold text-white italic">{match.highlights}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
        <button className="flex items-center gap-3 text-[10px] font-black text-cyan-400 uppercase tracking-widest hover:text-white transition-colors">
          Search Complete Match History <Star size={12} />
        </button>
      </div>
    </div>
  );
}
