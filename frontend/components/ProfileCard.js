import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';

export default function ProfileCard() {
  const stats = [
    { label: 'XP', value: '12,450' },
    { label: 'Coins', value: '2,840', color: 'text-accent-primary' },
    { label: 'Streak', value: '5 Days' },
  ];

  const badges = [
    { icon: '🎯', name: 'Oracle', color: 'text-accent-primary' },
    { icon: '🔥', name: 'Viral', color: 'text-orange-500' },
    { icon: '👑', name: 'Legend', color: 'text-yellow-400' },
    { icon: '🚀', name: 'Momentum', color: 'text-purple-400' },
  ];

  return (
    <GlassCard className="p-8 border-accent-primary/10">
      <div className="flex items-center gap-5 mb-8">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-accent-primary to-accent-secondary p-0.5 shadow-[0_0_30px_rgba(0,242,255,0.2)]">
          <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center text-3xl font-black italic border border-white/10 text-foreground">
            SK
          </div>
        </div>
        <div>
          <h3 className="text-xl font-black italic tracking-tighter uppercase leading-none mb-1 text-foreground">Legendary Captain</h3>
          <p className="text-[10px] font-black text-accent-primary uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-primary rounded-full animate-pulse"></span>
            Level 12 Fan Analyst
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-muted">
          <span>Season Progress</span>
          <span className="text-foreground">12,480 / 15,000 XP</span>
        </div>
        <div className="h-2 w-full bg-white/5 dark:bg-black/20 rounded-full overflow-hidden border border-border">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '83%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary shadow-[0_0_15px_rgba(0,242,255,0.3)]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/5 dark:bg-white/2 p-3 rounded-2xl text-center border border-border">
            <p className="text-[9px] font-black text-muted uppercase tracking-tighter mb-1">{stat.label}</p>
            <p className={`text-sm font-black italic ${stat.color || 'text-foreground'}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-4">Top Badges</p>
        <div className="flex gap-3">
          {badges.map((badge) => (
            <motion.div 
              key={badge.name}
              whileHover={{ y: -5, scale: 1.1 }}
              className={`w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/2 border border-border flex flex-col items-center justify-center cursor-help shadow-lg hover:border-accent-primary/30 transition-all ${badge.color}`}
              title={badge.name}
            >
              <span className="text-lg">{badge.icon}</span>
              <span className="text-[7px] font-black uppercase text-muted mt-1">{badge.name}</span>
            </motion.div>
          ))}
          <div className="w-12 h-12 rounded-2xl border border-dashed border-border flex items-center justify-center text-xs text-muted">
            +12
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
