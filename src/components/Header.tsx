
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import nappyLogo from '/nappy-logo.svg';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-white/95 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img src={nappyLogo} alt="NappyClub" className="h-8" />
          </div>
          <h1 className="text-lg font-bold text-nappy-pink">
            Ассистент
          </h1>
        </div>
        <button className="p-2 rounded-full hover:bg-nappy-pink-bg/50 transition-colors">
          <ArrowLeft size={20} className="text-nappy-pink" />
        </button>
      </div>
    </header>
  );
};

export default Header;
