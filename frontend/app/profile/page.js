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
            
            {/* XP Analytics Chart (Visual Mock) */}
            <div className="glass-card p-8 border-white/5 bg-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-8">XP Engagement Analytics</h3>
              
              <div className="h-64 flex items-end gap-2 px-4">
                {[40, 70, 45, 90, 65, 80, 100, 55, 75, 85].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-500 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h*12} XP
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-6 px-4 text-[8px] font-black text-gray-600 uppercase tracking-widest">
                <span>Match 1</span>
                <span>Match 5</span>
                <span>Match 10 (Current)</span>
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
