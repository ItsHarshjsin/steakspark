
import React, { useState } from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { ModeToggle } from '@/components/ModeToggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Bell } from 'lucide-react';

export const Settings = () => {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');

  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-end items-center h-14 px-4">
            <ModeToggle />
          </header>
          <main className="flex-1 p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>
            
            <Tabs defaultValue="profile">
              <TabsList className="mb-8">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User size={16} />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex items-center gap-2">
                  <Bell size={16} />
                  Notifications
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <User size={20} />
                    Profile Settings
                  </h2>
                  
                  <div className="space-y-6 max-w-2xl">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="bg-white dark:bg-gray-800"
                      />
                      <p className="text-sm text-muted-foreground">
                        This is your display name within the application.
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white dark:bg-gray-800"
                      />
                      <p className="text-sm text-muted-foreground">
                        Used for notifications and account recovery.
                      </p>
                    </div>
                    
                    <Button className="bg-violet-600 hover:bg-violet-700">
                      Save Changes
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications">
                <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-xl">
                  <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <Bell size={20} />
                    Notification Settings
                  </h2>
                  
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Notification settings coming soon...</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};
