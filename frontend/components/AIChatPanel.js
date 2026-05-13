'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AIChatPanel(props) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm your AI Sports Companion. CSK needs a big over here to stay in the hunt. Ask me anything about the match strategy or player stats!" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    try {
      const response = await fetch('http://127.0.0.1:5001/fanverse-ai/us-central1/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: input,
          history: messages.map(m => ({ role: m.role, parts: [{ text: m.content }] })),
          match_context: props.matchContext
        })
      });

      if (!response.ok) throw new Error('API Error');
      
      const data = await response.json();
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || "I'm processing that... The match is heating up!" 
      }]);
    } catch (error) {
      console.error("Chat Error:", error);
      // Fallback response
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "The signal in the stadium is weak! (Backend not connected). But RCB is definitely under pressure here." 
      }]);
    }
  };

  return (
    <div className="glass-card flex flex-col h-[500px]">
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-500 p-0.5">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold">AI</div>
          </div>
          <div>
            <h3 className="font-bold text-sm">Gemini Assistant</h3>
            <p className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">Online & Analyzing</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-50' 
                  : 'bg-white/5 border border-white/10 text-gray-300'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSend} className="p-4 border-t border-white/10">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask AI about the match..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 pr-12 text-sm focus:outline-none focus:border-cyan-500/50 transition-all"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-cyan-500 rounded-lg text-black hover:bg-cyan-400 transition-colors"
          >
            <span className="font-bold">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
