import React from 'react';
import { Flame, Trophy } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full backdrop-blur-lg bg-white/10 p-4 flex justify-between items-center rounded-b-2xl shadow-xl fixed top-0 left-0 z-50">
      <div className="flex items-center space-x-2">
        <Flame className="text-orange-500" size={24} />
        <h1 className="text-2xl font-bold text-white">FanVerse AI</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-orange-500 transition-colors duration-200">Live Match</button>
        <button className="text-white hover:text-orange-500 transition-colors duration-200">Leaderboard</button>
        <button className="text-white hover:text-orange-500 transition-colors duration-200">My Predictions</button>
        <Trophy className="text-yellow-400" size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
