'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMatch } from '../hooks/useMatch';
import { useFirestoreMatch } from '../hooks/useFirestoreMatch';
import { useTheme } from '../hooks/useTheme';

// UI Components
import DashboardTabs from '../components/DashboardTabs';
import QuizArena from '../components/QuizArena';
import MatchArchive from '../components/MatchArchive';
import ReputationLeaderboard from '../components/ReputationLeaderboard';
import LiveScoreCard from '../components/LiveScoreCard';
import MomentumMeter from '../components/MomentumMeter';
import AICaptainConsensus from '../components/AICaptainConsensus';
import OddsTracker from '../components/OddsTracker';
import SquadComparison from '../components/SquadComparison';
import FieldHeatmap from '../components/FieldHeatmap';
import TeamDynamics from '../components/TeamDynamics';
import PredictionPoll from '../components/PredictionPoll';
import CommentaryFeed from '../components/CommentaryFeed';
import MatchTimeline from '../components/MatchTimeline';
import AgentFlowDiagram from '../components/AgentFlowDiagram';
import ViralTimeline from '../components/ViralTimeline';
import HighlightsPlayer from '../components/HighlightsPlayer';
import InteractionHeatmap from '../components/InteractionHeatmap';
import CrowdPowerMeter from '../components/CrowdPowerMeter';
import ClanSystem from '../components/ClanSystem';
import FanRewardStore from '../components/FanRewardStore';
import SeasonPassport from '../components/SeasonPassport';
import DailyChallenges from '../components/DailyChallenges';
import ProfileCard from '../components/ProfileCard';
import FanDNAProfile from '../components/FanDNAProfile';
import LivePlayMode from '../components/LivePlayMode';
import MatchScript from '../components/MatchScript';
import AgentActivityMonitor from '../components/AgentActivityMonitor';
import BehaviorFeedback from '../components/BehaviorFeedback';

// Global UI
import GlobalBroadcast from '../components/GlobalBroadcast';
import BackgroundParticles from '../components/BackgroundParticles';
import TickerRibbon from '../components/TickerRibbon';
import BroadcastTicker from '../components/BroadcastTicker';
import ChatFAB from '../components/ChatFAB';
import CheerButton from '../components/CheerButton';
import InsightPopup from '../components/InsightPopup';
import XPPulse from '../components/XPPulse';
import ConfettiEffect from '../components/ConfettiEffect';
import AchievementToast from '../components/AchievementToast';
import MatchReportModal from '../components/MatchReportModal';
import MatchStatsModal from '../components/MatchStatsModal';
import LevelUpModal from '../components/LevelUpModal';
import PredictionLeaderboard from '../components/PredictionLeaderboard';
import MatchStatusBadges from '../components/MatchStatusBadges';

