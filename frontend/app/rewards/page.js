'use client';
import DashboardLayout from '../../components/DashboardLayout';
import FanRewardStore from '../../components/FanRewardStore';
import SeasonPassport from '../../components/SeasonPassport';
import DailyChallenges from '../../components/DailyChallenges';
import SectionHeader from '../../components/ui/SectionHeader';
import { Gift } from 'lucide-react';

export default function RewardsPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader 
          title="Fan Rewards" 
          subtitle="Redeem your coins" 
          icon={Gift} 
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FanRewardStore />
          <SeasonPassport />
          <DailyChallenges />
        </div>
      </div>
    </DashboardLayout>
  );
}
