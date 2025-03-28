
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-3 bg-white/95 backdrop-blur-sm border-b border-nappy-pink-light/20">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.5941 14.8457H15.8144C15.1458 14.8457 14.6068 15.3838 14.6068 16.0524V38.6124C14.6068 41.9599 14.6068 45.2678 14.6068 45.2678C14.6068 45.9364 14.0678 46.4754 13.3992 46.4754C12.7306 46.4754 12.1916 45.9364 12.1916 45.2678C12.1916 45.2678 12.1916 41.9599 12.1916 38.6124V16.0524C12.1916 15.3838 11.6526 14.8457 10.984 14.8457H3.16946C2.50086 14.8457 1.96184 15.3838 1.96184 16.0524V69.4886C1.96184 70.1572 2.50086 70.6962 3.16946 70.6962H10.984C11.6526 70.6962 12.1916 70.1572 12.1916 69.4886V59.7933C12.1916 59.1247 12.7306 58.5857 13.3992 58.5857C14.0678 58.5857 14.6068 59.1247 14.6068 59.7933V69.4886C14.6068 70.1572 15.1458 70.6962 15.8144 70.6962H23.5941C24.2627 70.6962 24.8017 70.1572 24.8017 69.4886V16.0524C24.8017 15.3838 24.2627 14.8457 23.5941 14.8457Z" fill="#FF87B2"/>
              <path d="M98.538 74.2227C98.538 57.5332 111.96 44.1113 128.65 44.1113C145.339 44.1113 158.761 57.5332 158.761 74.2227C158.761 90.9122 145.339 104.334 128.65 104.334C111.96 104.334 98.538 90.9122 98.538 74.2227Z" fill="#77C4C3"/>
            </svg>
          </div>
          <h1 className="text-lg font-bold text-nappy-pink">
            Ассистент
          </h1>
        </div>
        <button 
          onClick={() => window.Telegram?.WebApp?.close()} 
          className="p-2 rounded-full hover:bg-nappy-pink-bg/50 transition-colors"
        >
          <ArrowLeft size={20} className="text-nappy-pink" />
        </button>
      </div>
    </header>
  );
};

export default Header;
