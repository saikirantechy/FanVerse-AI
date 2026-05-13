'use client';

import { useState } from 'react';
import QuizArena from '../../components/QuizArena';
import MegaLeaderboard from '../../components/MegaLeaderboard';
import MatchArchive from '../../components/MatchArchive';
import BackgroundParticles from '../../components/BackgroundParticles';
import { Trophy, Star, Shield, Zap, History, LayoutGrid } from 'lucide-react';

export default function ArenaPage() {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState('arena'); // 'arena', 'leaderboard', 'archive'

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-[var(--background)] overflow-hidden">
      <BackgroundParticles />
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-4 mb-16">
          {[
            { id: 'arena', label: 'Quiz Arena', icon: <Zap size={16} /> },
            { id: 'leaderboard', label: 'Global Ranks', icon: <Trophy size={16} /> },
            { id: 'archive', label: 'Match Archive', icon: <History size={16} /> },
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-[10px] font-black uppercase italic tracking-widest border transition-all ${
                activeTab === tab.id ? 'bg-cyan-500 text-black border-cyan-500' : 'bg-white/5 text-gray-500 border-white/5 hover:border-white/20'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'arena' && (
          <div className="max-w-4xl mx-auto">
            {!isActive ? (
              <div className="text-center space-y-12">
                <div>
                  <h1 className="text-7xl font-black italic uppercase tracking-tighter text-white mb-4">
                    The <span className="text-cyan-500">Arena</span>
                  </h1>
                  <p className="text-gray-400 font-medium max-w-xl mx-auto">
                    Test your tactical depth, match rule mastery, and historical knowledge. Level up to become a <span className="text-white italic">Hall of Fame Fan</span>.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Rookie Fan', icon: <Zap />, status: 'Unlocked', color: 'text-green-500' },
                    { label: 'Match Analyst', icon: <Shield />, status: 'Locked', color: 'text-gray-600' },
                    { label: 'Elite Strategist', icon: <Trophy />, status: 'Locked', color: 'text-gray-600' },
                  ].map((tier) => (
                    <div key={tier.label} className="glass-card p-8 border-white/5 bg-white/5 flex flex-col items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${tier.color}`}>
                        {tier.icon}
                      </div>
                      <h3 className="text-xs font-black uppercase text-white tracking-widest">{tier.label}</h3>
                      <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 ${tier.color}`}>
                        {tier.status}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsActive(true)}
                  className="px-12 py-6 bg-cyan-500 text-black font-black uppercase italic tracking-[0.2em] rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(6,182,212,0.3)] group"
                >
                  Enter Rookie Arena
                  <span className="ml-4 group-hover:translate-x-2 transition-transform inline-block">→</span>
                </button>
              </div>
            ) : (
              <QuizArena onComplete={() => setIsActive(false)} />
            )}
          </div>
        )}

        {activeTab === 'leaderboard' && <MegaLeaderboard />}
        {activeTab === 'archive' && <MatchArchive />}
      </div>
    </main>
  );
}
    </main>
  );
}
