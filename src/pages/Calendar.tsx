import React, { useState } from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format, addMonths, subMonths } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Calendar = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const today = new Date();
  const { habits } = useHabits();

  const handlePreviousMonth = () => {
    setCurrentMonth(prev => subMonths(prev, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => addMonths(prev, 1));
  };

  const habitCategories = [
    { name: 'Health', count: 1, color: 'bg-green-500' },
    { name: 'Productivity', count: 1, color: 'bg-blue-500' },
    { name: 'Mindfulness', count: 1, color: 'bg-purple-500' },
    { name: 'Learning', count: 1, color: 'bg-amber-500' },
    { name: 'Fitness', count: 1, color: 'bg-pink-500' },
    { name: 'Other', count: 0, color: 'bg-gray-500' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      <AppSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-end items-center h-14 px-4">
        </header>
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Calendar</h1>
            <p className="text-muted-foreground">View your habit history and track your progress</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Button variant="outline" size="icon" onClick={handlePreviousMonth} className="h-8 w-8">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-lg font-semibold">
                    {format(currentMonth, 'MMMM yyyy')}
                  </h2>
                  <Button variant="outline" size="icon" onClick={handleNextMonth} className="h-8 w-8">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  month={currentMonth}
                  className="rounded-md"
                  showOutsideDays
                  fixedWeeks
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6">
                <div className="flex items-center">
                  <div className="bg-purple-200 dark:bg-purple-800 p-2 rounded-md mr-3">
                    <CalendarIcon className="h-5 w-5 text-purple-700 dark:text-purple-300" />
                  </div>
                  <h2 className="text-lg font-semibold">{format(date, 'MMMM d, yyyy')}</h2>
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>0 / {habits.length} habits</span>
                </div>
                
                <div className="mt-8 py-12 text-center text-muted-foreground">
                  <p>No habits completed on this date</p>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-950/20 rounded-xl p-6">
                <h2 className="text-lg font-semibold mb-4">Habit Categories</h2>
                <div className="grid grid-cols-2 gap-4">
                  {habitCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`h-3 w-3 rounded-full ${category.color} mr-2`}></div>
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
