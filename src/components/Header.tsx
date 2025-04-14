
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';

export const Header = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold">StreakSpark</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {isLandingPage ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Features</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Testimonials</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </>
          ) : null}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
