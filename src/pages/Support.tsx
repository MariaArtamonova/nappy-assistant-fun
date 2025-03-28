
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { HeartHandshake, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="support" title="Поддержка и отзывы">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href="https://t.me/NappyClub_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-nappy-green/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-2 rounded-lg bg-nappy-green/10">
                  <HeartHandshake size={18} className="text-nappy-green" />
                </div>
                <h3 className="font-medium text-nappy-green">Служба поддержки</h3>
              </div>
              <p className="text-xs text-gray-600">Если у вас возникли вопросы или проблемы с использованием бота, обратитесь в нашу службу поддержки.</p>
            </a>
            
            <a 
              href="https://t.me/nappyclubforum/1976" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-nappy-blue/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-2 rounded-lg bg-nappy-blue/10">
                  <MessageSquare size={18} className="text-nappy-blue" />
                </div>
                <h3 className="font-medium text-nappy-blue">Отзывы и предложения</h3>
              </div>
              <p className="text-xs text-gray-600">Поделитесь своим мнением о работе бота и предложите идеи для его улучшения.</p>
            </a>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Link to="/">
              <Button variant="outline" className="text-nappy-green border-nappy-green hover:bg-nappy-green/10">
                Вернуться к меню
              </Button>
            </Link>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
