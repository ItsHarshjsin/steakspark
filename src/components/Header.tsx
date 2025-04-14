
import React from 'react';
import { Zap } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export const Header = () => {
  return (
    <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          <span className="font-semibold">StreakSpark</span>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
