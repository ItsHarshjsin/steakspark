
import React, { useState } from 'react';
import { useHabits } from '@/contexts/HabitContext';
import { HabitFrequency } from '@/types/habit';
import { habitIcons, HabitIcon } from './HabitIcon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

export const AddHabitDialog = () => {
  const { addHabit } = useHabits();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState<HabitFrequency>('daily');
  const [color, setColor] = useState('habit-violet');
  const [icon, setIcon] = useState('spa');
  const [target, setTarget] = useState(7);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) return;
    
    addHabit({
      name,
      description,
      frequency,
      color,
      icon,
      target,
    });
    
    // Reset form
    setName('');
    setDescription('');
    setFrequency('daily');
    setColor('habit-violet');
    setIcon('spa');
    setTarget(7);
    
    // Close dialog
    setOpen(false);
  };

  const colorOptions = [
    { name: 'Violet', value: 'habit-violet' },
    { name: 'Teal', value: 'habit-teal' },
    { name: 'Orange', value: 'habit-orange' },
    { name: 'Pink', value: 'habit-pink' },
    { name: 'Green', value: 'habit-green' },
    { name: 'Blue', value: 'habit-blue' },
    { name: 'Red', value: 'habit-red' },
    { name: 'Yellow', value: 'habit-yellow' },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus size={18} />
          Add Habit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Habit</DialogTitle>
            <DialogDescription>
              Create a new habit to track your progress.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="e.g., Meditate"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description (optional)</Label>
              <Textarea
                id="description"
                placeholder="e.g., Meditate for 10 minutes each day"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select
                  value={frequency}
                  onValueChange={(value) => setFrequency(value as HabitFrequency)}
                >
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="target">Target (days)</Label>
                <Input
                  id="target"
                  type="number"
                  min="1"
                  value={target}
                  onChange={(e) => setTarget(parseInt(e.target.value) || 1)}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Appearance</Label>
              <Tabs defaultValue="color" className="w-full">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="color">Color</TabsTrigger>
                  <TabsTrigger value="icon">Icon</TabsTrigger>
                </TabsList>
                <TabsContent value="color" className="pt-2">
                  <div className="grid grid-cols-4 gap-2">
                    {colorOptions.map((colorOption) => (
                      <Button
                        key={colorOption.value}
                        type="button"
                        variant="outline"
                        className={cn(
                          "w-full h-10 rounded-md border-2",
                          color === colorOption.value ? "border-primary" : "border-transparent"
                        )}
                        onClick={() => setColor(colorOption.value)}
                      >
                        <div className={`w-full h-full rounded bg-${colorOption.value}`} />
                      </Button>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="icon" className="pt-2">
                  <div className="grid grid-cols-6 gap-2">
                    {habitIcons.map((iconName) => (
                      <Button
                        key={iconName}
                        type="button"
                        variant="outline"
                        size="icon"
                        className={cn(
                          "p-0",
                          icon === iconName ? `border-2 border-${color}` : ""
                        )}
                        onClick={() => setIcon(iconName)}
                      >
                        <HabitIcon name={iconName} className={`text-${color}`} />
                      </Button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Habit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
