'use client';

import PublicProfileCard from '../../../components/PublicProfileCard';
import BadgeGallery from '../../../components/BadgeGallery';
import BackgroundParticles from '../../../components/BackgroundParticles';
import { useParams } from 'next/navigation';
import { AIMemoryManager } from '../../../utils/AIMemoryManager';
import { useState, useEffect } from 'react';

export default function PublicProfilePage() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = AIMemoryManager.getProfileData();
    // If the username matches the current user, use their data, otherwise mock it for other profiles
    if (username && username.toLowerCase() === data.username.toLowerCase()) {
      setUser(data);
    } else {
      setUser({
        username: username || "CricketOracle_99",
        level: 42,
        accuracy: "94%",
        team: "RCB",
        achievements: 24,
        prestige: true,
        bio: "AI Sports Analyst & Die-hard Cricket Fan."
      });
    }
  }, [username]);

  if (!user) return null;


  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-[var(--background)] overflow-hidden">
      <BackgroundParticles />
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4">Official Fan Identity</h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">This fan identity is verified on the FanVerse AI Sports Metaverse. Accuracy and achievements are processed by agentic AI models.</p>
        </div>

        <PublicProfileCard user={user} />
        
        <div className="max-w-4xl mx-auto">
          <BadgeGallery />
        </div>

        <div className="flex flex-col items-center gap-6 pt-12">
          <button className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white uppercase italic tracking-widest hover:bg-white/10 transition-all">
            Join the FanVerse Metaverse
          </button>
          <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Powered by Google Cloud & Gemini Pro</p>
        </div>
      </div>
    </main>
  );
}
