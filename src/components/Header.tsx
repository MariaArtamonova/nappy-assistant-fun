
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-white/95 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ae9ce516-6441-4ea9-a423-cc9cf03ef0ca.png" 
              alt="NappyClub Logo" 
              className="h-8"
            />
          </div>
        </div>
        {!isHomePage && (
          <button 
            onClick={() => navigate('/')} 
            className="p-2 rounded-full hover:bg-nappy-pink-bg/50 transition-colors"
          >
            <ArrowLeft size={20} className="text-nappy-pink" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
