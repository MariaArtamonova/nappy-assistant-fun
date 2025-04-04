
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Brain, 
  SparkleIcon, 
  MessageCircle, 
  Baby, 
  Image, 
  HelpCircle, 
  CreditCard,
  HeartHandshake,
  Users,
  MessagesSquare,
  MessageSquare
} from 'lucide-react';
import LogoSlider from '@/components/LogoSlider';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <div className="container mx-auto p-4">
        {/* Title Section */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-white">Ассистент НэппиКлаб</h1>
          <p className="text-sm text-gray-300">Твой персональный помощник на базе искусственного интеллекта</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Right Side */}
          <div className="md:col-span-2 flex flex-col space-y-4">
            {/* Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Link to="/assistant" className="bg-zinc-800 rounded-xl p-3 text-center hover:bg-zinc-700 transition-colors">
                <HelpCircle size={20} className="mx-auto mb-1 text-purple-400" />
                <span className="text-sm">FAQ</span>
              </Link>
              <Link to="/subscription" className="bg-zinc-800 rounded-xl p-3 text-center hover:bg-zinc-700 transition-colors">
                <CreditCard size={20} className="mx-auto mb-1 text-purple-400" />
                <span className="text-sm">Подписка</span>
              </Link>
              <Link to="/support" className="col-span-2 bg-zinc-800 rounded-xl p-3 text-center hover:bg-zinc-700 transition-colors">
                <HeartHandshake size={20} className="mx-auto mb-1 text-purple-400" />
                <span className="text-sm">Поддержка</span>
              </Link>
            </div>
            
            {/* Community Links */}
            <div className="space-y-3">
              <a 
                href="https://t.me/NappyClub_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">ПОМОЩЬ</p>
                    <p className="text-sm font-medium">ПОДДЕРЖКА</p>
                    <p className="text-sm font-medium">ОБЩЕНИЕ</p>
                  </div>
                  <MessageCircle size={20} className="text-blue-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                </div>
              </a>
              
              <a 
                href="https://t.me/nappyclubforum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">ГАЙДЫ</p>
                    <p className="text-sm font-medium">ИНСАЙДЫ</p>
                    <p className="text-sm font-medium">НОВОСТИ</p>
                  </div>
                  <Users size={20} className="text-gray-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                </div>
              </a>
              
              <a 
                href="https://t.me/nappymoms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">ТРЕНДЫ</p>
                    <p className="text-sm font-medium">ЛАЙФХАКИ</p>
                    <p className="text-sm font-medium">НОВИНКИ</p>
                  </div>
                  <MessageSquare size={20} className="text-pink-400 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                </div>
              </a>
            </div>
          </div>
          
          {/* Left side - Vertical Slider */}
          <div className="md:order-first mt-4 md:mt-0">
            <LogoSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
