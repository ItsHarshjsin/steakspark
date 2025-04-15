import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, ChartBar, Settings, PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const AppSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { 
      name: 'Dashboard', 
      path: '/dashboard', 
      icon: <Activity className="h-4 w-4" /> 
    },
    { 
      name: 'Statistics', 
      path: '/statistics', 
      icon: <ChartBar className="h-4 w-4" /> 
    },
    { 
      name: 'Settings', 
      path: '/settings', 
      icon: <Settings className="h-4 w-4" /> 
    },
  ];

  return (
    <aside className="w-60 border-r border-border bg-background/95 h-screen sticky top-0 flex flex-col overflow-hidden">
      <div className="p-2.5">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white">
            <span className="font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-base bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">StreakSpark</span>
        </Link>
      </div>
      
      <div className="flex-1 py-3 px-2 flex flex-col min-h-0">
        <div className="mb-2">
          <p className="text-xs font-medium text-muted-foreground pl-2 mb-1.5">Menu</p>
          <nav className="space-y-0.5">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start gap-2 hover:bg-violet-50 hover:text-violet-700 dark:hover:bg-violet-950/30 dark:hover:text-violet-300 py-1.5",
                    location.pathname === item.path ? "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300 font-medium" : "font-normal"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="mt-auto mb-2">
          <p className="text-xs font-medium text-muted-foreground pl-2 mb-1.5">Actions</p>
          <Link to="/dashboard">
            <Button 
              size="sm"
              className="w-full justify-start gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white transition-all duration-300 py-1.5" 
              variant="default"
            >
              <PlusCircle className="h-4 w-4" />
              Add New Habit
            </Button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
