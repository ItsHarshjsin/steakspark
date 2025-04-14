
import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export const ModeToggle = () => {
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
