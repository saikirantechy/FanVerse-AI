'use client';

import DashboardLayout from '../../components/layout/DashboardLayout';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Info, Cpu, Database, Cloud, Zap, Shield } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';

export default function AboutProjectPage() {
  const techStack = [
    { name: "Next.js 14", icon: Zap, desc: "Framework for high-performance frontend orchestration." },
    { name: "Gemini Pro", icon: Cpu, desc: "Agentic AI intelligence for commentary and analysis." },
    { name: "Firebase", icon: Database, desc: "Realtime data sync and cloud functions backend." },
    { name: "Google Cloud", icon: Cloud, desc: "Scalable infrastructure for multi-agent workflows." },
    { name: "Framer Motion", icon: Zap, desc: "Cinematic animations and broadcast-grade UI." },
    { name: "Tailwind CSS", icon: Shield, desc: "Professional adaptive design system." }
  ];

  return (
    <DashboardLayout>
      <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-16 relative">
        <BackgroundParticles />
        
        <header className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-accent-primary">
              <Info size={28} />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-foreground">
                The <span className="text-accent-primary">Vision</span>
              </h1>
              <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">Behind the FanVerse AI Metaverse</p>
            </div>
          </div>
        </header>

        <section className="relative z-10 prose prose-invert max-w-none">
          <p className="text-xl text-muted leading-relaxed italic">
            "FanVerse AI was born from a simple question: What if the broadcast didn't just talk to you, but evolved with you?"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-foreground">Agentic Orchestration</h3>
              <p className="text-sm text-muted leading-relaxed">
                Unlike traditional sports apps that rely on static data feeds, FanVerse AI employs a swarm of autonomous agents. Each agent specializes in a different dimension of the fan experience—from emotional commentary to tactical analysis and social energy.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-foreground">Adaptive Gamification</h3>
              <p className="text-sm text-muted leading-relaxed">
                Your 'Fan Identity' is not a profile—it's a living data model. By analyzing your reactions, quiz performance, and prediction style, our AI models adapt the difficulty, rewards, and narrative arc of the match specifically for you.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-10 space-y-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted text-center">Engineered with Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStack.map((tech) => (
              <GlassCard key={tech.name} className="p-8 text-center hover:border-accent-primary/30 transition-all">
                <tech.icon className="mx-auto mb-4 text-accent-primary" size={24} />
                <h4 className="text-sm font-black uppercase italic text-foreground mb-2">{tech.name}</h4>
                <p className="text-[10px] text-muted uppercase tracking-widest leading-relaxed">{tech.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
