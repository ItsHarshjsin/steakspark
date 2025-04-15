import React from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { Dashboard } from '@/components/Dashboard';
import { AppSidebar } from '@/components/AppSidebar';

const Index = () => {
  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-end items-center h-14 px-4">
          </header>
          <main className="flex-1">
            <Dashboard />
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};

export default Index;
