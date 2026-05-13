import { useState, useEffect } from 'react';

const LEVEL_NAMES = [
  'Rookie Fan',
  'Stadium Explorer',
  'Match Analyst',
  'Tactical Expert',
  'AI Predictor',
  'Crowd Commander',
  'Elite Strategist',
  'Legendary Captain',
  'Hall of Fame Fan'
];

export function useProgression() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [title, setTitle] = useState(LEVEL_NAMES[0]);

  useEffect(() => {
    const savedXp = parseInt(localStorage.getItem('fanverse-xp') || '0');
    const savedLevel = parseInt(localStorage.getItem('fanverse-level') || '1');
    setXp(savedXp);
    setLevel(savedLevel);
    setTitle(LEVEL_NAMES[Math.min(savedLevel - 1, LEVEL_NAMES.length - 1)]);
  }, []);

  const addXp = (amount) => {
    const newXp = xp + amount;
    setXp(newXp);
    localStorage.setItem('fanverse-xp', newXp.toString());

    // Simple level up logic: level = floor(sqrt(xp/100)) + 1
    const newLevel = Math.floor(Math.sqrt(newXp / 100)) + 1;
    if (newLevel > level) {
      setLevel(newLevel);
      localStorage.setItem('fanverse-level', newLevel.toString());
      setTitle(LEVEL_NAMES[Math.min(newLevel - 1, LEVEL_NAMES.length - 1)]);
      return true; // Leveled up
    }
    return false;
  };

  return { xp, level, title, addXp };
}
