'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BackgroundParticles from '../components/BackgroundParticles';
import { Cpu, Zap, Trophy, Brain, Target, Share2, Users, Database } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import LiveBadge from '../components/ui/LiveBadge';

export default function LandingPage() {
  const features = [
    { icon: Brain, title: "Multi-Agent Intelligence", desc: "11 autonomous agents collaborating in realtime to orchestrate your experience." },
    { icon: Zap, title: "Momentum Analytics", desc: "Live energy tracking and pressure gauges powered by Google Cloud & Gemini." },
    { icon: Trophy, title: "Arena Progression", desc: "Climb from Rookie to Legend through tactical quizzes and clan rivalries." },
    { icon: Target, title: "Predictive Gaming", desc: "Smart prediction economy with virtual coin rewards and seasonal leaderboards." },
    { icon: Share2, title: "Identity Forge", desc: "AI-generated fan personas and shareable identity cards for the metaverse." },
    { icon: Database, title: "Historical Archive", desc: "Relive historic matches with AI commentary and tactical post-match recaps." },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundParticles />
      
      {/* Background Cinematic Glows */}
      <div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent-primary/15 rounded-full blur-[150px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent-secondary/15 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 md:px-10 max-w-7xl mx-auto z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-center">
            <LiveBadge text="AGENTIC METAVERSE ACTIVE" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-tight text-foreground">
            The AI Powered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-pink-500">
              Sports Metaverse
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            FanVerse AI transforms passive viewing into a cinematic, AI-orchestrated interactive experience. Join thousands of fans in the world's first agentic sports ecosystem.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
            <Link href="/live">
              <NeonButton variant="primary" className="px-12 py-6 text-sm">
                Enter Live Arena
              </NeonButton>
            </Link>
            <Link href="/about">
              <button className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase italic tracking-widest hover:bg-white/10 transition-all">
                View Architecture
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-10 h-full border-white/5 hover:border-accent-primary/30 transition-all group">
                <f.icon className="w-10 h-10 text-accent-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black uppercase italic text-foreground mb-4">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack / Orchestration Section */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto z-10 bg-accent-primary/5 rounded-[4rem] border border-accent-primary/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black italic uppercase text-foreground mb-4">
            Orchestrated by <span className="text-accent-primary">Agents</span>
          </h2>
          <p className="text-muted text-sm uppercase tracking-[0.3em] font-black">Multi-Agent Intelligence Flow</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {["MatchAgent", "CommentaryAgent", "PredictionAgent", "SocialAgent", "InsightAgent", "BehaviorAgent", "TriviaAgent", "EngagementAgent", "NarrativeAgent", "RecommendationAgent"].map((agent, i) => (
            <div key={agent} className="px-6 py-4 bg-black/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-3">
              <Cpu size={16} className="text-accent-secondary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-foreground/80">{agent}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Social / Join CTA */}
      <section className="py-32 px-6 md:px-10 text-center z-10">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase text-foreground mb-12">
          Ready to Claim Your <span className="text-accent-secondary">Legacy</span>?
        </h2>
        <Link href="/live">
          <button className="group relative px-16 py-8 bg-accent-primary text-black font-black uppercase italic tracking-tighter text-2xl rounded-3xl overflow-hidden hover:scale-105 transition-all">
            <span className="relative z-10">Join the FanVerse</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50" />
          </button>
        </Link>
        <p className="mt-8 text-[10px] font-black text-muted uppercase tracking-[0.4em]">
          Powered by Gemini Pro & Google Cloud
        </p>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border text-center text-[10px] font-black text-muted uppercase tracking-widest opacity-50">
        &copy; 2026 FanVerse AI Sports Metaverse. All rights reserved.
      </footer>
    </main>
  );
}
