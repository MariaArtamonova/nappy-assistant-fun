
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Brain, Sparkles, Users, CreditCard, HeartHandshake } from 'lucide-react';

const MenuCard = ({ to, icon, title, color, bgColor }) => {
  return (
    <Link to={to} className={cn(
      "flex flex-col items-center justify-center p-4 rounded-xl transition-all",
      "hover:shadow-md border border-gray-100",
      bgColor
    )}>
      <div className={cn("p-3 rounded-full mb-2", color)}>
        {icon}
      </div>
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="container">
          <div className="py-4 text-center mb-6">
            <h1 className="text-2xl font-bold text-nappy-pink mb-2">NappyClub Ассистент</h1>
            <p className="text-sm text-gray-600">Ваш помощник для материнства и ухода за малышом</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <MenuCard 
              to="/assistant" 
              icon={<Brain size={24} className="text-nappy-pink" />} 
              title="Ассистент" 
              color="bg-nappy-pink-bg" 
              bgColor="bg-white"
            />
            <MenuCard 
              to="/entertainment" 
              icon={<Sparkles size={24} className="text-nappy-teal" />} 
              title="Развлечения" 
              color="bg-nappy-teal-bg" 
              bgColor="bg-white"
            />
            <MenuCard 
              to="/community" 
              icon={<Users size={24} className="text-nappy-blue" />} 
              title="Каналы" 
              color="bg-nappy-blue-bg" 
              bgColor="bg-white"
            />
            <MenuCard 
              to="/subscription" 
              icon={<CreditCard size={24} className="text-nappy-yellow" />} 
              title="Подписка" 
              color="bg-nappy-yellow-light/30" 
              bgColor="bg-white"
            />
            <div className="col-span-2">
              <MenuCard 
                to="/support" 
                icon={<HeartHandshake size={24} className="text-nappy-green" />} 
                title="Поддержка" 
                color="bg-nappy-green/10" 
                bgColor="bg-white"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
