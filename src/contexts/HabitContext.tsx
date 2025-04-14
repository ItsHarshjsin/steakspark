
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Habit, HabitFrequency } from '@/types/habit';
import { toast } from '@/components/ui/use-toast';
import { v4 as uuidv4 } from 'uuid';

interface HabitContextType {
  habits: Habit[];
  addHabit: (habit: Omit<Habit, 'id' | 'createdAt' | 'completedDates' | 'streak'>) => void;
  deleteHabit: (id: string) => void;
  toggleHabitCompletion: (id: string, date: string) => void;
  getHabitById: (id: string) => Habit | undefined;
  getStreakPercentage: (habit: Habit) => number;
  getTotalCompletions: () => number;
  getLongestStreak: () => number;
  getHabitsCompletedToday: () => number;
}

const defaultHabits: Habit[] = [
  {
    id: '1',
    name: 'Drink Water',
    description: 'Drink 8 glasses of water daily',
    frequency: 'daily',
    color: 'habit-teal',
    icon: 'droplet',
    createdAt: new Date(),
    completedDates: [
      new Date().toISOString().split('T')[0],
      new Date(Date.now() - 86400000).toISOString().split('T')[0],
      new Date(Date.now() - 86400000 * 2).toISOString().split('T')[0],
    ],
    streak: 3,
    target: 8,
  },
  {
    id: '2',
    name: 'Exercise',
    description: 'Workout for 30 minutes',
    frequency: 'daily',
    color: 'habit-orange',
    icon: 'dumbbell',
    createdAt: new Date(),
    completedDates: [
      new Date().toISOString().split('T')[0],
      new Date(Date.now() - 86400000).toISOString().split('T')[0],
    ],
    streak: 2,
    target: 30,
  },
  {
    id: '3',
    name: 'Read',
    description: 'Read for 20 minutes',
    frequency: 'daily',
    color: 'habit-violet',
    icon: 'book-open',
    createdAt: new Date(),
    completedDates: [
      new Date(Date.now() - 86400000).toISOString().split('T')[0],
    ],
    streak: 1,
    target: 20,
  },
  {
    id: '4',
    name: 'Meditate',
    description: 'Meditate for 10 minutes',
    frequency: 'daily',
    color: 'habit-pink',
    icon: 'spa',
    createdAt: new Date(),
    completedDates: [],
    streak: 0,
    target: 10,
  },
];

const HabitContext = createContext<HabitContextType | undefined>(undefined);

export const useHabits = (): HabitContextType => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};

export const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) {
      try {
        const parsedHabits = JSON.parse(savedHabits);
        return parsedHabits.map((habit: Habit) => ({
          ...habit,
          createdAt: new Date(habit.createdAt),
        }));
      } catch (error) {
        console.error('Error parsing habits from localStorage', error);
        return defaultHabits;
      }
    }
    return defaultHabits;
  });

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habitData: Omit<Habit, 'id' | 'createdAt' | 'completedDates' | 'streak'>) => {
    const newHabit: Habit = {
      ...habitData,
      id: uuidv4(),
      createdAt: new Date(),
      completedDates: [],
      streak: 0,
    };

    setHabits((prev) => [...prev, newHabit]);
    toast({
      title: 'Habit added',
      description: `${habitData.name} has been added to your habits.`,
    });
  };

  const deleteHabit = (id: string) => {
    const habitToDelete = habits.find((h) => h.id === id);
    if (habitToDelete) {
      setHabits((prev) => prev.filter((habit) => habit.id !== id));
      toast({
        title: 'Habit deleted',
        description: `${habitToDelete.name} has been deleted.`,
      });
    }
  };

  const toggleHabitCompletion = (id: string, date: string) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== id) return habit;

        const isAlreadyCompleted = habit.completedDates.includes(date);
        let completedDates = [...habit.completedDates];
        let streak = habit.streak;

        if (isAlreadyCompleted) {
          // Remove date if already completed
          completedDates = completedDates.filter((d) => d !== date);
          
          // Recalculate streak
          const today = new Date().toISOString().split('T')[0];
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          
          if (date === today && completedDates.includes(yesterday)) {
            streak = calculateStreak(completedDates);
          } else if (date === today) {
            streak = 0;
          }
        } else {
          // Add date if not completed
          completedDates.push(date);
          
          // Sort dates to ensure chronological order for streak calculation
          completedDates.sort();
          
          // Calculate streak
          streak = calculateStreak(completedDates);
        }

        return {
          ...habit,
          completedDates,
          streak,
        };
      })
    );
  };

  // Helper function to calculate streak
  const calculateStreak = (dates: string[]): number => {
    if (dates.length === 0) return 0;
    
    // Sort dates
    const sortedDates = [...dates].sort();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    
    // If the latest date is not today or yesterday, streak is broken
    if (sortedDates[sortedDates.length - 1] !== today && sortedDates[sortedDates.length - 1] !== yesterday) {
      return 0;
    }
    
    let streak = 1;
    let currentDate = new Date(sortedDates[sortedDates.length - 1]);
    
    // Count consecutive days
    for (let i = sortedDates.length - 2; i >= 0; i--) {
      const prevDate = new Date(sortedDates[i]);
      const diffTime = currentDate.getTime() - prevDate.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        streak++;
        currentDate = prevDate;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getHabitById = (id: string) => {
    return habits.find((habit) => habit.id === id);
  };

  const getStreakPercentage = (habit: Habit): number => {
    if (habit.target <= 0) return 0;
    return Math.min(100, Math.round((habit.streak / habit.target) * 100));
  };

  const getTotalCompletions = (): number => {
    return habits.reduce((total, habit) => total + habit.completedDates.length, 0);
  };

  const getLongestStreak = (): number => {
    return habits.reduce((longest, habit) => Math.max(longest, habit.streak), 0);
  };

  const getHabitsCompletedToday = (): number => {
    const today = new Date().toISOString().split('T')[0];
    return habits.filter((habit) => habit.completedDates.includes(today)).length;
  };

  return (
    <HabitContext.Provider
      value={{
        habits,
        addHabit,
        deleteHabit,
        toggleHabitCompletion,
        getHabitById,
        getStreakPercentage,
        getTotalCompletions,
        getLongestStreak,
        getHabitsCompletedToday,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};
