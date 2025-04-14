
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Flame, Bird, Calendar, BarChart3, ArrowRight, BookOpen, Coffee, Dumbbell, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/Header';

const HabitBuddySection = () => {
  return (
    <section className="py-20 bg-violet-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Meet Your Habit Buddy</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="bg-pink-100 w-64 h-64 rounded-full absolute -z-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
              <img 
                src="/lovable-uploads/aae5ebec-5a40-44f4-95ed-e1fab239d1bc.png" 
                alt="Phoenix Habit Buddy" 
                className="relative z-10 h-48 w-auto"
              />
              <h3 className="text-2xl font-bold text-center mt-4">Phoenix</h3>
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Watch Your Buddy Evolve</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Spark</h4>
                    <p className="text-gray-600">Just getting started! Complete your first day to ignite your habit spark.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                    <Flame size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Flame</h4>
                    <p className="text-gray-600">You're building momentum! Keep going to reach a full week streak.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
                    <Bird size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">Phoenix</h4>
                      <span className="px-2 py-1 bg-orange-100 text-orange-500 text-xs rounded-full">Current</span>
                    </div>
                    <p className="text-gray-600">Amazing! You've mastered this habit with a 30-day streak. You're unstoppable!</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm font-medium mb-2 flex justify-between">
                  <span>Progress</span>
                  <span>Day 30</span>
                </p>
                <div className="h-2 w-full bg-gradient-to-r from-amber-200 via-orange-300 to-pink-400 rounded-full"></div>
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
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
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
          <Flame size={14} />
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard 
            icon={<BookOpen className="h-8 w-8 text-green-500" />}
            quote="StreakSpark helped me build a daily reading habit I've been trying to establish for years!"
            name="Sarah J."
            title="Product Designer"
            streak="32-day streak"
            color="bg-amber-100 text-amber-600"
          />
          
          <TestimonialCard 
            icon={<Coffee className="h-8 w-8 text-amber-500" />}
            quote="The visual streaks are so motivating. I haven't missed my meditation in 45 days!"
            name="Michael T."
            title="Software Engineer"
            streak="45-day streak"
            color="bg-orange-100 text-orange-600"
          />
          
          <TestimonialCard 
            icon={<Droplet className="h-8 w-8 text-blue-500" />}
            quote="I recommend StreakSpark to all my clients. It's the easiest way to build lasting habits."
            name="Elena R."
            title="Health Coach"
            streak="62-day streak"
            color="bg-blue-100 text-blue-600"
          />
          
          <TestimonialCard 
            icon={<Flame className="h-8 w-8 text-orange-500" />}
            quote="The habit buddy feature keeps me coming back. I love watching it evolve!"
            name="David L."
            title="Marketing Manager"
            streak="28-day streak"
            color="bg-pink-100 text-pink-600"
          />
        </div>
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
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="h-12 w-12 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="h-6 w-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Build Streaks</h3>
            <p className="text-gray-600">Track your habits daily and watch your streaks grow. Stay motivated with visual progress.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Daily Check-ins</h3>
            <p className="text-gray-600">Simple daily check-ins keep you accountable and help you build consistency over time.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600" />
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build <span className="streak-gradient">Better Habits</span> with StreakSpark
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track your habits, build streaks, and watch your virtual habit buddy evolve as you grow. Simple, visual, and motivating.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/dashboard">Start Tracking</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/dashboard">View Demo</Link>
            </Button>
          </div>
          
          <div className="mt-16">
            <img 
              src="/lovable-uploads/9d1928a9-d4aa-4fa4-a1fb-b17c01e3378c.png" 
              alt="StreakSpark Dashboard" 
              className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
            />
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
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 h-24 w-24 bg-pink-100 rounded-full -mr-12 -mt-12 opacity-50"></div>
            <div className="absolute bottom-0 left-0 h-16 w-16 bg-violet-100 rounded-full -ml-8 -mb-8 opacity-50"></div>
            
            <h2 className="text-3xl font-bold text-center mb-4 relative z-10">Ready to light up your habits?</h2>
            <p className="text-center text-gray-600 mb-8 relative z-10">
              Start tracking your habits today and watch your consistency transform your life. Join our community of habit builders!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="z-10" />
              <Button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white z-10">
                <span>Start Streaking</span>
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <footer className="py-8 bg-violet-50 border-t border-violet-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-semibold">StreakSpark</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 StreakSpark. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
