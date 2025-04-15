import React from 'react';
import { DashboardStats } from './DashboardStats';
import { HabitListNew } from './HabitListNew';
import { MonthlyOverview } from './MonthlyOverview';
import { HabitBuddyCard } from './HabitBuddyCard';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="container mx-auto py-8 px-6 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track your habits and build consistency</p>
        </div>
        <Link to="/dashboard">
          <Button className="bg-violet-600 hover:bg-violet-700">
            Add Habit
          </Button>
        </Link>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <HabitListNew />
        </div>
        <div className="space-y-6">
          <HabitBuddyCard />
          <MonthlyOverview />
        </div>
      </div>
    </div>
  );
};
