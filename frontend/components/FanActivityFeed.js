import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FanActivityFeed() {
  const [activities, setActivities] = useState([
    { id: 1, user: 'Rohan_Fan', action: 'made a boundary prediction', time: 'Just now', icon: '🎯' },
    { id: 2, user: 'Sneha_12', action: 'unlocked "Trivia Master" badge', time: '2m ago', icon: '🏆' },
    { id: 3, user: 'Captain_Arjun', action: 'joined CSK Superstars clan', time: '5m ago', icon: '🛡️' },
    { id: 4, user: 'Zoya_Sports', action: 'earned 250 XP from a SIX', time: '8m ago', icon: '🔥' },
  ]);

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      const users = ['Priya_Cricket', 'Raj_Hitman', 'Isha_Fan', 'Kabir_X', 'Deepak_Stats'];
      const actions = [
        'is currently reacting to the last over',
        'just correctly predicted a wicket',
        'shared a match highlight card',
        'reached Level 15: Fan Analyst',
        'is chatting with the AI Assistant'
      ];
      const icons = ['🔥', '🎯', '🚀', '🧠', '👑'];
      
      const newActivity = {
        id: Date.now(),
        user: users[Math.floor(Math.random() * users.length)],
        action: actions[Math.floor(Math.random() * actions.length)],
        time: 'Just now',
        icon: icons[Math.floor(Math.random() * icons.length)]
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 5)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-6 border-white/5 bg-white/5 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Global Activity Feed</h3>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {activities.map((activity) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm border border-white/5">
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-200 leading-tight">
                  <span className="font-black uppercase italic text-cyan-400 mr-1">{activity.user}</span>
                  <span className="font-medium text-gray-400">{activity.action}</span>
                </p>
                <p className="text-[7px] font-black text-gray-600 uppercase tracking-widest mt-0.5">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
