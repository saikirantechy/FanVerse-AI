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
    commentary: { id: 101, time: '15.0', text: 'Start of the 16th over. Siraj into the attack.', type: 'normal' }
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
    commentary: { id: 102, time: '15.1', text: 'Single to long-on. Dhoni off the mark in this over.', type: 'normal' }
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
    triggerPoll: true
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
    leaderboardUpdate: true
  }
];

export function useMatch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchData, setMatchData] = useState(MOCK_EVENTS[0].matchData);
  const [momentum, setMomentum] = useState(MOCK_EVENTS[0].momentum);
  const [events, setEvents] = useState([MOCK_EVENTS[0].commentary]);
  const [activePoll, setActivePoll] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % MOCK_EVENTS.length;
        const currentEvent = MOCK_EVENTS[next];
        
        // 1. First, update the score (Live Match Event)
        setMatchData(currentEvent.matchData);
        
        // 2. Slight delay for AI Commentary to "process"
        setTimeout(() => {
          setEvents(prevEvents => [currentEvent.commentary, ...prevEvents].slice(0, 5));
        }, 1200);

        // 3. Staggered Momentum shift
        setTimeout(() => {
          setMomentum(currentEvent.momentum);
        }, 2200);
        
        // 4. Prediction Poll launches after the momentum shift
        if (currentEvent.triggerPoll) {
          setTimeout(() => {
            setActivePoll(true);
            // Hide poll after 7 seconds
            setTimeout(() => setActivePoll(false), 7000);
          }, 3500);
        }

        return next;
      });
    }, 12000); // Increased interval to 12s to allow staggered flow to breathe

    return () => clearInterval(timer);
  }, []);

  return { matchData, momentum, events, activePoll };
}
