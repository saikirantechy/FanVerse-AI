'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import FanRewardStore from '../../components/FanRewardStore';
import SeasonPassport from '../../components/SeasonPassport';
import DailyChallenges from '../../components/DailyChallenges';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Gift, Zap, Star, Shield } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function RewardsStorePage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-[1800px] mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500">
              <Gift size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Vault <span className="text-pink-500">& Rewards</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Exchange XP for Elite Fan Assets</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/5 rounded-2xl">
            <Star className="text-pink-500" size={18} />
            <div>
              <div className="text-[8px] font-black text-muted uppercase tracking-widest">Available Balance</div>
              <div className="text-xl font-black italic text-foreground">12,450 XP</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-8 space-y-8">
            <FanRewardStore />
          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <SeasonPassport />
            <DailyChallenges />
            
            <GlassCard className="p-8 bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20">
              <Shield className="text-pink-500 mb-4" size={24} />
              <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Prestige Eligibility</h4>
              <p className="text-[9px] text-muted uppercase tracking-[0.2em] leading-relaxed">
                Reach Level 20 to unlock the 'Elite Oracle' badge and exclusive clan bonuses.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                </div>
                <span className="text-[10px] font-black text-foreground">75%</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
