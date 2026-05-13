export const QuizDifficultyEngine = {
  calculateNextDifficulty: (currentDifficulty, lastScore, streak) => {
    // Difficulty levels: 1 (Rookie) to 5 (Hall of Fame)
    let nextDifficulty = currentDifficulty;

    if (lastScore > 80) {
      nextDifficulty = Math.min(5, currentDifficulty + 1);
    } else if (lastScore < 40) {
      nextDifficulty = Math.max(1, currentDifficulty - 1);
    }

    // Streak multiplier: 3+ streak boosts difficulty faster
    if (streak >= 3 && lastScore > 70) {
      nextDifficulty = Math.min(5, nextDifficulty + 1);
    }

    return {
      level: nextDifficulty,
      label: ['Rookie', 'Analyst', 'Expert', 'Strategist', 'Grandmaster'][nextDifficulty - 1],
      xpMultiplier: 1 + (nextDifficulty * 0.2)
    };
  }
};
