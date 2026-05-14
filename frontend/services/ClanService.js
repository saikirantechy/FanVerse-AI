export const ClanService = {
  getClans: () => {
    return [
      { id: 'csk', name: 'CSK Superstars', xp: '1.2M', members: '42,000', rank: 1, color: '#facc15', gradient: 'from-yellow-500/20' },
      { id: 'rcb', name: 'RCB Dominators', xp: '1.1M', members: '38,500', rank: 2, color: '#ef4444', gradient: 'from-red-500/20' },
      { id: 'mi', name: 'MI Legends', xp: '980K', members: '35,200', rank: 3, color: '#3b82f6', gradient: 'from-blue-500/20' },
      { id: 'kkr', name: 'KKR Knights', xp: '850K', members: '29,000', rank: 4, color: '#a855f7', gradient: 'from-purple-500/20' },
    ];
  },

  getUserClan: () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('fanverse-clan') || null;
  },

  joinClan: (clanId) => {
    if (typeof window === 'undefined') return clanId;
    localStorage.setItem('fanverse-clan', clanId);
    return clanId;
  },


  getClanStats: (clanId) => {
    const clans = ClanService.getClans();
    return clans.find(c => c.id === clanId);
  }
};
