import React from "react";

const CommentaryFeed = ({ commentary }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 text-white flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">AI Commentary</h2>
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {commentary.map((item, index) => (
          <p key={index} className="text-gray-300">
            <span className="font-semibold text-orange-400">
              {item.time} -{" "}
            </span>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CommentaryFeed;
