'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GlassCard from '../../components/ui/GlassCard';
import { Award, Trophy, TrendingUp } from 'lucide-react';

export default function LeaderboardPage() {
  const topFans = [
    { rank: 1, name: 'Virat_King_18', xp: '142,500', clan: 'RCB Dominators', avatar: '🦁' },
    { rank: 2, name: 'MSD_Finisher', xp: '138,200', clan: 'CSK Superstars', avatar: '🚁' },
    { rank: 3, name: 'Rohit_Hitman', xp: '135,400', clan: 'MI Legends', avatar: '🏏' },
    { rank: 4, name: 'Sky_Surya', xp: '128,900', clan: 'MI Legends', avatar: '🔥' },
    { rank: 5, name: 'Jadeja_Sir', xp: '125,600', clan: 'CSK Superstars', avatar: '⚔️' },
  ];

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 text-foreground">
              Global <span className="text-accent-primary">Arena</span>
            </h1>
            <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">
              The World's Elite Fan Leaderboard
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-card border border-border rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-accent-primary/30 transition-all">Season 1</button>
            <button className="px-6 py-3 bg-accent-primary text-black rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.3)]">Global</button>
          </div>
        </header>

        {/* Podium Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end pt-12">
          {/* Rank 2 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-col items-center order-2 md:order-1">
            <div className="text-4xl mb-4">🥈</div>
            <div className="w-full bg-card border border-border rounded-t-4xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] font-black text-muted uppercase mb-2">Rank 2</div>
              <div className="text-lg font-black uppercase italic mb-1 text-foreground">{topFans[1].name}</div>
              <div className="text-sm font-black text-accent-primary uppercase tracking-widest">{topFans[1].xp} XP</div>
            </div>
          </motion.div>

          {/* Rank 1 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center order-1 md:order-2">
            <div className="text-6xl mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-bounce">👑</div>
            <div className="w-full bg-gradient-to-t from-accent-primary/20 to-accent-primary/10 border-2 border-accent-primary/30 rounded-t-5xl p-10 text-center shadow-[0_0_50px_rgba(0,242,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-primary" />
              <div className="text-xs font-black text-accent-primary uppercase mb-3">🏆 Season King</div>
              <div className="text-2xl font-black uppercase italic mb-1 text-foreground">{topFans[0].name}</div>
              <div className="text-lg font-black text-foreground uppercase tracking-widest">{topFans[0].xp} XP</div>
            </div>
          </motion.div>

          {/* Rank 3 */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col items-center order-3">
            <div className="text-4xl mb-4">🥉</div>
            <div className="w-full bg-card border border-border rounded-t-4xl p-8 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] font-black text-muted uppercase mb-2">Rank 3</div>
              <div className="text-lg font-black uppercase italic mb-1 text-foreground">{topFans[2].name}</div>
              <div className="text-sm font-black text-accent-secondary uppercase tracking-widest">{topFans[2].xp} XP</div>
            </div>
          </motion.div>
        </div>

        {/* Full List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {topFans.slice(3).map((fan, i) => (
            <GlassCard key={fan.name} className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="text-xl font-black italic text-muted w-8">#{fan.rank}</div>
                <div className="text-3xl">{fan.avatar}</div>
                <div>
                  <h4 className="text-lg font-black uppercase italic text-foreground leading-tight">{fan.name}</h4>
                  <p className="text-[10px] font-black text-accent-primary uppercase tracking-widest mt-0.5">{fan.clan}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-black text-foreground">{fan.xp}</div>
                <div className="text-[10px] font-black text-muted uppercase tracking-widest">Total Season XP</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </main>
  );
}
