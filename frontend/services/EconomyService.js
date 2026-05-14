export const EconomyService = {
  getCoins: () => {
    if (typeof window === 'undefined') return 1000;
    return parseInt(localStorage.getItem('fanverse-coins') || '1000');
  },

  addCoins: (amount) => {
    if (typeof window === 'undefined') return amount;
    const current = EconomyService.getCoins();
    const updated = current + amount;
    localStorage.setItem('fanverse-coins', updated.toString());
    return updated;
  },

  placeWager: (amount) => {
    if (typeof window === 'undefined') return false;
    const current = EconomyService.getCoins();
    if (current < amount) return false;
    
    const updated = current - amount;
    localStorage.setItem('fanverse-coins', updated.toString());
    return updated;
  },

  getWagerHistory: () => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('fanverse-wagers') || '[]');
  },

  recordWager: (prediction, amount, potentialReturn) => {
    if (typeof window === 'undefined') return;
    const history = EconomyService.getWagerHistory();
    const entry = {
      timestamp: new Date().toISOString(),
      prediction,
      amount,
      potentialReturn,
      status: 'pending'
    };
    localStorage.setItem('fanverse-wagers', JSON.stringify([entry, ...history].slice(0, 20)));
  }
};

