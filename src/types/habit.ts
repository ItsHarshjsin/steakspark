
export type HabitFrequency = 'daily' | 'weekly' | 'monthly';

export interface Habit {
  id: string;
  name: string;
  description?: string;
  frequency: HabitFrequency;
  color: string;
  icon: string;
  createdAt: Date;
  completedDates: string[]; // ISO date strings
  streak: number;
  target: number;
}

export interface DailyProgress {
  date: string;
  completed: boolean;
}
