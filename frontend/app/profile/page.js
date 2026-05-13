'use client';

import Navbar from '../../components/Navbar';
import ProfileCard from '../../components/ProfileCard';
import FanDNAProfile from '../../components/FanDNAProfile';
import SeasonPassport from '../../components/SeasonPassport';
import AchievementToast from '../../components/AchievementToast';
import BroadcastTicker from '../../components/BroadcastTicker';
import { motion } from 'framer-motion';
import { useFirestoreMatch } from '../../hooks/useFirestoreMatch';

export default function ProfilePage() {
  const { data: liveData } = useFirestoreMatch("match_001");

  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-12 pb-32">
        <header className="mb-12">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
            Fan <span className="text-cyan-500">Identity</span>
          </h1>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">
            Your AI-Native Achievement Journey
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Core Info */}
          <div className="lg:col-span-4 space-y-8">
            <ProfileCard />
            <FanDNAProfile dna={liveData?.fan_dna} />
          </div>

          {/* Right Column - Progression & Analytics */}
          <div className="lg:col-span-8 space-y-8">
            <SeasonPassport />
            
            {/* Achievement Gallery */}
            <div className="glass-card p-8 border-white/5 bg-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Achievement Gallery</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                {[
                  { icon: '🎯', name: 'Oracle' }, { icon: '🔥', name: 'Viral' }, 
                  { icon: '👑', name: 'Legend' }, { icon: '🚀', name: 'Momentum' },
                  { icon: '🏏', name: 'Century' }, { icon: '🧠', name: 'Genius' },
                  { icon: '🛡️', name: 'Shield' }, { icon: '✨', name: 'Star' }
                ].map((badge, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-xl grayscale hover:grayscale-0 transition-all cursor-help" title={badge.name}>
                      {badge.icon}
                    </div>
                    <span className="text-[6px] font-black uppercase text-gray-600">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Match History */}
            <div className="glass-card p-8 border-white/5 bg-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6">Match History</h3>
              <div className="space-y-4">
                {[
                  { match: 'CSK vs RCB', date: 'Yesterday', result: 'WIN', xp: '+1,420', coins: '+250' },
                  { match: 'MI vs GT', date: '2 days ago', result: 'LOSS', xp: '+850', coins: '+120' },
                  { match: 'KKR vs LSG', date: '3 days ago', result: 'WIN', xp: '+1,200', coins: '+210' },
                ].map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5">
                    <div>
                      <h4 className="text-sm font-black uppercase italic text-white leading-tight">{m.match}</h4>
                      <p className="text-[8px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">{m.date} • {m.result}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-cyan-400">{m.xp} XP</div>
                      <div className="text-[8px] font-black text-yellow-500 uppercase tracking-widest">{m.coins} Coins</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tactical Reputation Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 border-green-500/20 bg-green-500/5">
                <h4 className="text-[8px] font-black text-green-500 uppercase tracking-widest mb-4">Prediction Accuracy</h4>
                <div className="text-3xl font-black italic italic">78.4%</div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Top 5% Globally</p>
              </div>
              <div className="glass-card p-6 border-blue-500/20 bg-blue-500/5">
                <h4 className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-4">Trivia Speed</h4>
                <div className="text-3xl font-black italic italic">1.2s</div>
                <p className="text-[10px] text-gray-500 mt-2 uppercase font-bold tracking-widest">Master Level</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BroadcastTicker />
    </main>
  );
}
