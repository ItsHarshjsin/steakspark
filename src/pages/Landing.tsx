import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Flame, Bird, Calendar, BarChart3, ArrowRight, BookOpen, 
  Coffee, Dumbbell, Droplet, CheckCircle, Target, Sparkles,
  Twitter, Instagram, Facebook, Linkedin, Mail, ChevronRight, MoveRight
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
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import AutoplayPlugin from 'embla-carousel-autoplay';

const HabitBuddySection = () => {
  const [activeStage, setActiveStage] = useState<'spark' | 'flame' | 'phoenix'>('spark');

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-violet-50/90 via-pink-50/90 to-fuchsia-50/90 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-1/4 w-32 h-32 bg-fuchsia-200/20 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-[40px] font-bold mb-5 tracking-tight leading-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text">
            Meet Your Habit Buddy
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed">
            Watch your virtual companion evolve as you build consistent habits, from a tiny spark to a
            majestic phoenix!
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Column - Buddy Display */}
              <div className="flex flex-col items-center justify-center p-12 relative">
                {/* Background Glow */}
                <div className={`absolute inset-0 blur-3xl opacity-20 transition-colors duration-500 ${
                  activeStage === 'spark' 
                    ? 'bg-amber-400'
                    : activeStage === 'flame'
                      ? 'bg-orange-400'
                      : 'bg-pink-400'
                }`} />

                {/* Main Circle */}
                <div className={`relative transition-all duration-500 rounded-full flex items-center justify-center ${
                  activeStage === 'spark'
                    ? 'w-32 h-32 bg-amber-400'
                    : activeStage === 'flame'
                      ? 'w-36 h-36 bg-orange-400'
                      : 'w-40 h-40 bg-pink-400'
                }`}>
                  <div className="animate-float">
                    {activeStage === 'spark' && <Zap className="h-16 w-16 text-white" />}
                    {activeStage === 'flame' && <Flame className="h-20 w-20 text-white" />}
                    {activeStage === 'phoenix' && <Bird className="h-24 w-24 text-white" />}
                  </div>
                </div>

                {/* Stage Label */}
                <div className="text-center mt-8">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                    activeStage === 'spark'
                      ? 'text-amber-500'
                      : activeStage === 'flame'
                        ? 'text-orange-500'
                        : 'text-pink-500'
                  }`}>
                    {activeStage === 'spark' ? 'Spark' : activeStage === 'flame' ? 'Flame' : 'Phoenix'}
                  </h3>
                  <p className="text-gray-600">
                    {activeStage === 'spark'
                      ? 'The beginning of your journey'
                      : activeStage === 'flame'
                        ? 'Building momentum'
                        : 'Mastering your habits'}
                  </p>
                </div>
              </div>

              {/* Right Column - Evolution Stages */}
              <div className="flex flex-col justify-center p-8 bg-white rounded-3xl">
                <h3 className="text-2xl font-semibold mb-8">Watch Your Buddy Evolve</h3>

                <div className="space-y-6">
                  {/* Spark Stage */}
                  <div
                    className={`group relative p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      activeStage === 'spark'
                        ? 'bg-amber-50'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveStage('spark')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-amber-100/50 flex items-center justify-center shrink-0">
                        <Zap className="h-6 w-6 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Spark</h4>
                        <p className="text-gray-600 text-[15px]">
                          Complete your first day to ignite your habit spark.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Flame Stage */}
                  <div
                    className={`group relative p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      activeStage === 'flame'
                        ? 'bg-orange-50'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveStage('flame')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-orange-100/50 flex items-center justify-center shrink-0">
                        <Flame className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Flame</h4>
                        <p className="text-gray-600 text-[15px]">
                          Build momentum and reach a full week streak.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phoenix Stage */}
                  <div
                    className={`group relative p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      activeStage === 'phoenix'
                        ? 'bg-pink-50'
                        : ''
                    }`}
                    onMouseEnter={() => setActiveStage('phoenix')}
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-pink-100/50 flex items-center justify-center shrink-0">
                        <Bird className="h-6 w-6 text-pink-500" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900">Phoenix</h4>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                            Ultimate Form
                          </span>
                        </div>
                        <p className="text-gray-600 text-[15px]">
                          Master your habit with a 30-day streak. You're unstoppable!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full">
                      Day 5
                    </span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400 rounded-full" style={{ width: '17%' }} />
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

const TestimonialCard = ({ icon, quote, name, title, streak, color }: { 
  icon: React.ReactNode, 
  quote: string, 
  name: string, 
  title: string, 
  streak: string,
  color: string
}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
      <div className="mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-50 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p className="text-gray-800 mb-6 text-lg leading-relaxed min-h-[80px]">{quote}</p>
      <div className="flex items-end justify-between">
        <div>
          <h4 className="font-semibold text-base">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm flex items-center gap-1.5 ${color}`}>
          <Flame size={14} className="animate-pulse-light" />
          <span>{streak}</span>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [AutoplayPlugin({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[40px] font-bold mb-5">People Love Their Streaks</h2>
          <p className="text-gray-600 text-lg">
            Join thousands of people transforming their habits with StreakSpark
          </p>
        </div>
        
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <TestimonialCard 
                  icon={<BookOpen className="h-6 w-6 text-emerald-500" />}
                  quote="StreakSpark helped me build a daily reading habit I've been trying to establish for years!"
                  name="Sarah J."
                  title="Product Designer"
                  streak="32-day streak"
                  color="bg-amber-100 text-amber-600"
                />
              </div>
              
              <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <TestimonialCard 
                  icon={<Coffee className="h-6 w-6 text-amber-500" />}
                  quote="The visual streaks are so motivating. I haven't missed my meditation in 45 days!"
                  name="Michael T."
                  title="Software Engineer"
                  streak="45-day streak"
                  color="bg-orange-100 text-orange-600"
                />
              </div>
              
              <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <TestimonialCard 
                  icon={<Droplet className="h-6 w-6 text-blue-500" />}
                  quote="I recommend StreakSpark to all my clients. It's the easiest way to build lasting habits."
                  name="Elena R."
                  title="Health Coach"
                  streak="62-day streak"
                  color="bg-blue-100 text-blue-600"
                />
              </div>
              
              <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                <TestimonialCard 
                  icon={<Flame className="h-6 w-6 text-orange-500" />}
                  quote="The habit buddy feature keeps me coming back. I love watching it evolve!"
                  name="David L."
                  title="Marketing Manager"
                  streak="28-day streak"
                  color="bg-pink-100 text-pink-600"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button 
              onClick={scrollPrev} 
              className="mx-2 p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <button 
              onClick={scrollNext} 
              className="mx-2 p-2 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white via-white to-violet-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[40px] font-bold mb-5 tracking-tight leading-tight">Track Habits, Build Consistency</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto whitespace-pre-wrap leading-relaxed">
            StreakSpark helps you build lasting habits through streak tracking, visual progress, and a delightful habit
            buddy that evolves as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl py-8 px-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:shadow-lg transition-all duration-300">
            <div className="bg-violet-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Flame className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Build Streaks</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Track your habits daily and watch your streaks grow. Stay motivated with visual progress.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl py-8 px-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:shadow-lg transition-all duration-300">
            <div className="bg-pink-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Daily Check-ins</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Simple daily check-ins keep you accountable and help you build consistency over time.
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl py-8 px-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group hover:shadow-lg transition-all duration-300">
            <div className="bg-blue-50 h-14 w-14 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Insightful Stats</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Track your progress with beautiful statistics and see how your habits improve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-[896px] mx-auto text-center">
          <div className="flex flex-col h-[120px] justify-center">
            <h1 className="text-[48px] md:text-[52px] font-bold leading-tight">
              Build <span className="bg-gradient-to-r from-[#E954E3] to-[#B354E9] text-transparent bg-clip-text">Better Habits</span> with
            </h1>
            <h1 className="text-[48px] md:text-[52px] font-bold leading-tight mt-1">
              StreakSpark
          </h1>
          </div>
          <p className="text-lg text-gray-600 mt-8 mb-10 animate-slide-in">
            Track your habits, build streaks, and watch your virtual habit buddy evolve as you grow. Simple, visual,
            and motivating.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-16 animate-scale-in">
            <Button size="lg" asChild className="animate-pulse-light">
              <Link to="/dashboard">Start Tracking</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
          
          <div className="dashboard-preview w-full max-w-[1000px] mx-auto rounded-xl shadow-md border border-gray-100 overflow-hidden animate-scale-in">
            <div className="bg-violet-600 text-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                <span className="font-medium">StreakSpark Dashboard</span>
              </div>
            </div>
            <div className="bg-white p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                    <div className="h-10 w-10 bg-violet-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Today's Completion</p>
                      <p className="font-bold">3/4 Habits</p>
                    </div>
                  </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                    <div className="h-10 w-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Flame className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Longest Streak</p>
                      <p className="font-bold">14 Days</p>
                    </div>
                  </div>
                <div className="bg-gray-50 px-4 py-3 rounded-lg flex items-center gap-3 animate-slide-in" style={{ animationDelay: '0.3s' }}>
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
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-habit-violet animate-slide-in" style={{ animationDelay: '0.4s' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-violet-100 rounded-full flex items-center justify-center">
                        <BookOpen className="h-3 w-3 text-violet-600" />
                      </div>
                      <h3 className="font-medium text-sm">Read</h3>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">Done</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2">
                    <div className="h-1.5 bg-habit-violet rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-habit-teal animate-slide-in" style={{ animationDelay: '0.5s' }}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <Droplet className="h-3 w-3 text-blue-600" />
                      </div>
                      <h3 className="font-medium text-sm">Drink Water</h3>
                    </div>
                    <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">Done</span>
                    </div>
                  <div className="h-1.5 w-full bg-gray-100 rounded-full mt-2">
                    <div className="h-1.5 bg-habit-teal rounded-full w-full"></div>
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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 relative">
            <div className="absolute top-0 right-0 h-20 w-20 bg-pink-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 h-12 w-12 bg-violet-100 rounded-full -ml-6 -mb-6 opacity-50"></div>
            
            <h2 className="text-2xl font-bold text-center mb-3 relative z-10">Ready to light up your habits?</h2>
            <p className="text-center text-gray-600 mb-6 relative z-10 text-sm">
              Start tracking your habits today and watch your consistency transform your life. Join our community of habit builders!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="z-10" />
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white z-10 group">
                <span>Start Streaking</span>
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
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
    <footer className="py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-pink-500" />
              <span className="font-semibold text-lg">StreakSpark</span>
            </div>
            
            <p className="text-gray-600 text-sm">
              Build lasting habits and achieve your goals with our science-backed habit tracking and streak building system.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
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
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
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
          
            <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Privacy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Terms</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Cookie Policy</a>
                </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">Licenses</a>
              </li>
              </ul>
          </div>
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
