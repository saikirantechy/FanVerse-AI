import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MomentumMeter = ({ momentum, insights }) => {
  const isRising = momentum > 50; // Assuming momentum is a value from 0-100
  const momentumColor = isRising ? 'text-green-500' : 'text-red-500';
  const momentumIcon = isRising ? <TrendingUp size={20} /> : <TrendingDown size={20} />;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 text-white flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Match Momentum</h2>
      <div className="flex items-center space-x-2">
        {momentumIcon}
        <p className={`text-xl font-semibold ${momentumColor}`}>{momentum}%</p>
      </div>
      <p className="text-gray-300">{insights}</p>
    </div>
  );
};

export default MomentumMeter;
