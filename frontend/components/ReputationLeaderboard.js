import GlassCard from './ui/GlassCard';
import { Award, ShieldCheck } from 'lucide-react';

export default function ReputationLeaderboard() {
  const users = [
    { rank: 1, name: 'CricketGuru_007', rep: 9800, badge: 'Elite Oracle', level: 52 },
    { rank: 2, name: 'AgentFan_99', rep: 8500, badge: 'Master Tactician', level: 48 },
    { rank: 3, name: 'MumbaiKing', rep: 7200, badge: 'Veteran', level: 41 },
    { rank: 4, name: 'KohliFanatic', rep: 6900, badge: 'Veteran', level: 38 },
    { rank: 5, name: 'AI_Predictor', rep: 6100, badge: 'Rising Star', level: 32 },
  ];

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-1">Fan Reputation</h3>
          <h2 className="text-xl font-black italic uppercase text-foreground">Global Influence</h2>
        </div>
        <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20">
          <Award size={20} />
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.rank} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center font-black text-xs italic text-purple-400 border border-purple-500/20">
              #{user.rank}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-white">{user.name}</p>
                <ShieldCheck size={12} className="text-cyan-400" />
              </div>
              <p className="text-[10px] font-black text-muted uppercase tracking-widest">{user.badge}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-purple-400">{user.rep.toLocaleString()} pts</p>
              <p className="text-[8px] font-black text-gray-500 uppercase">LVL {user.level}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
