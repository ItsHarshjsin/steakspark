import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { Zap, Flame, Bird, MoveRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const HabitBuddyCard = () => {
  const { getLongestStreak } = useHabits();
  const streak = getLongestStreak();
  
  let stage: 'spark' | 'flame' | 'phoenix' = 'spark';
  let icon = <Zap className="h-6 w-6 text-amber-500" />;
  let color = 'bg-amber-100';
  let title = 'Spark';
  let description = 'Complete your first day to ignite your habit spark.';
  let day = '1';
  let progress = 10;
  
  if (streak >= 7 && streak < 30) {
    stage = 'flame';
    icon = <Flame className="h-6 w-6 text-orange-500" />;
    color = 'bg-orange-100';
    title = 'Flame';
    description = 'Building momentum and consistency';
    day = streak.toString();
    progress = 50;
  } else if (streak >= 30) {
    stage = 'phoenix';
    icon = <Bird className="h-6 w-6 text-pink-500" />;
    color = 'bg-pink-100';
    title = 'Phoenix';
    description = 'You\'ve mastered your habit streak!';
    day = '30+';
    progress = 100;
  } else if (streak > 0) {
    day = streak.toString();
    progress = Math.min(Math.round((streak / 30) * 100), 100);
  }

  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Habit Buddy</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}>
            {icon}
          </div>
          <div>
            <div className="flex items-center">
              <h3 className="font-semibold">{title}</h3>
              {stage === 'phoenix' && (
                <span className="ml-2 px-2 py-0.5 bg-orange-100 text-orange-500 text-xs rounded-full">
                  Ultimate Form
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between mb-2 items-center">
            <span className="text-sm font-medium flex items-center">
              <span>Progress</span>
              <MoveRight size={14} className="ml-1 text-violet-500" />
            </span>
            <span className="text-sm bg-violet-100 px-2 py-0.5 rounded-full text-violet-600">
              Day {day}
            </span>
          </div>
          <div className="h-2 w-full bg-gradient-to-r from-amber-200 via-orange-300 to-pink-400 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 rounded-full ${
                stage === 'spark' 
                  ? 'bg-amber-400' 
                  : stage === 'flame' 
                    ? 'bg-orange-400' 
                    : 'bg-pink-500'
              }`} 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 