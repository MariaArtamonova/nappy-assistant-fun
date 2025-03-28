
import React from 'react';
import botScreenshot from '/bot-screenshot.png';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-white py-4">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 space-y-3 mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-nappy-pink mb-1">
              NappyClub Ассистент
            </h1>
            <p className="text-sm text-gray-700 max-w-md">
              Ваш персональный ИИ-помощник для беременных и молодых мам
            </p>
            <Button 
              className="bg-nappy-pink hover:bg-nappy-pink-light text-white rounded-full"
              size="sm"
              onClick={() => window.open("https://t.me/NappyClub_bot", "_blank")}
            >
              Открыть бота
            </Button>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img 
              src={botScreenshot} 
              alt="NappyClub Bot" 
              className="w-[200px] rounded-xl shadow-md border border-gray-200" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
