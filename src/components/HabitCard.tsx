
import React from 'react';
import { Habit } from '@/types/habit';
import { useHabits } from '@/contexts/HabitContext';
import { CheckCircle2, Circle, MoreVertical, Zap } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { HabitIcon } from './HabitIcon';

interface HabitCardProps {
  habit: Habit;
}

export const HabitCard = ({ habit }: HabitCardProps) => {
  const { toggleHabitCompletion, deleteHabit, getStreakPercentage } = useHabits();
  const today = new Date().toISOString().split('T')[0];
  const isCompletedToday = habit.completedDates.includes(today);
  const streakPercentage = getStreakPercentage(habit);

  const handleToggleCompletion = () => {
    toggleHabitCompletion(habit.id, today);
  };

  return (
    <Card className={cn(
      "habit-card animate-scale-in border-l-4",
      `border-l-${habit.color}`,
      isCompletedToday ? "bg-muted/30" : ""
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center gap-2 text-lg">
            <HabitIcon name={habit.icon} className={`text-${habit.color}`} />
            {habit.name}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => deleteHabit(habit.id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {habit.description && <CardDescription>{habit.description}</CardDescription>}
      </CardHeader>
      <CardContent className="pb-2">
        <div className="habit-progress-bg">
          <div 
            className={`h-full bg-${habit.color} rounded-full transition-all duration-500`} 
            style={{ width: `${streakPercentage}%` }} 
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-1">
        <div className="flex items-center gap-1 text-sm">
          <Zap className={`h-4 w-4 ${habit.streak > 0 ? `text-${habit.color}` : 'text-muted-foreground'}`} />
          <span className={habit.streak > 0 ? 'font-medium' : 'text-muted-foreground'}>
            {habit.streak} day{habit.streak !== 1 ? 's' : ''}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "flex items-center gap-1",
            isCompletedToday ? "text-green-600" : "text-muted-foreground"
          )}
          onClick={handleToggleCompletion}
        >
          {isCompletedToday ? (
            <CheckCircle2 className="h-5 w-5" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
          <span>{isCompletedToday ? 'Completed' : 'Mark complete'}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
