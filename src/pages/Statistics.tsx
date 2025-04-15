import React, { useState } from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { LineChart, BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

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
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center h-14 px-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">Statistics</h1>
            </div>
          </header>
          <main className="flex-1 p-6 space-y-6">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Statistics</h1>
                <p className="text-muted-foreground mt-2">Track your progress and analyze your habits</p>
              </motion.div>
            
              <Tabs defaultValue="completion-rate" className="space-y-8">
                <TabsList className="bg-violet-50 dark:bg-violet-950/20 p-1 rounded-lg">
                  <TabsTrigger value="completion-rate" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Completion Rate
                  </TabsTrigger>
                  <TabsTrigger value="categories" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Categories
                  </TabsTrigger>
                  <TabsTrigger value="streaks" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Streaks
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="completion-rate">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-violet-950/10 rounded-xl shadow-sm border border-border p-6"
                  >
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                        Completion Rate
                      </h2>
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
                        <XAxis dataKey="date" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '8px'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="completionRate" 
                          name="Completion Rate"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ fill: '#8b5cf6', r: 4 }}
                          activeDot={{ r: 6, fill: '#7c3aed' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </motion.div>
                </TabsContent>

                <TabsContent value="categories">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-violet-950/10 rounded-xl shadow-sm border border-border p-6"
                  >
                    <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      Habits by Category
                    </h2>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart data={habitsByCategoryData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="name" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '8px'
                          }}
                        />
                        <Legend />
                        <Bar 
                          dataKey="total" 
                          name="Total Habits" 
                          fill="#8b5cf6" 
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar 
                          dataKey="completed" 
                          name="Completed Today" 
                          fill="#a78bfa"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </TabsContent>

                <TabsContent value="streaks">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-violet-950/10 rounded-xl shadow-sm border border-border p-6"
                  >
                    <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                      Top Streaks
                    </h2>
                    <ResponsiveContainer width="100%" height={400}>
                      <BarChart layout="vertical" data={streaksData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis type="number" stroke="#666" />
                        <YAxis type="category" dataKey="name" width={150} stroke="#666" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '8px'
                          }}
                        />
                        <Legend />
                        <Bar 
                          dataKey="currentStreak" 
                          name="Current Streak" 
                          fill="#8b5cf6"
                          radius={[0, 4, 4, 0]}
                        />
                        <Bar 
                          dataKey="longestStreak" 
                          name="Longest Streak" 
                          fill="#a78bfa"
                          radius={[0, 4, 4, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};
