'use client';

import { motion } from 'framer-motion';

export default function DashboardTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'live', label: 'Live Match', icon: '🏏' },
    { id: 'commentary', label: 'AI Commentary', icon: '🎙️' },
    { id: 'quiz', label: 'Quiz Arena', icon: '🧠' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    { id: 'tactical', label: 'Tactical Analysis', icon: '📊' },
    { id: 'social', label: 'Social Arena', icon: '🌍' },
    { id: 'clans', label: 'Clan System', icon: '🛡️' },
    { id: 'archive', label: 'Match Archive', icon: '📚' },
  ];

  return (
    <div className="sticky top-24 z-40 bg-background/60 backdrop-blur-xl border-b border-border mb-8 overflow-x-auto no-scrollbar">
      <div className="max-w-[1800px] mx-auto flex items-center gap-2 p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-3 px-6 py-3 rounded-2xl whitespace-nowrap transition-all duration-300 relative group ${
              activeTab === tab.id 
                ? 'text-foreground' 
                : 'text-muted hover:text-foreground hover:bg-white/5'
            }`}
          >
            <span className="text-lg">{tab.icon}</span>
            <span className="text-[11px] font-black uppercase tracking-widest">{tab.label}</span>
            
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-accent-primary/10 border border-accent-primary/20 rounded-2xl -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-6 right-6 h-[2px] bg-accent-primary"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
