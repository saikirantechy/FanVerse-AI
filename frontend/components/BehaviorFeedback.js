import { motion, AnimatePresence } from 'framer-motion';
import { AIMemoryManager } from '../utils/AIMemoryManager';
import { Brain, Sparkles, TrendingUp, ShieldAlert } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function BehaviorFeedback() {
  const [style, setStyle] = useState('Neutral');
  
  useEffect(() => {
    setStyle(AIMemoryManager.getDominantStyle());
  }, []);

  const feedbackMap = {
    'Tactical': {
      title: 'Tactical Strategist Detected',
      text: 'Our models show you prioritize data over emotion. Your insight precision is top-tier.',
      icon: <Brain className="text-cyan-400" />
    },
    'Prediction': {
      title: 'Risk Analyzer Peak',
      text: 'You have a high appetite for clutch predictions. The AI Captain is monitoring your streak.',
      icon: <ShieldAlert className="text-orange-400" />
    },
    'Cheer': {
      title: 'Momentum Catalyst',
      text: 'Your social energy spikes are driving the global fan energy. Keep the hype alive!',
      icon: <Sparkles className="text-purple-400" />
    },
    'Neutral': {
      title: 'AI Analyzing DNA',
      text: 'Interact with polls and quizzes to build your unique Fan Personality Profile.',
      icon: <TrendingUp className="text-gray-400" />
    }
  };

  const current = feedbackMap[style] || feedbackMap['Neutral'];

  return (
    <div className="glass-card p-6 border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex items-center gap-6">
        <div className="w-12 h-12 bg-black/40 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
          {current.icon}
        </div>
        <div className="flex-1">
          <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">
            {current.title}
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed italic">
            "{current.text}"
          </p>
        </div>
      </div>
    </div>
  );
}
