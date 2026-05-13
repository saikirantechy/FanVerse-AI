'use client';

import Navbar from '../components/Navbar';
import LiveScoreCard from '../components/LiveScoreCard';
import CommentaryFeed from '../components/CommentaryFeed';
import MomentumMeter from '../components/MomentumMeter';
import PredictionPoll from '../components/PredictionPoll';
import Leaderboard from '../components/Leaderboard';
import AIChatPanel from '../components/AIChatPanel';
import AICaptainConsensus from '../components/AICaptainConsensus';
import CrowdEnergy from '../components/CrowdEnergy';
import MatchTimeline from '../components/MatchTimeline';
import AgentActivityPanel from '../components/AgentActivityPanel';
import AgentFlowDiagram from '../components/AgentFlowDiagram';
import TickerRibbon from '../components/TickerRibbon';
import ProfileCard from '../components/ProfileCard';
import DailyChallenges from '../components/DailyChallenges';
import LivePlayMode from '../components/LivePlayMode';
import { motion, AnimatePresence } from 'framer-motion';
import AchievementToast from '../components/AchievementToast';
import ViralHighlightGenerator from '../components/ViralHighlightGenerator';
import FanDNAProfile from '../components/FanDNAProfile';
import FanRewardStore from '../components/FanRewardStore';
import SeasonPassport from '../components/SeasonPassport';
import ClanSystem from '../components/ClanSystem';
import CrowdPowerMeter from '../components/CrowdPowerMeter';
import BroadcastTicker from '../components/BroadcastTicker';
import AgentActivityMonitor from '../components/AgentActivityMonitor';
import FanActivityFeed from '../components/FanActivityFeed';
import ConfidenceGauge from '../components/ConfidenceGauge';
import SquadComparison from '../components/SquadComparison';
import HighlightsPlayer from '../components/HighlightsPlayer';
import AccuracyTracker from '../components/AccuracyTracker';
import OddsTracker from '../components/OddsTracker';
import InteractionHeatmap from '../components/InteractionHeatmap';
import MatchStatusBadges from '../components/MatchStatusBadges';
import MatchReportModal from '../components/MatchReportModal';
import MatchStatsModal from '../components/MatchStatsModal';
import LevelUpModal from '../components/LevelUpModal';
import CheerButton from '../components/CheerButton';
import PredictionLeaderboard from '../components/PredictionLeaderboard';
import ConfettiEffect from '../components/ConfettiEffect';
import FlashEvent from '../components/FlashEvent';
import XPPulse from '../components/XPPulse';
import BackgroundParticles from '../components/BackgroundParticles';
import ChatFAB from '../components/ChatFAB';
import { useMatch } from '../hooks/useMatch';
import { useFirestoreMatch } from '../hooks/useFirestoreMatch';
import { useState, useEffect } from 'react';

