
import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { HabitCard } from './HabitCard';
import { AddHabitDialog } from './AddHabitDialog';
import { Inbox } from 'lucide-react';

export const HabitList = () => {
  const { habits } = useHabits();

  if (habits.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center py-12 bg-muted/30 rounded-xl border border-border">
        <Inbox className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-medium text-muted-foreground mb-2">No habits yet</h3>
        <p className="text-muted-foreground mb-4">Add your first habit to start tracking</p>
        <AddHabitDialog />
      </div>
    );
  }

  return (
    <div className="habit-grid">
      {habits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </div>
  );
};
