import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Copy, RefreshCw } from 'lucide-react';

export default function FanPostGenerator() {
  const [post, setPost] = useState("RCB domination tonight 🔥 FanVerse AI predicted this momentum shift 3 overs ago 🧠🏏 #APL2026 #FanVerse");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePost = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const posts = [
        "Just unlocked the 'Match Oracle' badge on FanVerse AI! My prediction accuracy is now at 92%. Who's the real captain? 😎 #AgenticPremierLeague",
        "The momentum shift just hit 85% for RCB. FanVerse AI is ahead of the broadcast as usual. 🚀📈 #CricketAI #FanVerse",
        "Just reached Level 15 in the FanVerse season! Strategic insights helping me climb the global ranks. 🏆🏏 #SportsGaming"
      ];
      setPost(posts[Math.floor(Math.random() * posts.length)]);
      setIsGenerating(false);
    }, 1200);
  };

  return (
    <div className="glass-card p-8 border-purple-500/20 bg-purple-500/5">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-1">AI Fan Post Generator</h3>
          <p className="text-sm font-black text-white italic uppercase tracking-tighter">Hype the Crowd</p>
        </div>
        <Send size={20} className="text-purple-400" />
      </div>

      <div className="relative mb-8">
        <textarea 
          value={post}
          onChange={(e) => setPost(e.target.value)}
          className="w-full bg-black/40 border border-white/5 rounded-[32px] p-8 text-white italic text-sm outline-none focus:border-purple-500/50 min-h-[160px] resize-none"
        />
        {isGenerating && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[32px]">
            <RefreshCw className="text-purple-400 animate-spin" size={32} />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={generatePost}
          className="flex items-center justify-center gap-3 py-4 bg-purple-600 text-white rounded-2xl text-[10px] font-black uppercase italic tracking-widest hover:bg-purple-500 transition-all"
        >
          <RefreshCw size={14} /> Generate New Hype
        </button>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white rounded-2xl text-[10px] font-black uppercase italic tracking-widest hover:bg-white/10 transition-all">
            <Copy size={14} /> Copy
          </button>
          <button className="flex items-center justify-center gap-3 py-4 bg-[#1DA1F2] text-white rounded-2xl text-[10px] font-black uppercase italic tracking-widest hover:scale-105 transition-all">
            <Send size={14} /> Post
          </button>
        </div>
      </div>
    </div>
  );
}
