
import React from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { ModeToggle } from '@/components/ModeToggle';

export const Calendar = () => {
  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-end items-center h-14 px-4">
            <ModeToggle />
          </header>
          <main className="flex-1 p-8">
            <h1 className="text-3xl font-bold">Calendar</h1>
            <p className="text-muted-foreground">View your habits on a calendar</p>
            <div className="mt-8 p-8 border border-dashed rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Calendar view coming soon...</p>
            </div>
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};
