
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-4 mt-4 border-t border-nappy-pink-light/20">
      <div className="container">
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-3">
            NappyClub. Клуб уверенных мам
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
