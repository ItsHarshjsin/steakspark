
import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { Activity, Flame, Zap, Trophy } from 'lucide-react';

export const DashboardStats = () => {
  const { 
    habits, 
    getTotalCompletions, 
    getLongestStreak,
    getHabitsCompletedToday,
  } = useHabits();

  const totalHabits = habits.length;
  const completedToday = getHabitsCompletedToday();
  const completionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;
  const currentStreak = getLongestStreak();
  const bestStreak = 14; // This would normally be calculated from historical data

  const stats = [
    {
      title: "Today's Progress",
      value: `${completionRate}%`,
      subtitle: `${completedToday} of ${totalHabits} habits completed`,
      icon: <Activity className="h-5 w-5 text-violet-500" />,
      color: 'bg-violet-100 dark:bg-violet-900/20',
      textColor: 'text-violet-500',
    },
    {
      title: "Current Streak",
      value: currentStreak.toString(),
      subtitle: "Your longest active streak",
      icon: <Flame className="h-5 w-5 text-orange-500" />,
      color: 'bg-orange-100 dark:bg-orange-900/20',
      textColor: 'text-orange-500',
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      subtitle: "Average daily completion",
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      color: 'bg-blue-100 dark:bg-blue-900/20',
      textColor: 'text-blue-500',
    },
    {
      title: "Best Streak",
      value: bestStreak.toString(),
      subtitle: "Your all-time best",
      icon: <Trophy className="h-5 w-5 text-rose-500" />,
      color: 'bg-rose-100 dark:bg-rose-900/20',
      textColor: 'text-rose-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className={`p-6 rounded-lg ${stat.color} border border-border`}>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</h3>
              <p className={`text-3xl font-bold ${stat.textColor}`}>{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.subtitle}</p>
            </div>
            <div className={`${stat.color} p-2 rounded-full`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
