
import React from 'react';
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
    <div className="min-h-screen flex flex-col bg-[#FFF8F5] text-gray-800">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-screen">
          {/* Top Left - Title */}
          <div className="md:col-span-2 flex flex-col mb-4">
            <div className="mb-4">
              <h1 className="text-xl font-bold text-pink-500">Ассистент НэппиКлаб</h1>
              <p className="text-sm text-gray-600">Твой персональный помощник на базе искусственного интеллекта</p>
            </div>
            
            {/* Bottom Left - Slider */}
            <div className="flex-grow mt-2">
              <LogoSlider />
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col">
            {/* Top Right - Navigation Buttons */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Link to="/assistant" className="bg-purple-100 rounded-xl p-3 text-center hover:bg-purple-200 transition-colors">
                <HelpCircle size={20} className="mx-auto mb-1 text-purple-400" />
                <span className="text-sm">FAQ</span>
              </Link>
              <Link to="/subscription" className="bg-pink-100 rounded-xl p-3 text-center hover:bg-pink-200 transition-colors">
                <CreditCard size={20} className="mx-auto mb-1 text-pink-400" />
                <span className="text-sm">Подписка</span>
              </Link>
              <Link to="/support" className="col-span-2 bg-green-100 rounded-xl p-3 text-center hover:bg-green-200 transition-colors">
                <HeartHandshake size={20} className="mx-auto mb-1 text-green-500" />
                <span className="text-sm">Поддержка</span>
              </Link>
            </div>
            
            {/* Bottom Right - Community Links */}
            <div className="flex-grow space-y-3">
              <a 
                href="https://t.me/nappyclubforum" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-700">Сообщество НэппиМАМ</p>
                  </div>
                  <MessageCircle size={20} className="text-blue-400" />
                </div>
              </a>
              
              <a 
                href="https://t.me/nappymoms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-purple-700">Канал будущих мам</p>
                  </div>
                  <Users size={20} className="text-purple-400" />
                </div>
              </a>
              
              <a 
                href="https://t.me/nappyclub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-3 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-pink-700">Канал для мам с малышами</p>
                  </div>
                  <MessageSquare size={20} className="text-pink-400" />
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
