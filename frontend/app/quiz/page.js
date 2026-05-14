'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import QuizArena from '../../components/QuizArena';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Brain, Zap, Trophy } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function QuizArenaPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
              <Brain size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Quiz <span className="text-accent-primary">Arena</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Tactical Knowledge Battleground</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          <div className="lg:col-span-2">
            <QuizArena />
          </div>
          
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h3 className="text-lg font-black uppercase italic text-foreground mb-6 flex items-center gap-3">
                <Zap size={18} className="text-accent-secondary" /> Daily Missions
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Predict 3 boundaries", xp: "+500 XP" },
                  { label: "Win 2 tactical quizzes", xp: "+1200 XP" },
                  { label: "Share your rank", xp: "+200 XP" }
                ].map((m, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex justify-between items-center">
                    <span className="text-[10px] font-bold text-foreground/80 uppercase">{m.label}</span>
                    <span className="text-[10px] font-black text-accent-primary">{m.xp}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 bg-gradient-to-br from-accent-primary/10 to-transparent border-accent-primary/20">
              <Trophy className="text-accent-primary mb-4" size={32} />
              <h4 className="text-sm font-black uppercase italic text-foreground mb-2">Quiz Champion Rank</h4>
              <p className="text-[10px] text-muted uppercase tracking-widest leading-relaxed">You are in the top 12% of tactical fans this season.</p>
              <div className="mt-6 h-2 bg-black/40 rounded-full overflow-hidden">
                <div className="w-[88%] h-full bg-accent-primary shadow-[0_0_10px_var(--accent)]" />
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
