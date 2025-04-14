
import React from 'react';
import { HabitStats } from './HabitStats';
import { HabitList } from './HabitList';
import { AddHabitDialog } from './AddHabitDialog';

export const Dashboard = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container mx-auto py-8 px-4 max-w-6xl animate-slide-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold streak-gradient">StreakSpark</h1>
          <p className="text-muted-foreground">{formattedDate}</p>
        </div>
        <AddHabitDialog />
      </div>

      <div className="mb-8">
        <HabitStats />
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Habits</h2>
      </div>

      <HabitList />
    </div>
  );
};
