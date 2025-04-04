
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen">
          {/* Left side - Slider */}
          <div className="md:col-span-2 flex flex-col mb-4">
            <div className="flex-grow mt-2">
              <LogoSlider />
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col">
            {/* Top Right - Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
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
            
            {/* Bottom Right - Community Links */}
            <div className="flex-grow space-y-3">
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
        </div>
      </div>
    </div>
  );
};

export default Index;
