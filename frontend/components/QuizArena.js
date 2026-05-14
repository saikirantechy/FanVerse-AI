import { motion } from 'framer-motion';
import { useState } from 'react';
import GlassCard from './ui/GlassCard';
import NeonButton from './ui/NeonButton';

export default function QuizArena() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      questionText: 'Who holds the record for most runs in IPL history?',
      answerOptions: [
        { answerText: 'Virat Kohli', isCorrect: true },
        { answerText: 'Suresh Raina', isCorrect: false },
        { answerText: 'David Warner', isCorrect: false },
        { answerText: 'Rohit Sharma', isCorrect: false },
      ],
    },
    {
      questionText: 'Which team won the first ever IPL in 2008?',
      answerOptions: [
        { answerText: 'CSK', isCorrect: false },
        { answerText: 'RR', isCorrect: true },
        { answerText: 'MI', isCorrect: false },
        { answerText: 'DC', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the highest individual score in IPL?',
      answerOptions: [
        { answerText: '158*', isCorrect: false },
        { answerText: '175*', isCorrect: true },
        { answerText: '133*', isCorrect: false },
        { answerText: '128*', isCorrect: false },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12">
      <GlassCard className="p-12 text-center">
        {showScore ? (
          <div className="space-y-8">
            <div className="text-6xl font-black text-accent-primary italic">
              {score} / {questions.length}
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
              Quiz Completed!
            </h2>
            <p className="text-muted">You've earned {score * 100} Fan Coins and 50 XP.</p>
            <NeonButton onClick={() => { setShowScore(false); setCurrentQuestion(0); setScore(0); }}>
              Play Again
            </NeonButton>
          </div>
        ) : (
          <div className="space-y-8 text-left">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-accent-primary uppercase tracking-widest">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="h-1 w-32 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  className="h-full bg-accent-primary"
                />
              </div>
            </div>
            <h2 className="text-2xl font-black text-foreground italic">
              {questions[currentQuestion].questionText}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(option.isCorrect)}
                  className="p-5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl text-left transition-all hover:translate-x-2 group"
                >
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {option.answerText}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
}
