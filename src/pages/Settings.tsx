import React, { useState } from 'react';
import { HabitProvider } from '@/contexts/HabitContext';
import { AppSidebar } from '@/components/AppSidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Camera, Bell, User, Shield, Palette, LogOut, Upload, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';

export const Settings = () => {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane.doe@example.com');
  const [bio, setBio] = useState('Passionate about building better habits and personal growth 🌱');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    weekly: false
  });

  return (
    <HabitProvider>
      <div className="min-h-screen bg-background flex">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-auto">
          <header className="border-b bg-background/90 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center h-14 px-6">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">Settings</h1>
            </div>
          </header>
          <main className="flex-1 p-6 space-y-6">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">Settings</h1>
                <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
              </motion.div>
            
              <Tabs defaultValue="profile" className="space-y-8">
                <TabsList className="bg-violet-50 dark:bg-violet-950/20 p-1 rounded-lg">
                  <TabsTrigger value="profile" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Profile
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Notifications
                  </TabsTrigger>
                  <TabsTrigger value="privacy" className="data-[state=active]:bg-white data-[state=active]:text-violet-600">
                    Privacy
                  </TabsTrigger>
                </TabsList>
              
                <TabsContent value="profile">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-6 lg:grid-cols-[280px_1fr]"
                  >
                    {/* Profile Card */}
                    <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:bg-violet-950/10 rounded-xl border border-border p-6 h-fit space-y-6 relative overflow-hidden">
                      {/* Decorative Elements */}
                      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-fuchsia-500/10" />
                      <div className="absolute top-4 right-4">
                        <Sparkles className="h-5 w-5 text-violet-400 animate-pulse" />
                      </div>
                      
                      <div className="relative">
                        <div className="relative mx-auto w-32 group">
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                          <Avatar className="w-32 h-32 border-4 border-white shadow-xl relative rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100">
                            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" className="object-cover" />
                            <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-violet-100 to-fuchsia-100">
                              JD
                            </AvatarFallback>
                          </Avatar>
                          <Button 
                            size="icon" 
                            className="absolute -bottom-2 -right-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg hover:scale-110 transition-transform duration-200"
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="relative text-center space-y-2 mt-6">
                          <h3 className="font-semibold text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                            {name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{email}</p>
                        </div>

                        <div className="relative mt-6 p-4 bg-white/50 rounded-lg border border-violet-100 space-y-3">
                          <div className="flex items-center gap-2 text-sm text-violet-600">
                            <User className="h-4 w-4" />
                            <span>Member since March 2024</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Streak Level: Phoenix 🔥
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Profile Form */}
                    <div className="space-y-6">
                      <div className="bg-white dark:bg-violet-950/10 rounded-xl border border-border p-6 space-y-6">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input 
                              id="name" 
                              value={name} 
                              onChange={(e) => setName(e.target.value)}
                              className="max-w-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input 
                              id="email" 
                              type="email" 
                              value={email} 
                              onChange={(e) => setEmail(e.target.value)}
                              className="max-w-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <textarea 
                              id="bio"
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                              placeholder="Tell us about yourself..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-violet-950/10 rounded-xl border border-border p-6 space-y-6">
                        <h3 className="text-lg font-semibold">Preferences</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Dark Mode</Label>
                              <p className="text-sm text-muted-foreground">Enable dark mode theme</p>
                            </div>
                            <Switch />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <Label>Sound Effects</Label>
                              <p className="text-sm text-muted-foreground">Play sounds on actions</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end gap-4">
                        <Button variant="outline">Cancel</Button>
                        <Button className="bg-violet-600 hover:bg-violet-700">Save Changes</Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              
                <TabsContent value="notifications">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-violet-950/10 rounded-xl border border-border p-6 space-y-6"
                  >
                    <h3 className="text-lg font-semibold">Notification Preferences</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">Receive updates about your habit progress</p>
                        </div>
                        <Switch 
                          checked={notifications.email}
                          onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">Get reminders on your device</p>
                        </div>
                        <Switch 
                          checked={notifications.push}
                          onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Weekly Summary</Label>
                          <p className="text-sm text-muted-foreground">Get a weekly report of your progress</p>
                        </div>
                        <Switch 
                          checked={notifications.weekly}
                          onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, weekly: checked }))}
                        />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="privacy">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="bg-white dark:bg-violet-950/10 rounded-xl border border-border p-6 space-y-6">
                      <h3 className="text-lg font-semibold">Privacy Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Profile Visibility</Label>
                            <p className="text-sm text-muted-foreground">Control who can see your profile</p>
                          </div>
                          <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Share Progress</Label>
                            <p className="text-sm text-muted-foreground">Allow others to see your habit progress</p>
                          </div>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-violet-950/10 rounded-xl border border-border p-6 space-y-6">
                      <h3 className="text-lg font-semibold">Data & Security</h3>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Shield className="h-4 w-4" />
                          Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <Upload className="h-4 w-4" />
                          Export Data
                        </Button>
                        <Button variant="destructive" className="w-full justify-start gap-2">
                          <LogOut className="h-4 w-4" />
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </div>
      </div>
    </HabitProvider>
  );
};
