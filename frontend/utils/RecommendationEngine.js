import { AIMemoryManager } from './AIMemoryManager';

export const RecommendationEngine = {
  getRecommendations: () => {
    const style = AIMemoryManager.getDominantStyle();
    
    const recommendations = {
      'Tactical': [
        { type: 'Quiz', title: 'Bowling Strategy Masterclass', reward: '500 XP', difficulty: 'Expert' },
        { type: 'Archive', title: 'MI vs KKR: 2024 Tactical Breakdown', reward: 'Legacy XP', difficulty: 'Analytical' }
      ],
      'Prediction': [
        { type: 'Poll', title: 'Predict Next Over Momentum', reward: '200 Coins', difficulty: 'High Stakes' },
        { type: 'Arena', title: 'Clutch Performance Challenge', reward: 'Oracle Badge', difficulty: 'Legendary' }
      ],
      'Cheer': [
        { type: 'Activity', title: 'Join Global Energy Wave', reward: 'Fan Energy x2', difficulty: 'Social' },
        { type: 'Share', title: 'Viral Post Challenge', reward: 'Social Badge', difficulty: 'Hype' }
      ],
      'Neutral': [
        { type: 'Arena', title: 'FanVerse Onboarding Quiz', reward: '100 XP', difficulty: 'Rookie' },
        { type: 'Poll', title: 'Match Winner Prediction', reward: '50 Coins', difficulty: 'Standard' }
      ]
    };

    return recommendations[style] || recommendations['Neutral'];
  }
};
