'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import FieldHeatmap from '../../components/FieldHeatmap';
import TeamDynamics from '../../components/TeamDynamics';
import SquadComparison from '../../components/SquadComparison';
import AgentFlowDiagram from '../../components/AgentFlowDiagram';
import InteractionHeatmap from '../../components/InteractionHeatmap';
import BackgroundParticles from '../../components/BackgroundParticles';
import { BarChart3, Cpu, Target, Zap } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function AIInsightsPage() {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-7xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
              <BarChart3 size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Tactical <span className="text-accent-primary">Insights</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Deep-Data Multi-Agent Analysis</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FieldHeatmap />
              <InteractionHeatmap />
            </div>
            <AgentFlowDiagram />
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <TeamDynamics />
            <SquadComparison />
            
            <GlassCard className="p-8 bg-black/40 border-white/5">
              <h3 className="text-xs font-black uppercase italic text-foreground mb-6 flex items-center gap-3">
                <Cpu size={16} className="text-accent-primary" /> Active Orchestration
              </h3>
              <div className="space-y-4">
                {[
                  { agent: "InsightAgent", status: "Calculating pressure curves", val: "94%" },
                  { agent: "MatchAgent", status: "Tracking player impact", val: "100%" },
                  { agent: "BehaviorAgent", status: "Syncing fan personality", val: "88%" }
                ].map((a, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-xl border border-white/5">
                    <div>
                      <div className="text-[10px] font-black text-foreground uppercase">{a.agent}</div>
                      <div className="text-[8px] font-medium text-muted uppercase mt-0.5">{a.status}</div>
                    </div>
                    <div className="text-[10px] font-black text-accent-primary italic">{a.val}</div>
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
