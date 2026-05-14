export const AIMemoryManager = {
  saveReaction: (type, context) => {
    if (typeof window === 'undefined') return [];
    
    const memory = JSON.parse(localStorage.getItem('fanverse-memory') || '[]');
    const newEntry = {
      timestamp: new Date().toISOString(),
      type,
      context,
      impact: context.energy || 0
    };
    
    // Keep last 50 reactions
    const updatedMemory = [newEntry, ...memory].slice(0, 50);
    localStorage.setItem('fanverse-memory', JSON.stringify(updatedMemory));
    
    console.log(`[AI Memory] Reaction registered: ${type}`);
    return updatedMemory;
  },

  getDominantStyle: () => {
    if (typeof window === 'undefined') return 'Neutral';
    
    const memory = JSON.parse(localStorage.getItem('fanverse-memory') || '[]');
    if (memory.length === 0) return 'Neutral';
    
    const types = memory.reduce((acc, curr) => {
      acc[curr.type] = (acc[curr.type] || 0) + 1;
      return acc;
    }, {});
    
    return Object.keys(types).reduce((a, b) => types[a] > types[b] ? a : b);
  },

  getAIPersonalityPrompt: () => {
    const style = AIMemoryManager.getDominantStyle();
    const map = {
      'Cheer': 'The fan is highly supportive and emotional.',
      'Tactical': 'The fan is focused on strategy and data.',
      'Prediction': 'The fan is a risk-taker and analyst.',
      'Trivia': 'The fan values historical accuracy and knowledge.'
    };
    return map[style] || 'The fan is exploring the platform.';
  },

  getProfileData: () => {
    const defaultProfile = {
      username: "CricketOracle_99",
      level: 15,
      xp: 450,
      accuracy: "88%",
      team: "RCB",
      achievements: 12,
      prestige: false,
      bio: "AI Sports Analyst & Die-hard Cricket Fan. Predicting the future of the game, one ball at a time."
    };
    
    if (typeof window === 'undefined') return defaultProfile;
    
    const stored = localStorage.getItem('fanverse-profile');
    return stored ? JSON.parse(stored) : defaultProfile;
  },

  updateProfileData: (data) => {
    if (typeof window === 'undefined') return data;
    
    const current = AIMemoryManager.getProfileData();
    const updated = { ...current, ...data };
    localStorage.setItem('fanverse-profile', JSON.stringify(updated));
    return updated;
  }
};


