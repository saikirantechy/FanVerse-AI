import GlassCard from './ui/GlassCard';
import { Calendar, PlayCircle } from 'lucide-react';

export default function MatchArchive() {
  const matches = [
    { id: 1, teams: 'MI vs RCB', date: 'May 12, 2026', result: 'RCB won by 4 wickets', highlight: 'Kohli 82*(45)' },
    { id: 2, teams: 'CSK vs GT', date: 'May 10, 2026', result: 'CSK won by 15 runs', highlight: 'Dhoni last over finish' },
    { id: 3, teams: 'LSG vs RR', date: 'May 08, 2026', result: 'RR won by 8 wickets', highlight: 'Butler century' },
    { id: 4, teams: 'KKR vs SRH', date: 'May 05, 2026', result: 'KKR won by 2 runs', highlight: 'Russell 5 wicket haul' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
      {matches.map((match) => (
        <GlassCard key={match.id} className="p-0 overflow-hidden group">
          <div className="relative h-40 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
            <PlayCircle size={48} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[8px] font-black uppercase text-white">
              <Calendar size={10} /> {match.date}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-black italic uppercase text-foreground mb-2">{match.teams}</h3>
            <p className="text-sm font-medium text-accent-primary mb-4">{match.result}</p>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <p className="text-[10px] text-muted uppercase tracking-widest font-black">AI Highlight</p>
              <p className="text-xs text-gray-300 italic">"{match.highlight}"</p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
