import React, { useState } from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Statistics = () => {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  
  // Sample data for charts
  const completionRateData = [
    { date: 'Apr 08', completionRate: 50 },
    { date: 'Apr 09', completionRate: 60 },
    { date: 'Apr 10', completionRate: 55 },
    { date: 'Apr 11', completionRate: 65 },
    { date: 'Apr 12', completionRate: 58 },
    { date: 'Apr 13', completionRate: 70 },
    { date: 'Apr 14', completionRate: 40 },
  ];

  const habitsByCategoryData = [
    { name: 'Mindfulness', total: 1, completed: 0 },
    { name: 'Learning', total: 1, completed: 0 },
    { name: 'Fitness', total: 1, completed: 0 },
    { name: 'Health', total: 1, completed: 0 },
    { name: 'Productivity', total: 1, completed: 0 },
  ];

  const streaksData = [
    { name: 'Read 20 Pages', currentStreak: 2, longestStreak: 15 },
    { name: 'Morning Meditation', currentStreak: 3, longestStreak: 12 },
    { name: 'Drink 2L Water', currentStreak: 7, longestStreak: 10 },
    { name: 'Workout', currentStreak: 1, longestStreak: 8 },
    { name: 'No Social Media', currentStreak: 2, longestStreak: 4 },
  ];

  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-end items-center h-14 px-4">
          </header>
          <main className="flex-1 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Statistics</h1>
              <p className="text-muted-foreground">Track your progress and analyze your habits</p>
            </div>
            
            <Tabs defaultValue="completion-rate">
              <TabsList className="mb-8">
                <TabsTrigger value="completion-rate">Completion Rate</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="streaks">Streaks</TabsTrigger>
              </TabsList>

              <TabsContent value="completion-rate">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Completion Rate</h2>
                    <div className="flex space-x-2">
                      <Button 
                        variant={timeRange === 'week' ? 'default' : 'outline'} 
                        size="sm" 
                        onClick={() => setTimeRange('week')} 
                        className={timeRange === 'week' ? 'bg-violet-600 hover:bg-violet-700' : ''}
                      >
                        Week
                      </Button>
                      <Button 
                        variant={timeRange === 'month' ? 'default' : 'outline'} 
                        size="sm" 
                        onClick={() => setTimeRange('month')}
                        className={timeRange === 'month' ? 'bg-violet-600 hover:bg-violet-700' : ''}
                      >
                        Month
                      </Button>
                      <Button 
                        variant={timeRange === 'year' ? 'default' : 'outline'} 
                        size="sm" 
                        onClick={() => setTimeRange('year')}
                        className={timeRange === 'year' ? 'bg-violet-600 hover:bg-violet-700' : ''}
                      >
                        Year
                      </Button>
                    </div>
                  </div>
                  
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={completionRateData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="date" />
                      <YAxis 
                        domain={[0, 100]}
                        tickFormatter={(value) => `${value}%`}
                        label={{ value: '%', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, "Completion Rate"]} 
                        labelFormatter={(label) => `Date: ${label}`}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="completionRate" 
                        stroke="#9b87f5" 
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                        name="Completion Rate"
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="categories">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-6">Habits by Category</h2>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={habitsByCategoryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="total" name="Total Habits" fill="#33C3F0" />
                      <Bar dataKey="completed" name="Completed Today" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="streaks">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-6">Top Streaks</h2>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart layout="vertical" data={streaksData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" width={150} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="currentStreak" name="Current Streak" fill="#33C3F0" />
                      <Bar dataKey="longestStreak" name="Longest Streak" fill="#9b87f5" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};