export default function Home() {
  const simulator = useMatch();
  const { data: liveData } = useFirestoreMatch("match_001");
  const [isLivePlay, setIsLivePlay] = useState(true);
  const [newAchievement, setNewAchievement] = useState(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isPredRankOpen, setIsPredRankOpen] = useState(false);
  const [isLevelUpOpen, setIsLevelUpOpen] = useState(false);

  // Monitor for match completion
  useEffect(() => {
    if (liveData?.match_status === 'completed') {
      setIsReportOpen(true);
    }
  }, [liveData?.match_status]);

  // Monitor for new badges
  useEffect(() => {
    if (liveData?.engagement?.new_badges?.length > 0) {
      setNewAchievement(liveData.engagement.new_badges[0]);
    }
  }, [liveData?.engagement?.new_badges]);

  // Merge simulator and live data
  const matchData = liveData?.score ? { 
    ...simulator.matchData, 
    team1: { ...simulator.matchData.team1, score: liveData.score.split(' ')[0] },
    overs: liveData.overs,
    status: liveData.match_status
  } : simulator.matchData;

  const momentum = liveData?.win_probability !== undefined ? (liveData.win_probability > 50 ? 30 : -30) : simulator.momentum;
  const events = liveData?.commentary ? [liveData.commentary, ...simulator.events].slice(0, 5) : simulator.events;
  const insight = liveData?.strategic_insight || simulator.insight;
  const storyline = liveData?.storyline || "The stage is set for a historic finish.";
  const social = liveData?.social || simulator.social;
  const agentDecision = liveData?.match_status ? `NarrativeAgent: Building emotional arc...` : simulator.agentDecision;
  const activePoll = liveData?.poll || simulator.activePoll;
  const flash = simulator.flash;
  const history = simulator.history;

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 relative bg-[#050505] overflow-hidden">
      <BackgroundParticles />
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

      <XPPulse xp={liveData?.engagement?.xp_earned || (matchData.overs % 1 === 0 ? 100 : 0)} />
      <ConfettiEffect trigger={newAchievement} />
      <FlashEvent event={flash ? { type: 'six', text: 'CLEARED THE ROOF!' } : null} />
      <AchievementToast achievement={newAchievement} />
      <MatchReportModal 
        isOpen={isReportOpen} 
        onClose={() => setIsReportOpen(false)} 
        report={liveData?.match_report}
        fanRecap={liveData?.fan_recap}
      />
      <MatchStatsModal 
        isOpen={isStatsOpen} 
        onClose={() => setIsStatsOpen(false)} 
        matchData={matchData}
      />
      <PredictionLeaderboard 
        isOpen={isPredRankOpen} 
        onClose={() => setIsPredRankOpen(false)} 
      />
      <LevelUpModal 
        isOpen={isLevelUpOpen} 
        onClose={() => setIsLevelUpOpen(false)} 
        level={15}
      />

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* Left Column - User & Status (2.5 cols) */}
        <div className="lg:col-span-3 space-y-6">
          <ProfileCard />
          <FanDNAProfile dna={liveData?.fan_dna} />
          <LivePlayMode isActive={isLivePlay} onToggle={() => setIsLivePlay(!isLivePlay)} />
          
          {/* Narrative Arc Section */}
          <motion.div 
            key={storyline}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-6 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent"
          >
            <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Director's Cut: Match Narrative
            </p>
            <p className="text-sm font-medium text-gray-200 italic leading-relaxed">
              "{storyline}"
            </p>
          </motion.div>

          <SeasonPassport />
          <FanActivityFeed />
          <AgentActivityMonitor />
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
              <MatchStatusBadges overs={matchData.overs} status={matchData.status} />
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                <span className="text-cyan-400 font-black italic">{Math.floor(128000 + Math.random() * 5000).toLocaleString()}</span> active fans
              </span>
              <span className="text-[10px] font-bold text-cyan-400/80">4.2M REACTIONS PROCESSED</span>
              <span className="text-[10px] font-bold text-purple-400">8 AI AGENTS ACTIVE</span>
            </div>
          </div>

          <div onClick={() => setIsStatsOpen(true)} className="cursor-pointer">
            <LiveScoreCard matchData={matchData} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MomentumMeter value={momentum} />
            <AICaptainConsensus insight={insight} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <OddsTracker momentum={momentum} />
            <SquadComparison />
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
          <ViralHighlightGenerator matchData={matchData} storyline={storyline} />
          <CommentaryFeed events={events} />
          <CrowdPowerMeter energy={social.energy} />
          <HighlightsPlayer />
          <FanRewardStore />
          <CrowdEnergy energy={social.energy} viral={social.viral} />
          <PredictionPoll />
          <ConfidenceGauge />
          <div onClick={() => setIsPredRankOpen(true)} className="cursor-pointer">
            <AccuracyTracker />
          </div>
          <ClanSystem />
          <InteractionHeatmap />
        </div>

      </div>

      <TickerRibbon />
      <BroadcastTicker />
      <ChatFAB matchContext={matchData} />
      <CheerButton />
    </main>
  );
}
