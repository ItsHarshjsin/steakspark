
import React from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDate, isToday, isSameMonth } from 'date-fns';
import { cn } from '@/lib/utils';

export const MonthlyOverview = () => {
  const { habits } = useHabits();
  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Count habits completed on each day
  const habitsByDay = days.map(day => {
    const dateString = format(day, 'yyyy-MM-dd');
    const completedCount = habits.filter(habit => 
      habit.completedDates.includes(dateString)
    ).length;
    
    const totalHabits = habits.length;
    const intensity = totalHabits === 0 ? 0 : Math.min(1, completedCount / totalHabits);
    
    return {
      date: day,
      count: completedCount,
      intensity,
    };
  });
  
  const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  return (
    <div className="bg-violet-50 dark:bg-violet-900/10 rounded-lg border border-border p-6">
      <h2 className="text-lg font-semibold mb-4">{format(today, 'MMMM yyyy')} Activity</h2>
      
      <div className="grid grid-cols-7 gap-2 text-center">
        {weekDays.map((day, index) => (
          <div key={index} className="text-xs font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        
        {habitsByDay.map(({ date, count, intensity }) => {
          // Determine background color based on intensity
          let bgColor = 'bg-transparent';
          
          if (intensity > 0) {
            if (intensity < 0.3) bgColor = 'bg-violet-100 dark:bg-violet-900/20';
            else if (intensity < 0.7) bgColor = 'bg-violet-200 dark:bg-violet-800/30';
            else bgColor = 'bg-violet-300 dark:bg-violet-700/40';
          }
          
          return (
            <div 
              key={date.toString()} 
              className={cn(
                "h-12 flex items-center justify-center rounded-md text-sm",
                isToday(date) ? "border-2 border-violet-500" : "border border-border",
                bgColor
              )}
            >
              <span className={count > 0 ? "font-medium" : "text-muted-foreground"}>
                {getDate(date)}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex justify-end gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-transparent border border-border"></div>
          <span>None</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-violet-100 dark:bg-violet-900/20 border border-border"></div>
          <span>Few</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-violet-300 dark:bg-violet-700/40 border border-border"></div>
          <span>Many</span>
        </div>
      </div>
    </div>
  );
};
