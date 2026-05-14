'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import ClanSystem from '../../components/ClanSystem';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Shield, Users, Trophy, Zap } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function ClanSystemPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-accent-secondary">
              <Shield size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Clan <span className="text-accent-secondary">Fortress</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Strategic Brotherhood & Rivalry</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-8">
            <ClanSystem />
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <GlassCard className="p-8 bg-gradient-to-br from-accent-secondary/10 to-transparent border-accent-secondary/20">
              <Users className="text-accent-secondary mb-4" size={32} />
              <h4 className="text-sm font-black uppercase italic text-foreground mb-2">Global Clan War</h4>
              <p className="text-[10px] text-muted uppercase tracking-widest leading-relaxed">
                Clans are currently battling for the 'Vanguard' Season Trophy. Join the frontlines.
              </p>
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <div className="text-2xl font-black italic text-foreground">#12</div>
                  <div className="text-[8px] font-black text-muted uppercase tracking-[0.2em] mt-1">Global Clan Rank</div>
                </div>
                <button className="px-6 py-3 bg-accent-secondary text-black text-[10px] font-black uppercase italic rounded-xl">View War Map</button>
              </div>
            </GlassCard>

            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted pl-4">Elite Clans</h3>
              {[
                { name: "MI Legends", power: 98, icon: "⚔️" },
                { name: "CSK Stars", power: 95, icon: "🛡️" },
                { name: "KKR Kings", power: 92, icon: "🔥" }
              ].map((clan, i) => (
                <GlassCard key={i} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{clan.icon}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground">{clan.name}</span>
                  </div>
                  <span className="text-[10px] font-black text-accent-secondary">{clan.power} PWR</span>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
