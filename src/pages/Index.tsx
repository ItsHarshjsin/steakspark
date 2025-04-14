
import React from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { Dashboard } from '@/components/Dashboard';
import { Header } from '@/components/Header';

const Index = () => {
  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </HabitProvider>
  );
};

export default Index;
