'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMatch } from '../../hooks/useMatch';
import { useFirestoreMatch } from '../../hooks/useFirestoreMatch';
import { useTheme } from '../../hooks/useTheme';

// UI Components
import LiveScoreCard from '../../components/LiveScoreCard';
import MomentumMeter from '../../components/MomentumMeter';
import AICaptainConsensus from '../../components/AICaptainConsensus';
import OddsTracker from '../../components/OddsTracker';
import SquadComparison from '../../components/SquadComparison';
import FieldHeatmap from '../../components/FieldHeatmap';
import TeamDynamics from '../../components/TeamDynamics';
import PredictionPoll from '../../components/PredictionPoll';
import CommentaryFeed from '../../components/CommentaryFeed';
import MatchTimeline from '../../components/MatchTimeline';
import AgentFlowDiagram from '../../components/AgentFlowDiagram';
import ProfileCard from '../../components/ProfileCard';
import FanDNAProfile from '../../components/FanDNAProfile';
import LivePlayMode from '../../components/LivePlayMode';
import MatchScript from '../../components/MatchScript';
import AgentActivityMonitor from '../../components/AgentActivityMonitor';
import BehaviorFeedback from '../../components/BehaviorFeedback';

// Global UI
import GlobalBroadcast from '../../components/GlobalBroadcast';
import BackgroundParticles from '../../components/BackgroundParticles';
import BroadcastTicker from '../../components/BroadcastTicker';
import ChatFAB from '../../components/ChatFAB';
import CheerButton from '../../components/CheerButton';
import InsightPopup from '../../components/InsightPopup';
import XPPulse from '../../components/XPPulse';
import ConfettiEffect from '../../components/ConfettiEffect';
import AchievementToast from '../../components/AchievementToast';
import MatchReportModal from '../../components/MatchReportModal';
import MatchStatsModal from '../../components/MatchStatsModal';
import LevelUpModal from '../../components/LevelUpModal';
import MatchStatusBadges from '../../components/MatchStatusBadges';

export default function LiveArena() {
  const simulator = useMatch();
  const { data: liveData } = useFirestoreMatch("match_001");
  const { theme } = useTheme();
  
  const [isLivePlay, setIsLivePlay] = useState(true);
  const [newAchievement, setNewAchievement] = useState(null);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
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
  const history = simulator.history;

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 md:px-10 relative bg-background overflow-hidden">
      <GlobalBroadcast visible={social.energy > 85} message="Global Fan Energy Surge! ⚡" />
      <BackgroundParticles />
      
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
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 text-foreground">
              Live <span className="text-accent-primary">Arena</span>
            </h1>
            <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em]">
              AI-Orchestrated Match Experience
            </p>
          </div>
          <div className="flex gap-4">
            <MatchStatusBadges overs={matchData.overs} status={matchData.status} />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Identity Sidebar */}
          <div className="lg:col-span-3 space-y-6 hidden lg:block">
            <ProfileCard />
            <FanDNAProfile dna={liveData?.fan_dna} />
            <LivePlayMode isActive={isLivePlay} onToggle={() => setIsLivePlay(!isLivePlay)} />
            <MatchScript storyline={storyline} />
            <AgentActivityMonitor />
            <BehaviorFeedback />
          </div>

          {/* Main Dashboard */}
          <div className="lg:col-span-9 space-y-8">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CommentaryFeed events={events} />
              <MatchTimeline events={history} />
              <div className="lg:col-span-2">
                <AgentFlowDiagram />
              </div>
            </div>
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
