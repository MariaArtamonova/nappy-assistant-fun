
import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4 bg-nappy-pink-bg/80 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-nappy-pink flex items-center justify-center animate-float">
            <span className="text-white font-bold">N</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-nappy-pink to-nappy-teal bg-clip-text text-transparent">
            NappyClub
          </h1>
        </div>
        <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors">
          <Bell size={20} className="text-nappy-pink" />
        </button>
      </div>
    </header>
  );
};

export default Header;
