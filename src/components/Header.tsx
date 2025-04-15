import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2.5 mr-8 group">
          <Sparkles className="h-7 w-7 text-violet-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          <span className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">StreakSpark</span>
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-3">
          <Button 
            asChild 
            variant="ghost" 
            className="text-sm relative overflow-hidden transition-all duration-300 hover:bg-violet-50 hover:text-violet-700 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-violet-100 after:to-violet-50 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
          >
            <Link to="/">Login</Link>
          </Button>
          <Button 
            asChild 
            variant="ghost" 
            className="text-sm relative overflow-hidden transition-all duration-300 hover:bg-fuchsia-50 hover:text-fuchsia-700 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-fuchsia-100 after:to-fuchsia-50 after:opacity-0 hover:after:opacity-100 after:transition-opacity"
          >
            <Link to="/">Sign Up</Link>
          </Button>
          <Button 
            asChild 
            variant="default" 
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
