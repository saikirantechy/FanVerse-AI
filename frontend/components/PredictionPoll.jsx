import React from 'react';

const PredictionPoll = ({ question, options, onVote }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 text-white flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Prediction Poll</h2>
      <p className="text-lg font-semibold text-google-blue">{question}</p>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="bg-gray-700 hover:bg-google-blue-dark transition-colors duration-200 text-white py-2 px-4 rounded-lg"
            onClick={() => onVote(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PredictionPoll;
