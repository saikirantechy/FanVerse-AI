'use client';

import { useState, useEffect } from 'react';

const MOCK_EVENTS = [
  { 
    id: 1, 
    type: 'start', 
    matchData: { 
      team1: { name: 'RCB', score: '185/4' }, 
      team2: { name: 'CSK', score: '142/3' }, 
      overs: '15.0', 
      target: '186', 
      status: 'CSK need 44 runs in 30 balls' 
    },
    momentum: 30,
    commentary: { id: 101, time: '15.0', text: 'Start of the 16th over. Siraj into the attack.', type: 'normal' },
    insight: 'Match Balance: RCB currently have a 68% win probability, but Dhoni is still at the crease.',
    social: { energy: 45, viral: false }
  },
  { 
    id: 2, 
    type: 'ball', 
    matchData: { 
      team1: { name: 'RCB', score: '185/4' }, 
      team2: { name: 'CSK', score: '143/3' }, 
      overs: '15.1', 
      target: '186', 
      status: 'CSK need 43 runs in 29 balls' 
    },
    momentum: 28,
    commentary: { id: 102, time: '15.1', text: 'Single to long-on. Dhoni off the mark in this over.', type: 'normal' },
    insight: 'Strategic Note: Strike rotation is crucial. CSK need to keep the scoreboard ticking.',
    social: { energy: 50, viral: false }
  },
  { 
    id: 3, 
    type: 'six', 
    matchData: { 
      team1: { name: 'RCB', score: '185/4' }, 
      team2: { name: 'CSK', score: '149/3' }, 
      overs: '15.2', 
      target: '186', 
      status: 'CSK need 37 runs in 28 balls' 
    },
    momentum: -20, // Momentum shift to CSK
    commentary: { id: 103, time: '15.2', text: 'SIX! SHIVAM DUBE SMOKES IT! Over the cow corner. That is massive.', type: 'boundary' },
    triggerPoll: true,
    insight: 'TURNING POINT: That six puts the pressure back on Siraj. The required rate drops below 10.',
    social: { energy: 95, viral: true }
  },
  { 
    id: 4, 
    type: 'wicket', 
    matchData: { 
      team1: { name: 'RCB', score: '185/4' }, 
      team2: { name: 'CSK', score: '149/4' }, 
      overs: '15.3', 
      target: '186', 
      status: 'CSK need 37 runs in 27 balls' 
    },
    momentum: 60, // Huge momentum shift to RCB
    commentary: { id: 104, time: '15.3', text: 'OUT! SIRAJ STRIKES BACK! Dube holing out to Kohli at long-off. Silence in the CSK camp!', type: 'wicket' },
    leaderboardUpdate: true,
    insight: 'CRITICAL EVENT: The set batsman is gone. RCB are now firm favorites to win.',
    social: { energy: 90, viral: true }
  }
];

export function useMatch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchData, setMatchData] = useState(MOCK_EVENTS[0].matchData);
  const [momentum, setMomentum] = useState(MOCK_EVENTS[0].momentum);
  const [events, setEvents] = useState([MOCK_EVENTS[0].commentary]);
  const [insight, setInsight] = useState(MOCK_EVENTS[0].insight);
  const [social, setSocial] = useState(MOCK_EVENTS[0].social);
  const [activePoll, setActivePoll] = useState(false);
  const [agentDecision, setAgentDecision] = useState("AgentOrchestrator monitoring match stream...");
  const [history, setHistory] = useState([MOCK_EVENTS[0].commentary]);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % MOCK_EVENTS.length;
        const currentEvent = MOCK_EVENTS[next];
        
        // 1. First, update the score (Live Match Event)
        setMatchData(currentEvent.matchData);
        setInsight(currentEvent.insight);
        setSocial(currentEvent.social);
        setAgentDecision("MatchAgent detected a new event...");

        // Trigger flash for major events
        if (currentEvent.type === 'six' || currentEvent.type === 'wicket') {
          setFlash(true);
          setTimeout(() => setFlash(false), 800);
        }
        
        // 2. Slight delay for AI Commentary to "process"
        setTimeout(() => {
          setEvents(prevEvents => [currentEvent.commentary, ...prevEvents].slice(0, 5));
          setHistory(prev => [currentEvent.commentary, ...prev].slice(0, 10));
          setAgentDecision("CommentaryAgent generating emotional reaction...");
        }, 1200);

        // 3. Staggered Momentum shift
        setTimeout(() => {
          setMomentum(currentEvent.momentum);
          setAgentDecision("PredictionAgent updated win probability...");
        }, 2200);
        
        // 4. Prediction Poll launches after the momentum shift
        if (currentEvent.triggerPoll) {
          setTimeout(() => {
            setActivePoll(true);
            setAgentDecision("EngagementAgent launched interactive poll...");
            // Hide poll after 7 seconds
            setTimeout(() => setActivePoll(false), 7000);
          }, 3500);
        }

        setTimeout(() => {
          setAgentDecision("SocialAgent detected viral spike in crowd energy...");
        }, 4500);

        return next;
      });
    }, 12000); // Increased interval to 12s to allow staggered flow to breathe

    return () => clearInterval(timer);
  }, []);

  return { matchData, momentum, events, activePoll, insight, social, agentDecision, history, flash };
}
