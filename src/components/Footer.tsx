
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nappy-pink-bg py-6 mt-6">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-3">
            <div className="w-6 h-6 rounded-full bg-nappy-pink flex items-center justify-center">
              <span className="text-white text-xs font-bold">N</span>
            </div>
            <h3 className="text-sm font-bold text-nappy-pink">NappyClub</h3>
          </div>
          <p className="text-xs text-gray-600 mb-4">
            Заботимся о мамах и малышах вместе с вами
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://t.me/NappyClub_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-nappy-teal hover:underline"
            >
              Поддержка
            </a>
            <a 
              href="https://t.me/nappyclubforum/1976" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-nappy-teal hover:underline"
            >
              Отзывы и предложения
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
