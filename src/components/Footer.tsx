
import React from 'react';
import nappyLogo from '/nappy-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-4 border-t border-nappy-pink-light/20">
      <div className="container">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <img src={nappyLogo} alt="NappyClub" className="h-6" />
          </div>
          <p className="text-xs text-gray-500 mb-3">
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
              Отзывы
            </a>
            <a 
              href="https://nappyclub.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-nappy-teal hover:underline"
            >
              Магазин
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
