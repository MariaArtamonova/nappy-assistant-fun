
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { MessageCircle, Users, MessagesSquare } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="community" title="Наши каналы">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href="https://t.me/nappyclubforum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-nappy-pink/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-2 rounded-lg bg-nappy-pink/10">
                  <Users size={18} className="text-nappy-pink" />
                </div>
                <h3 className="font-medium text-nappy-pink">Сообщество НэппиМАМ</h3>
              </div>
              <p className="text-xs text-gray-600">Это место, где беременные и мамы открыто делятся опытом, общаются и обсуждают все, что считают нужным.</p>
            </a>
            
            <a 
              href="https://t.me/nappymoms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-nappy-teal/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-2 rounded-lg bg-nappy-teal/10">
                  <MessageCircle size={18} className="text-nappy-teal" />
                </div>
                <h3 className="font-medium text-nappy-teal">Канал для беременных мам</h3>
              </div>
              <p className="text-xs text-gray-600">Советы, поддержка и новости для будущих мамочек.</p>
            </a>
            
            <a 
              href="https://t.me/nappyclub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-nappy-blue/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="p-2 rounded-lg bg-nappy-blue/10">
                  <MessagesSquare size={18} className="text-nappy-blue" />
                </div>
                <h3 className="font-medium text-nappy-blue">Канал для мам с малышами</h3>
              </div>
              <p className="text-xs text-gray-600">Полезные ресурсы и истории для уже родивших мам.</p>
            </a>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
