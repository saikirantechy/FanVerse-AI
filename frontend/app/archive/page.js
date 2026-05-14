'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import MatchArchive from '../../components/MatchArchive';
import BackgroundParticles from '../../components/BackgroundParticles';
import { History, Calendar, Search } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function MatchArchivePage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-6xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-accent-secondary">
              <History size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Match <span className="text-accent-secondary">Archive</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Relive Historic AI-Orchestrated Moments</p>
            </div>
          </div>
          
          <div className="relative group w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted group-hover:text-accent-secondary transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="SEARCH PAST MATCHES..." 
              className="w-full bg-card/40 border border-border rounded-2xl py-4 pl-12 pr-6 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-accent-secondary/50 transition-all"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 relative z-10">
          <MatchArchive />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-8">
              <Calendar className="text-accent-secondary mb-4" size={24} />
              <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Season 1 Recap</h4>
              <p className="text-[9px] text-muted uppercase tracking-[0.2em] leading-relaxed">24 matches archived with full AI commentary and tactical data.</p>
            </GlassCard>
            <GlassCard className="p-8">
              <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Total Highights</h4>
              <div className="text-3xl font-black italic text-accent-secondary">1,240+</div>
              <p className="text-[9px] text-muted uppercase tracking-[0.2em] mt-2">AI-Generated Viral Moments</p>
            </GlassCard>
            <GlassCard className="p-8 bg-accent-secondary/5 border-accent-secondary/20">
              <h4 className="text-xs font-black uppercase italic text-foreground mb-2">Replay Intelligence</h4>
              <p className="text-[9px] text-muted uppercase tracking-[0.2em] leading-relaxed">Agentic AI can regenerate commentary for any match in the database.</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
