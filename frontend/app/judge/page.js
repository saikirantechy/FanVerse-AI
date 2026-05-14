'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import BackgroundParticles from '../../components/BackgroundParticles';
import GlassCard from '../../components/ui/GlassCard';
import NeonButton from '../../components/ui/NeonButton';
import { ShieldCheck, Zap, AlertTriangle, Play, RefreshCw, Trophy } from 'lucide-react';
import { useState } from 'react';

export default function JudgePanelPage() {
  const [logs, setLogs] = useState([
    { time: '14:05:22', msg: 'MatchAgent initialized successfully.' },
    { time: '14:05:24', msg: 'CommentaryAgent syncing with live stream.' }
  ]);

  const addLog = (msg) => {
    const time = new Date().toLocaleTimeString();
    setLogs(prev => [{ time, msg }, ...prev].slice(0, 10));
  };

  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-12 relative">
        <BackgroundParticles />
        
        <header className="relative z-10 flex justify-between items-end">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                Judge <span className="text-red-500">Panel</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Administrative Agent Orchestration</p>
            </div>
          </div>
          <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Live Override Mode</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Controls */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h3 className="text-sm font-black uppercase italic text-foreground mb-8 flex items-center gap-3">
                <Play size={18} className="text-red-500" /> Manual Triggers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Trigger SIX", color: "primary" },
                  { label: "Trigger WICKET", color: "secondary" },
                  { label: "Viral Moment", color: "cyan" },
                  { label: "Reset Match", color: "primary" }
                ].map((btn) => (
                  <NeonButton 
                    key={btn.label} 
                    variant={btn.color} 
                    className="py-4 text-[9px]"
                    onClick={() => addLog(`User triggered: ${btn.label}`)}
                  >
                    {btn.label}
                  </NeonButton>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-8 bg-black/40 border-red-500/20">
              <h3 className="text-sm font-black uppercase italic text-foreground mb-6 flex items-center gap-3">
                <AlertTriangle size={18} className="text-red-500" /> System Overrides
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                  <span className="text-[10px] font-bold text-muted uppercase">Mock Simulation Speed</span>
                  <span className="text-[10px] font-black text-foreground">1.5x</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-2xl">
                  <span className="text-[10px] font-bold text-muted uppercase">Gemini Temperature</span>
                  <span className="text-[10px] font-black text-foreground">0.8</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Logs */}
          <div className="space-y-6">
            <GlassCard className="p-8 h-full flex flex-col">
              <h3 className="text-sm font-black uppercase italic text-foreground mb-6 flex items-center gap-3">
                <RefreshCw size={18} className="text-red-500 animate-spin-slow" /> Realtime Activity Logs
              </h3>
              <div className="flex-1 space-y-3 font-mono">
                {logs.map((log, i) => (
                  <div key={i} className="text-[10px] flex gap-4 border-b border-white/5 pb-2 last:border-0">
                    <span className="text-muted shrink-0">[{log.time}]</span>
                    <span className="text-foreground/80">{log.msg}</span>
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