export default function Home() {
  const simulator = useMatch();
  const { data: liveData } = useFirestoreMatch("match_001");
  const { theme } = useTheme();
  
  const [activeTab, setActiveTab] = useState('live');
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
      setTimeout(() => setIsLevelUpOpen(true), 3000);
    }
  }, [liveData?.match_status]);

  // Monitor for new badges
  useEffect(() => {
    if (liveData?.engagement?.new_badges?.length > 0) {
      setNewAchievement(liveData.engagement.new_badges[0]);
    }
  }, [liveData?.engagement?.new_badges]);

  // Data Merging Logic
  const matchData = liveData?.score ? { 
    ...simulator.matchData, 
    team1: { ...simulator.matchData.team1, score: liveData.score.split(' ')[0] },
    overs: liveData.overs,
    status: liveData.match_status
  } : simulator.matchData;

  const momentum = liveData?.win_probability !== undefined ? (liveData.win_probability > 50 ? 30 : -30) : simulator.momentum;
  const events = liveData?.commentary ? [liveData.commentary, ...simulator.events].slice(0, 5) : simulator.events;
  const insight = liveData?.strategic_insight || simulator.insight;
  const matchCompleted = liveData?.match_status === 'completed' || matchData.overs >= 20;
  
  const storyline = matchCompleted ? [
    "The match reached a fever pitch as the final overs approached...",
    "A series of high-impact boundaries shifted the momentum decisively...",
    "The final delivery sealed a historic victory.",
    "FanVerse AI Analysis: 92% efficiency rating."
  ] : (liveData?.storyline || "The stage is set for a historic finish.");

  const social = liveData?.social || simulator.social;
  const agentDecision = liveData?.match_status ? `NarrativeAgent: Building emotional arc...` : simulator.agentDecision;
  const activePoll = liveData?.poll || simulator.activePoll;
  const flash = simulator.flash;
  const history = simulator.history;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'live':
        return (
          <div className="space-y-6">
            <div onClick={() => setIsStatsOpen(true)} className="cursor-pointer group">
              <LiveScoreCard matchData={matchData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <MomentumMeter value={momentum} />
              <AICaptainConsensus insight={insight} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <OddsTracker momentum={momentum} />
              <SquadComparison />
              <FieldHeatmap />
              <TeamDynamics />
            </div>
            <PredictionPoll />
          </div>
        );
      case 'commentary':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CommentaryFeed events={events} />
            <MatchTimeline events={history} />
            <div className="lg:col-span-2">
              <AgentFlowDiagram />
            </div>
          </div>
        );
      case 'quiz':
        return <QuizArena onComplete={(score) => console.log('Quiz Score:', score)} />;
      case 'leaderboard':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PredictionLeaderboard isOpen={true} onClose={() => {}} inline={true} />
            <ReputationLeaderboard />
          </div>
        );
      case 'tactical':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DramaMeter value={Math.abs(momentum) > 30 ? 88 : 35} />
            <PressureGauge value={momentum < 0 ? 85 : 45} />
            <ClutchFactor value={momentum < -20 ? 94 : 78} />
            <ConfidenceGauge />
          </div>
        );
      case 'social':
        return (
          <div className="space-y-6">
            <ViralTimeline />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <HighlightsPlayer />
              <InteractionHeatmap />
            </div>
            <CrowdPowerMeter energy={social.energy} />
          </div>
        );
      case 'clans':
        return <ClanSystem />;
      case 'archive':
        return <MatchArchive />;
      case 'rewards':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <FanRewardStore />
            <SeasonPassport />
            <DailyChallenges />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 md:px-10 relative bg-background overflow-hidden transition-colors duration-500">
      <GlobalBroadcast visible={social.energy > 85} message="Global Fan Energy Surge! ⚡" />
      <BackgroundParticles />
      <TickerRibbon />
      
      {/* Dynamic Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Global Modals & Toasts */}
      <XPPulse xp={liveData?.engagement?.xp_earned || (matchData.overs % 1 === 0 ? 100 : 0)} />
      <ConfettiEffect trigger={newAchievement} />
      <AchievementToast achievement={newAchievement} />
      
      <MatchReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} report={liveData?.match_report} storyline={storyline} />
      <MatchStatsModal isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)} matchData={matchData} />
      <LevelUpModal isOpen={isLevelUpOpen} onClose={() => setIsLevelUpOpen(false)} level={15} />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <DashboardTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Fixed Sidebar - Identity & Status (3 cols) */}
          <div className="lg:col-span-3 space-y-6 hidden lg:block">
            <ProfileCard />
            <FanDNAProfile dna={liveData?.fan_dna} />
            <LivePlayMode isActive={isLivePlay} onToggle={() => setIsLivePlay(!isLivePlay)} />
            <MatchScript storyline={storyline} />
            <AgentActivityMonitor />
            <BehaviorFeedback />
          </div>

          {/* Main Content Area (9 cols) */}
          <div className="lg:col-span-9">
            <div className="mb-6 flex justify-between items-center px-6 py-3 bg-accent-primary/5 border border-accent-primary/10 rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-primary">Status:</span>
                <motion.span key={agentDecision} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] font-medium text-muted italic">
                  {agentDecision}
                </motion.span>
              </div>
              <div className="flex items-center gap-6">
                <MatchStatusBadges overs={matchData.overs} status={matchData.status} />
                <span className="text-[10px] font-bold text-muted uppercase tracking-widest">
                  <span className="text-accent-primary font-black italic">{Math.floor(128000 + Math.random() * 5000).toLocaleString()}</span> active fans
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BroadcastTicker />
      <ChatFAB matchContext={matchData} />
      <CheerButton onCheer={() => simulator.boostEnergy(15)} />
      <InsightPopup />
    </main>
  );
}
