
import React from 'react';
import { Brain, Sparkles, Users, CreditCard, HeartHandshake } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[72px] z-40 overflow-x-auto py-2 bg-white/80 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container">
        <div className="flex space-x-4">
          <button 
            onClick={() => scrollToSection('assistant')}
            className="flex flex-col items-center min-w-[70px] p-2 rounded-lg hover:bg-nappy-pink-bg transition-colors"
          >
            <Brain size={20} className="text-nappy-pink mb-1" />
            <span className="text-xs">Ассистент</span>
          </button>
          <button 
            onClick={() => scrollToSection('entertainment')}
            className="flex flex-col items-center min-w-[70px] p-2 rounded-lg hover:bg-nappy-teal-bg transition-colors"
          >
            <Sparkles size={20} className="text-nappy-teal mb-1" />
            <span className="text-xs">Развлечения</span>
          </button>
          <button 
            onClick={() => scrollToSection('community')}
            className="flex flex-col items-center min-w-[70px] p-2 rounded-lg hover:bg-nappy-blue-bg transition-colors"
          >
            <Users size={20} className="text-nappy-blue mb-1" />
            <span className="text-xs">Сообщество</span>
          </button>
          <button 
            onClick={() => scrollToSection('subscription')}
            className="flex flex-col items-center min-w-[70px] p-2 rounded-lg hover:bg-nappy-yellow-light/30 transition-colors"
          >
            <CreditCard size={20} className="text-nappy-yellow mb-1" />
            <span className="text-xs">Подписка</span>
          </button>
          <button 
            onClick={() => scrollToSection('support')}
            className="flex flex-col items-center min-w-[70px] p-2 rounded-lg hover:bg-nappy-green/10 transition-colors"
          >
            <HeartHandshake size={20} className="text-nappy-green mb-1" />
            <span className="text-xs">Поддержка</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
