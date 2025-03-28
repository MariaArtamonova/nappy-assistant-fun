
import React, { useState } from 'react';
import { Brain, Sparkles, Users, CreditCard, HeartHandshake } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState<string>('assistant');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[57px] z-40 overflow-x-auto py-2 bg-white/95 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container">
        <div className="flex space-x-2 md:space-x-3">
          <button 
            onClick={() => scrollToSection('assistant')}
            className={cn(
              "flex flex-col items-center min-w-[70px] p-2 rounded-lg transition-colors",
              activeSection === 'assistant' ? "bg-nappy-pink-bg" : "hover:bg-nappy-pink-bg/70"
            )}
          >
            <Brain size={isMobile ? 18 : 20} className="text-nappy-pink mb-1" />
            <span className="text-xs">Ассистент</span>
          </button>
          <button 
            onClick={() => scrollToSection('entertainment')}
            className={cn(
              "flex flex-col items-center min-w-[70px] p-2 rounded-lg transition-colors",
              activeSection === 'entertainment' ? "bg-nappy-teal-bg" : "hover:bg-nappy-teal-bg/70"
            )}
          >
            <Sparkles size={isMobile ? 18 : 20} className="text-nappy-teal mb-1" />
            <span className="text-xs">Развлечения</span>
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className={cn(
              "flex flex-col items-center min-w-[70px] p-2 rounded-lg transition-colors",
              activeSection === 'community' ? "bg-nappy-blue-bg" : "hover:bg-nappy-blue-bg/70"
            )}
          >
            <Users size={isMobile ? 18 : 20} className="text-nappy-blue mb-1" />
            <span className="text-xs">Каналы</span>
          </button>
          <button 
            onClick={() => scrollToSection('subscription')}
            className={cn(
              "flex flex-col items-center min-w-[70px] p-2 rounded-lg transition-colors",
              activeSection === 'subscription' ? "bg-nappy-yellow-light/30" : "hover:bg-nappy-yellow-light/20"
            )}
          >
            <CreditCard size={isMobile ? 18 : 20} className="text-nappy-yellow mb-1" />
            <span className="text-xs">Подписка</span>
          </button>
          <button 
            onClick={() => scrollToSection('support')}
            className={cn(
              "flex flex-col items-center min-w-[70px] p-2 rounded-lg transition-colors",
              activeSection === 'support' ? "bg-nappy-green/10" : "hover:bg-nappy-green/5"
            )}
          >
            <HeartHandshake size={isMobile ? 18 : 20} className="text-nappy-green mb-1" />
            <span className="text-xs">Поддержка</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
