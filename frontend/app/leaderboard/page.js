'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import ReputationLeaderboard from '../../components/ReputationLeaderboard';
import PredictionLeaderboard from '../../components/PredictionLeaderboard';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Trophy, Award, TrendingUp, Users } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function LeaderboardArenaPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-yellow-500">
              <Trophy size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                The <span className="text-yellow-500">Global</span> Arena
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Where Legends are forged in AI data</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
              <Award className="text-yellow-500" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Fan Reputation Rankings</span>
            </div>
            <ReputationLeaderboard />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-2xl">
              <TrendingUp className="text-accent-primary" size={18} />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Tactical Prediction Elites</span>
            </div>
            <PredictionLeaderboard isOpen={true} onClose={() => {}} inline={true} />
          </div>
        </div>

        {/* Global Stats Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10 pt-12">
          {[
            { label: "Total Active Fans", val: "1.2M", icon: Users },
            { label: "AI Predictions", val: "420K", icon: TrendingUp },
            { label: "Clan Battles", val: "12,400", icon: Trophy },
            { label: "Arena Prestige", val: "Top 1%", icon: Award }
          ].map((s, i) => (
            <GlassCard key={i} className="p-6 text-center">
              <s.icon className="mx-auto mb-3 text-muted/50" size={16} />
              <div className="text-2xl font-black italic text-foreground leading-none">{s.val}</div>
              <div className="text-[8px] font-black text-muted uppercase tracking-[0.2em] mt-2">{s.label}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
