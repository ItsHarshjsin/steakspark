
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Calendar, ChartBar, Settings, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const AppSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: <Activity className="h-5 w-5" /> 
    },
    { 
      name: 'Calendar', 
      path: '/calendar', 
      icon: <Calendar className="h-5 w-5" /> 
    },
    { 
      name: 'Statistics', 
      path: '/statistics', 
      icon: <ChartBar className="h-5 w-5" /> 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: <Settings className="h-5 w-5" /> 
    },
  ];

  return (
    <aside className="w-60 border-r border-border bg-background/95 h-screen flex flex-col">
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground">
            <span className="font-bold">S</span>
          </div>
          <span className="font-semibold text-lg">StreakSpark</span>
        </Link>
      </div>
      
      <div className="flex-1 py-8 px-3 flex flex-col">
        <div className="mb-6">
          <p className="text-xs font-medium text-muted-foreground pl-3 mb-3">Menu</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3",
                    location.pathname === item.path ? "font-medium" : "font-normal"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto">
          <p className="text-xs font-medium text-muted-foreground pl-3 mb-3">Actions</p>
          <Link to="/dashboard">
            <Button className="w-full justify-start gap-3 bg-violet-600 hover:bg-violet-700 text-white" variant="default">
              <PlusCircle className="h-5 w-5" />
              Add New Habit
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="p-3 text-xs text-muted-foreground border-t border-border">
        StreakSpark v1.0
      </div>
    </aside>
  );
};
