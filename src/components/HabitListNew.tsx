
import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { HabitIcon } from './HabitIcon';
import { Flame } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { AddHabitDialog } from './AddHabitDialog';

export const HabitListNew = () => {
  const { habits, toggleHabitCompletion } = useHabits();
  const today = new Date().toISOString().split('T')[0];
  
  const habitColors: Record<string, string> = {
    'habit-violet': 'bg-violet-100 text-violet-500 border-violet-200',
    'habit-teal': 'bg-emerald-100 text-emerald-500 border-emerald-200',
    'habit-orange': 'bg-orange-100 text-orange-500 border-orange-200',
    'habit-pink': 'bg-pink-100 text-pink-500 border-pink-200',
    'habit-green': 'bg-green-100 text-green-500 border-green-200',
    'habit-blue': 'bg-blue-100 text-blue-500 border-blue-200',
    'habit-red': 'bg-red-100 text-red-500 border-red-200',
    'habit-yellow': 'bg-amber-100 text-amber-500 border-amber-200',
  };

  const getColorClass = (color: string) => {
    return habitColors[color] || 'bg-violet-100 text-violet-500 border-violet-200';
  };

  const getIconColor = (color: string) => {
    if (color === 'habit-violet') return 'text-violet-500';
    if (color === 'habit-teal') return 'text-emerald-500';
    if (color === 'habit-orange') return 'text-orange-500';
    if (color === 'habit-pink') return 'text-pink-500';
    if (color === 'habit-green') return 'text-green-500';
    if (color === 'habit-blue') return 'text-blue-500';
    if (color === 'habit-red') return 'text-red-500';
    if (color === 'habit-yellow') return 'text-amber-500';
    return 'text-violet-500';
  };

  const completedToday = habits.filter(h => h.completedDates.includes(today)).length;
  const totalHabits = habits.length;
  const progressPercentage = totalHabits > 0 ? (completedToday / totalHabits) * 100 : 0;

  if (habits.length === 0) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center p-8 bg-muted/30 rounded-lg border border-border">
        <h3 className="text-xl font-medium text-muted-foreground mb-2">No habits yet</h3>
        <p className="text-muted-foreground mb-4">Add your first habit to start tracking</p>
        <AddHabitDialog />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Today's Habits</h2>
        <div className="text-sm text-muted-foreground">
          {completedToday}/{totalHabits} completed
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Daily Progress</span>
          <span className="text-sm font-medium">{Math.round(progressPercentage)}%</span>
        </div>
        <Progress value={progressPercentage} className="h-2" />
      </div>
      
      <div className="space-y-4">
        {habits.map((habit) => {
          const isCompleted = habit.completedDates.includes(today);
          return (
            <div key={habit.id} className="border border-border rounded-lg overflow-hidden bg-background">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center ${getColorClass(habit.color)}`}>
                    <HabitIcon name={habit.icon} className={getIconColor(habit.color)} />
                  </div>
                  <div>
                    <h3 className="font-medium">{habit.name}</h3>
                    <p className="text-xs text-muted-foreground">{habit.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs font-medium">
                    <Flame className={`h-4 w-4 ${habit.streak > 0 ? getIconColor(habit.color) : 'text-muted-foreground'}`} />
                    <span>{habit.streak}</span>
                  </div>
                  
                  <Button
                    onClick={() => toggleHabitCompletion(habit.id, today)}
                    variant={isCompleted ? "default" : "outline"}
                    size="sm"
                    className={isCompleted ? "bg-green-500 hover:bg-green-600" : ""}
                  >
                    {isCompleted ? "Completed" : "Complete"}
                  </Button>
                </div>
              </div>
              
              <div className="px-4 pb-1 text-xs text-muted-foreground">
                <span>Created {new Date(habit.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
