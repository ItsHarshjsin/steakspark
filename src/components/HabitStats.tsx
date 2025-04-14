
import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { Activity, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const HabitStats = () => {
  const { 
    habits, 
    getTotalCompletions, 
    getLongestStreak,
    getHabitsCompletedToday
  } = useHabits();

  const totalHabits = habits.length;
  const totalCompletions = getTotalCompletions();
  const longestStreak = getLongestStreak();
  const habitsCompletedToday = getHabitsCompletedToday();

  const stats = [
    {
      title: 'Total Habits',
      value: totalHabits,
      icon: <Activity className="h-5 w-5 text-habit-violet" />,
      color: 'bg-habit-violet/10',
    },
    {
      title: 'Today',
      value: habitsCompletedToday,
      icon: <CheckCircle2 className="h-5 w-5 text-habit-green" />,
      color: 'bg-habit-green/10',
    },
    {
      title: 'Completions',
      value: totalCompletions,
      icon: <Calendar className="h-5 w-5 text-habit-teal" />,
      color: 'bg-habit-teal/10',
    },
    {
      title: 'Longest Streak',
      value: longestStreak,
      icon: <Zap className="h-5 w-5 text-habit-orange" />,
      color: 'bg-habit-orange/10',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <div className={`${stat.color} p-2 rounded-full mb-2`}>
              {stat.icon}
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.title}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
