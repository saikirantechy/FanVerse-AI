import React from "react";

const LiveScoreCard = ({ score, overs, target, winProbability }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 text-white flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">Live Score</h2>
      <div className="text-5xl font-extrabold text-green-400">{score}</div>
      <p className="text-lg">Overs: {overs}</p>
      <p className="text-lg">Target: {target}</p>
      <div className="w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700 mt-4">
        <div
          className="bg-google-blue h-2.5 rounded-full"
          style={{ width: `${winProbability}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-400">
        Win Probability: {winProbability}%
      </p>
    </div>
  );
};

export default LiveScoreCard;
