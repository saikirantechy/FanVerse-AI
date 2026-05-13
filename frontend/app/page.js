'use client';

import Navbar from '../components/Navbar';
import LiveScoreCard from '../components/LiveScoreCard';
import CommentaryFeed from '../components/CommentaryFeed';
import MomentumMeter from '../components/MomentumMeter';
import PredictionPoll from '../components/PredictionPoll';
import Leaderboard from '../components/Leaderboard';
import AIChatPanel from '../components/AIChatPanel';
import StrategicInsight from '../components/StrategicInsight';
import CrowdEnergy from '../components/CrowdEnergy';
import MatchTimeline from '../components/MatchTimeline';
import AgentActivityPanel from '../components/AgentActivityPanel';
import AgentFlowDiagram from '../components/AgentFlowDiagram';
import TickerRibbon from '../components/TickerRibbon';
import ProfileCard from '../components/ProfileCard';
import DailyChallenges from '../components/DailyChallenges';
import LivePlayMode from '../components/LivePlayMode';
import { motion, AnimatePresence } from 'framer-motion';
import { useMatch } from '../hooks/useMatch';
import { useState } from 'react';

export default function Home() {
  const { matchData, momentum, events, activePoll, insight, social, agentDecision, history, flash } = useMatch();
  const [isLivePlay, setIsLivePlay] = useState(true);

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Broadcast Flash Overlay */}
      <AnimatePresence>
        {flash && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] pointer-events-none bg-white/10 backdrop-invert-[0.1]"
          />
        )}
      </AnimatePresence>

      <Navbar />

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column - User & Status (2.5 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <ProfileCard />
          <LivePlayMode isActive={isLivePlay} onToggle={() => setIsLivePlay(!isLivePlay)} />
          <DailyChallenges />
          <AgentActivityPanel />
        </div>

        {/* Center Column - Main Action (6.5 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex justify-between items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Agent Decision:</span>
              <motion.span 
                key={agentDecision}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[10px] font-medium text-gray-300 italic"
              >
                {agentDecision}
              </motion.span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Global Rank: #1,284</span>
              <span className="text-[10px] font-bold text-cyan-400/80">12,482 FANS ONLINE</span>
            </div>
          </div>

          <LiveScoreCard matchData={matchData} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MomentumMeter value={momentum} />
            <StrategicInsight insight={insight} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <AgentFlowDiagram />
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
                    <h4 className="text-lg font-bold text-white uppercase tracking-tighter italic">Poll Triggered by AI</h4>
                    <p className="text-sm text-gray-400">Our Prediction Agent needs your input to refine the model.</p>
                  </div>
                  <button className="px-6 py-2 bg-white text-black font-bold rounded-lg text-sm hover:bg-cyan-400 transition-colors">
                    VOTE NOW
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Right Column - Social & Prediction (3 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <MatchTimeline events={history} />
          <CommentaryFeed events={events} />
          <CrowdEnergy energy={social.energy} viral={social.viral} />
          <PredictionPoll />
          <AIChatPanel />
        </div>

      </div>

      <TickerRibbon />
    </main>
  );
}
