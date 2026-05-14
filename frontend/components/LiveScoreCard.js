import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import LiveBadge from './ui/LiveBadge';

export default function LiveScoreCard({ matchData }) {
  const { team1, team2, score, overs, target, status } = matchData || {
    team1: { name: 'RCB', score: '185/4' },
    team2: { name: 'CSK', score: '142/3' },
    overs: '15.4',
    target: '186',
    status: 'CSK need 44 runs in 26 balls'
  };

  return (
    <GlassCard className="p-8 relative overflow-hidden">
      <div className="absolute top-6 right-6">
        <LiveBadge text="LIVE PROJECTION" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        <div className="text-center flex-1 group">
          <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-foreground group-hover:scale-110 transition-transform">{team1.name}</h2>
          <p className="text-5xl font-black text-accent-primary neon-text">{team1.score}</p>
        </div>
        
        <div className="px-6 py-2 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl text-accent-primary font-black text-xl italic skew-x-[-12deg]">VS</div>

        <div className="text-center flex-1 group">
          <h2 className="text-4xl font-black italic tracking-tighter mb-2 text-foreground group-hover:scale-110 transition-transform">{team2.name}</h2>
          <p className="text-5xl font-black text-accent-secondary">{team2.score}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end border-t border-border pt-6 gap-6">
        <div className="w-full md:w-auto">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-1 font-black">Overs Processed</p>
          <p className="text-3xl font-mono font-black text-foreground italic">{overs}</p>
        </div>
        <div className="text-right w-full md:w-auto">
          <p className="text-sm font-black text-accent-primary mb-3 uppercase tracking-tight italic">"{status}"</p>
          <div className="h-2 w-full md:w-64 bg-white/5 dark:bg-black/20 rounded-full overflow-hidden border border-border">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '70%' }}
              className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_15px_rgba(0,242,255,0.3)]"
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
