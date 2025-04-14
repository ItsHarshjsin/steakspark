
import React from 'react';
import { 
  Activity,
  Book,
  BookOpen,
  Brain,
  Code,
  Coffee,
  Dumbbell,
  Droplet,
  Heart,
  LucideIcon,
  Music,
  PenLine,
  Salad,
  ScrollText,
  Smile,
  Flame, // Replacing Spa with Flame which is available
  Utensils
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface HabitIconProps {
  name: string;
  className?: string;
  size?: number;
}

type IconMap = {
  [key: string]: LucideIcon;
};

const iconMap: IconMap = {
  activity: Activity,
  book: Book,
  "book-open": BookOpen,
  brain: Brain,
  code: Code,
  coffee: Coffee,
  dumbbell: Dumbbell,
  droplet: Droplet,
  heart: Heart,
  music: Music,
  "pen-line": PenLine,
  salad: Salad,
  "scroll-text": ScrollText,
  smile: Smile,
  spa: Flame, // Map 'spa' to Flame icon
  utensils: Utensils,
};

export const HabitIcon = ({ name, className, size = 20 }: HabitIconProps) => {
  const IconComponent = iconMap[name] || Activity;
  
  return <IconComponent className={cn("", className)} size={size} />;
};

export const habitIcons = Object.keys(iconMap);
