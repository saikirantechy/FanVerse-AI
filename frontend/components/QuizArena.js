import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Brain, Timer, CheckCircle, XCircle } from 'lucide-react';

export default function QuizArena({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      type: 'Tactical',
      q: "The momentum shift is currently 78% for RCB. What's the optimal bowling strategy for CSK in the next 2 overs?",
      options: ["Defensive Spin", "Aggressive Bouncer Attack", "Length Ball Consistency", "Strategic Timeout"],
      correct: 1,
      xp: 250
    },
    {
      id: 2,
      type: 'Rules',
      q: "If a ball hits the roof of a stadium during play, what is the official decision?",
      options: ["Dead Ball", "6 Runs", "Out", "Ground Rules Apply"],
      correct: 0,
      xp: 150
    },
    {
      id: 3,
      type: 'Trivia',
      q: "Who holds the record for the fastest IPL century?",
      options: ["Chris Gayle", "Yusuf Pathan", "AB de Villiers", "David Miller"],
      correct: 0,
      xp: 100
    }
  ];

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNext();
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (idx) => {
    if (idx === questions[currentStep].correct) {
      setScore(score + questions[currentStep].xp);
    }
    handleNext();
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimeLeft(15);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-12 text-center border-cyan-500/30 bg-cyan-500/5"
      >
        <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 text-black shadow-[0_0_50px_rgba(6,182,212,0.5)]">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">Arena Conquered</h2>
        <p className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] mb-8">Level: Match Analyst</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">XP Earned</p>
            <p className="text-2xl font-black text-white italic">+{score}</p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest mb-1">Accuracy</p>
            <p className="text-2xl font-black text-white italic">{Math.round((score/500)*100)}%</p>
          </div>
        </div>

        <button 
          onClick={() => onComplete?.(score)}
          className="w-full py-4 bg-white text-black font-black uppercase italic tracking-widest rounded-2xl hover:bg-cyan-400 transition-all"
        >
          Claim Rewards
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card p-8 border-white/10 bg-white/5 overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]" />
      
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Quiz Arena</h3>
            <p className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Question {currentStep + 1} of {questions.length}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[8px] font-black text-gray-500 uppercase tracking-widest">Time Left</p>
            <p className={`text-sm font-black italic ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>{timeLeft}s</p>
          </div>
          <Timer size={24} className="text-gray-500" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="min-h-[100px]">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black text-gray-500 uppercase tracking-widest mb-4 inline-block">
              {questions[currentStep].type}
            </span>
            <h2 className="text-xl font-black text-white italic leading-tight">
              {questions[currentStep].q}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {questions[currentStep].options.map((opt, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(i)}
                className="w-full p-6 bg-white/5 border border-white/5 rounded-2xl text-left hover:bg-white/10 hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className="flex justify-between items-center relative z-10">
                  <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{opt}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center text-[10px] font-black text-gray-600 group-hover:border-cyan-500 group-hover:text-cyan-400">
                    {String.fromCharCode(65 + i)}
                  </div>
                </div>
                <div className="absolute inset-y-0 left-0 w-1 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="mt-12 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          className="h-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
        />
      </div>
    </div>
  );
}
