'use client';

import { useState } from 'react';
import UserProfileCard from '../../components/UserProfileCard';
import BadgeGallery from '../../components/BadgeGallery';
import AIAvatarGenerator from '../../components/AIAvatarGenerator';
import DailyCheckin from '../../components/DailyCheckin';
import ShareCardGenerator from '../../components/ShareCardGenerator';
import FanPostGenerator from '../../components/FanPostGenerator';
import ReputationLeaderboard from '../../components/ReputationLeaderboard';
import EditProfileModal from '../../components/EditProfileModal';
import BackgroundParticles from '../../components/BackgroundParticles';

export default function ProfilePage() {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [userData, setUserData] = useState({
    username: "Fan Analyst",
    bio: "AI-powered sports strategist. Predicting momentum shifts since 2024.",
    team: "RCB",
    level: 15,
  });

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative bg-[var(--background)] overflow-hidden">
      <BackgroundParticles />
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <UserProfileCard user={userData} onEdit={() => setIsEditOpen(true)} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <BadgeGallery />
            <AIAvatarGenerator />
            <ShareCardGenerator type="prediction" />
          </div>
          <div className="space-y-12">
            <DailyCheckin />
            <FanPostGenerator />
            <ReputationLeaderboard />
            <div className="glass-card p-8 border-white/5">
              <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-6 text-center">Prediction DNA</h3>
              <div className="space-y-6">
                {[
                  { label: 'Accuracy', value: '88%' },
                  { label: 'Streak', value: '12 Matches' },
                  { label: 'Oracle Score', value: '2,450' }
                ].map(stat => (
                  <div key={stat.label} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-sm font-black text-white italic">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal 
        isOpen={isEditOpen} 
        onClose={() => setIsEditOpen(false)} 
        user={userData}
        onSave={(updated) => setUserData(updated)}
      />
    </main>
  );
}
