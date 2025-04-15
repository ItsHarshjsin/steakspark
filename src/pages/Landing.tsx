
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Flame, Bird, Calendar, BarChart3, ArrowRight, BookOpen, 
  Coffee, Dumbbell, Droplet, CheckCircle, Target, Sparkles,
  Twitter, Instagram, Facebook, Linkedin, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/Header';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const HabitBuddySection = () => {
  const [activeStage, setActiveStage] = useState<'spark' | 'flame' | 'phoenix'>('phoenix');

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full -ml-24 -mb-24 opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-6 animate-fade-in streak-gradient">Meet Your Habit Buddy</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Your virtual companion evolves as you build consistent habits. Watch it transform from a tiny spark to a majestic phoenix!
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className={`transition-all duration-500 ${
                activeStage === 'spark' 
                  ? 'bg-amber-100 w-48 h-48' 
                  : activeStage === 'flame' 
                    ? 'bg-orange-100 w-56 h-56' 
                    : 'bg-pink-100 w-64 h-64'
              } rounded-full absolute -z-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2`}></div>
              
              <div className="relative z-10 h-48 w-auto flex flex-col items-center">
                <div className={`transition-all duration-500 ${
                  activeStage === 'spark' 
                    ? 'w-24 h-24 bg-gradient-to-b from-yellow-300 to-amber-500' 
                    : activeStage === 'flame' 
                      ? 'w-32 h-32 bg-gradient-to-b from-amber-400 to-orange-500' 
                      : 'w-36 h-36 bg-gradient-to-b from-orange-300 to-pink-500'
                } rounded-full flex items-center justify-center animate-bounce-slow`}>
                  {activeStage === 'spark' && (
                    <Zap className="h-12 w-12 text-white animate-pulse-light" />
                  )}
                  {activeStage === 'flame' && (
                    <Flame className="h-14 w-14 text-white animate-pulse-light" />
                  )}
                  {activeStage === 'phoenix' && (
                    <Bird className="h-16 w-16 text-white animate-pulse-light" />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-center mt-4 capitalize">{activeStage}</h3>
              </div>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="bg-white rounded-xl shadow-lg p-8 animate-scale-in border border-purple-100">
              <h3 className="text-2xl font-bold mb-6">Watch Your Buddy Evolve</h3>
              
              <div className="space-y-6">
                <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div 
                      className={`flex gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                        activeStage === 'spark' ? 'bg-amber-50' : 'hover:bg-amber-50/50'
                      }`}
                      onMouseEnter={() => setActiveStage('spark')}
                    >
                      <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 shadow-sm">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Spark</h4>
                        <p className="text-gray-600">Just getting started! Complete your first day to ignite your habit spark.</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-amber-50 border-amber-200">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Day 1-7</h4>
                        <p className="text-sm">
                          The beginning of your journey! Your tiny spark represents the small but mighty beginning of your habit formation.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div 
                      className={`flex gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                        activeStage === 'flame' ? 'bg-orange-50' : 'hover:bg-orange-50/50'
                      }`}
                      onMouseEnter={() => setActiveStage('flame')}
                    >
                      <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shadow-sm">
                        <Flame size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Flame</h4>
                        <p className="text-gray-600">You're building momentum! Keep going to reach a full week streak.</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-orange-50 border-orange-200">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Day 8-29</h4>
                        <p className="text-sm">
                          Your habit is catching fire! This is where consistency starts to form and your habits become more automatic.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                
                <HoverCard openDelay={200} closeDelay={100}>
                  <HoverCardTrigger asChild>
                    <div 
                      className={`flex gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                        activeStage === 'phoenix' ? 'bg-pink-50' : 'hover:bg-pink-50/50'
                      }`}
                      onMouseEnter={() => setActiveStage('phoenix')}
                    >
                      <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-sm">
                        <Bird size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">Phoenix</h4>
                          <span className="px-2 py-1 bg-orange-100 text-orange-500 text-xs rounded-full">Current</span>
                        </div>
                        <p className="text-gray-600">Amazing! You've mastered this habit with a 30-day streak. You're unstoppable!</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-pink-50 border-pink-200">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Day 30+</h4>
                        <p className="text-sm">
                          Congratulations! Your habit has transformed into a majestic phoenix. You've built a lasting routine that's now part of your life.
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              
              <div className="mt-8">
                <p className="text-sm font-medium mb-2 flex justify-between">
                  <span>Progress</span>
                  <span>Day 30</span>
                </p>
                <div className="h-3 w-full bg-gradient-to-r from-amber-200 via-orange-300 to-pink-400 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-white opacity-70 animate-progress-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ icon, quote, name, title, streak, color }: { 
  icon: React.ReactNode, 
  quote: string, 
  name: string, 
  title: string, 
  streak: string,
  color: string
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4">
        {icon}
      </div>
      <p className="text-gray-800 mb-6">"{quote}"</p>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 ${color}`}>
          <Flame size={14} className="animate-pulse-light" />
          <span>{streak}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">People Love Their Streaks</h2>
        <p className="text-center text-gray-600 mb-16">Join thousands of people transforming their habits with StreakSpark</p>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard 
                icon={<BookOpen className="h-8 w-8 text-green-500" />}
                quote="StreakSpark helped me build a daily reading habit I've been trying to establish for years!"
                name="Sarah J."
                title="Product Designer"
                streak="32-day streak"
                color="bg-amber-100 text-amber-600"
              />
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard 
                icon={<Coffee className="h-8 w-8 text-amber-500" />}
                quote="The visual streaks are so motivating. I haven't missed my meditation in 45 days!"
                name="Michael T."
                title="Software Engineer"
                streak="45-day streak"
                color="bg-orange-100 text-orange-600"
              />
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard 
                icon={<Droplet className="h-8 w-8 text-blue-500" />}
                quote="I recommend StreakSpark to all my clients. It's the easiest way to build lasting habits."
                name="Elena R."
                title="Health Coach"
                streak="62-day streak"
                color="bg-blue-100 text-blue-600"
              />
            </CarouselItem>
            
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard 
                icon={<Flame className="h-8 w-8 text-orange-500" />}
                quote="The habit buddy feature keeps me coming back. I love watching it evolve!"
                name="David L."
                title="Marketing Manager"
                streak="28-day streak"
                color="bg-pink-100 text-pink-600"
              />
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Track Habits, Build Consistency</h2>
          <p className="text-gray-600">StreakSpark helps you build lasting habits through streak tracking, visual progress, and a delightful habit buddy that evolves as you grow.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="h-6 w-6 text-violet-600 animate-pulse-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Streaks</h3>
            <p className="text-gray-600">Track your habits daily and watch your streaks grow. Stay motivated with visual progress.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-pink-600 animate-pulse-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Check-ins</h3>
            <p className="text-gray-600">Simple daily check-ins keep you accountable and help you build consistency over time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600 animate-pulse-light" />
            </div>
            <h3 className="text-xl font-bold mb-2">Insightful Stats</h3>
            <p className="text-gray-600">Track your progress with beautiful statistics and see how your habits improve over time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Build <span className="streak-gradient">Better Habits</span> with StreakSpark
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-slide-in">
            Track your habits, build streaks, and watch your virtual habit buddy evolve as you grow. Simple, visual, and motivating.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-scale-in">
            <Button size="lg" asChild className="animate-pulse-light">
              <Link to="/dashboard">Start Tracking</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
          
          <div className="mt-16 relative">
            <div className="dashboard-preview rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-scale-in">
              <div className="bg-violet-600 text-white p-4">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <span className="font-semibold">StreakSpark Dashboard</span>
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                    <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Today's Completion</p>
                      <p className="font-bold">3/4 Habits</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Flame className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Longest Streak</p>
                      <p className="font-bold">14 Days</p>
                    </div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                    <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Completion Rate</p>
                      <p className="font-bold">87%</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-habit-violet animate-slide-in" style={{ animationDelay: '0.4s' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-violet-100 rounded-full flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-violet-600" />
                        </div>
                        <h3 className="font-semibold">Read</h3>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Done</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                      <div className="h-2 bg-habit-violet rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-habit-teal animate-slide-in" style={{ animationDelay: '0.5s' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Droplet className="h-4 w-4 text-blue-600" />
                        </div>
                        <h3 className="font-semibold">Drink Water</h3>
                      </div>
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">Done</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full mt-2">
                      <div className="h-2 bg-habit-teal rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-scale-in">
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 h-24 w-24 bg-pink-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-violet-100 rounded-full -ml-8 -mb-8 opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-center mb-4 relative z-10">Ready to light up your habits?</h2>
            <p className="text-center text-gray-600 mb-8 relative z-10">
              Start tracking your habits today and watch your consistency transform your life. Join our community of habit builders!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="z-10" />
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white z-10 group">
                <span>Start Streaking</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-500" />
              <span className="font-semibold text-xl">StreakSpark</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              Build lasting habits and achieve your goals with our science-backed habit tracking and streak building system.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Cookie Policy</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white text-sm" 
                />
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2025 StreakSpark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HabitBuddySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
