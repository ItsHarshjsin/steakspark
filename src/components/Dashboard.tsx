
import React from 'react';
import { DashboardStats } from './DashboardStats';
import { HabitListNew } from './HabitListNew';
import { MonthlyOverview } from './MonthlyOverview';
import { AddHabitDialog } from './AddHabitDialog';

export const Dashboard = () => {
  return (
    <div className="container mx-auto py-8 px-6 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Track your habits and build consistency</p>
        </div>
        <AddHabitDialog variant="default" className="bg-violet-600 hover:bg-violet-700" />
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <HabitListNew />
        </div>
        <div>
          <MonthlyOverview />
        </div>
      </div>
    </div>
  );
};
