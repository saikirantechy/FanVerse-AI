'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import ProfileCard from '../../components/ProfileCard';
import FanDNAProfile from '../../components/FanDNAProfile';
import BackgroundParticles from '../../components/BackgroundParticles';
import { User, Shield, Zap, Award, Share2 } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import NeonButton from '../../components/ui/NeonButton';

export default function FanIdentityPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
              <User size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Fan <span className="text-accent-primary">Identity</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Your AI-Engineered Sports Legacy</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <NeonButton variant="cyan" className="px-8 py-3">
              <Share2 size={16} className="mr-2" /> Share Identity
            </NeonButton>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-4 space-y-6">
            <ProfileCard />
            <GlassCard className="p-8">
              <h3 className="text-sm font-black uppercase italic text-foreground mb-6 flex items-center gap-3">
                <Shield size={18} className="text-accent-primary" /> Clan Status
              </h3>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="w-12 h-12 bg-accent-secondary/20 rounded-xl flex items-center justify-center font-black italic text-accent-secondary text-xl">RD</div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-foreground">RCB Dominators</div>
                  <div className="text-[8px] font-black text-muted uppercase tracking-[0.2em] mt-1">Vanguard Rank</div>
                </div>
              </div>
            </GlassCard>
          </div>
          
          <div className="lg:col-span-8 space-y-8">
            <FanDNAProfile />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-8 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Zap size={60} className="text-accent-primary" />
                </div>
                <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Total XP Gained</h4>
                <div className="text-4xl font-black italic text-foreground">142,500</div>
                <p className="text-[9px] text-muted uppercase tracking-[0.2em] mt-2">+1,200 today from Live Arena</p>
              </GlassCard>

              <GlassCard className="p-8 relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Award size={60} className="text-accent-secondary" />
                </div>
                <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Unlocked Badges</h4>
                <div className="text-4xl font-black italic text-foreground">18 / 42</div>
                <p className="text-[9px] text-muted uppercase tracking-[0.2em] mt-2">Latest: 'Momentum Oracle'</p>
              </GlassCard>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-sm font-black uppercase italic text-foreground mb-8">AI Personality Insights</h3>
              <div className="space-y-6">
                {[
                  { label: "Strategic Depth", val: "High", desc: "You value long-term match dynamics over single boundaries." },
                  { label: "Emotional Energy", val: "Stable", desc: "You maintain tactical focus even during high-pressure wickets." },
                  { label: "Fan DNA", val: "The Oracle", desc: "AI identifies your style as a Predictive Analyst." }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-1.5" />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{s.label}:</span>
                        <span className="text-[10px] font-black text-accent-primary uppercase italic">{s.val}</span>
                      </div>
                      <p className="text-[9px] text-muted uppercase tracking-widest">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
