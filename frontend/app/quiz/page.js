'use client';
import DashboardLayout from '../../components/DashboardLayout';
import QuizArena from '../../components/QuizArena';
import SectionHeader from '../../components/ui/SectionHeader';
import { Brain } from 'lucide-react';

export default function QuizPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <SectionHeader 
          title="Quiz Arena" 
          subtitle="Prove your knowledge" 
          icon={Brain} 
        />
        <QuizArena />
      </div>
    </DashboardLayout>
  );
}
