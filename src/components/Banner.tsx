
import React from 'react';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-nappy-pink to-nappy-teal py-10 mb-6">
      <div className="container relative z-10">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-2">NappyClub Ассистент</h1>
          <p className="mb-4 max-w-md mx-auto">
            Ваш персональный ИИ-помощник для беременных и молодых мам
          </p>
          <a 
            href="https://t.me/NappyClub_bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-white text-nappy-pink rounded-full font-medium hover:bg-opacity-90 transition-colors"
          >
            Открыть бота
          </a>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Banner;
