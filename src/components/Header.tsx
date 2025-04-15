import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Sparkles className="h-5 w-5 text-violet-600" />
          <span className="font-semibold">StreakSpark</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
          <Link to="/features" className="text-foreground/60 transition-colors hover:text-foreground">
            Features
          </Link>
          <Link to="/testimonials" className="text-foreground/60 transition-colors hover:text-foreground">
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="bg-violet-600 hover:bg-violet-700">
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
