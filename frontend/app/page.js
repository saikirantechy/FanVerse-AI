'use client';

import Navbar from '../components/Navbar';
import LiveScoreCard from '../components/LiveScoreCard';
import CommentaryFeed from '../components/CommentaryFeed';
import MomentumMeter from '../components/MomentumMeter';
import PredictionPoll from '../components/PredictionPoll';
import Leaderboard from '../components/Leaderboard';
import AIChatPanel from '../components/AIChatPanel';
import { motion, AnimatePresence } from 'framer-motion';
import { useMatch } from '../hooks/useMatch';

export default function Home() {
  const { matchData, momentum, events, activePoll } = useMatch();

  return (
    <main className="min-h-screen pt-24 pb-12 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <Navbar />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column - Live Feed & Chat */}
        <div className="lg:col-span-3 space-y-6">
          <CommentaryFeed events={events} />
          <AIChatPanel />
        </div>

        {/* Center Column - Main Action */}
        <div className="lg:col-span-6 space-y-6">
          <LiveScoreCard matchData={matchData} />
          <MomentumMeter value={momentum} />
          
          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              key={matchData.overs}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-4 flex flex-col justify-center items-center text-center space-y-2 border-green-500/20"
            >
              <p className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Win Probability</p>
              <p className="text-3xl font-black italic">{momentum > 0 ? '72%' : '48%'}</p>
              <p className="text-xs text-gray-500 font-medium">{momentum > 0 ? 'RCB in command' : 'CSK catching up'}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-4 flex flex-col justify-center items-center text-center space-y-2 border-orange-500/20"
            >
              <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Required Rate</p>
              <p className="text-3xl font-black italic">10.15</p>
              <p className="text-xs text-gray-500 font-medium">CSK under pressure</p>
            </motion.div>
          </div>

          <AnimatePresence>
            {activePoll && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 p-[1px] rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.2)]"
              >
                <div className="bg-black/90 backdrop-blur-xl p-6 rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">MOMENTUM ALERT!</h4>
                    <p className="text-sm text-gray-400">Can CSK bounce back after this massive SIX?</p>
                  </div>
                  <button className="px-6 py-2 bg-white text-black font-bold rounded-lg text-sm hover:bg-cyan-400 transition-colors">
                    PREDICT NOW
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="glass-card p-8 flex items-center justify-between overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-2">Build with AI Hackathon</h4>
              <p className="text-sm text-gray-400">Agentic Premier League — Realtime Orchestration Demo</p>
            </div>
            <div className="relative z-10 text-right">
              <div className="text-[10px] font-bold text-gray-500 mb-1">POWERED BY</div>
              <div className="text-lg font-black italic tracking-tighter">GEMINI AI</div>
            </div>
          </div>
        </div>

        {/* Right Column - Social & Prediction */}
        <div className="lg:col-span-3 space-y-6">
          <PredictionPoll />
          <Leaderboard />
        </div>

      </div>
    </main>
  );
}
