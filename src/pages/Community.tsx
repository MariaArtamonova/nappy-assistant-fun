
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import ChannelCard from '@/components/ChannelCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="community" title="Наши каналы">
          <div className="space-y-2">
            <ChannelCard 
              title="Сообщество НэппиМАМ" 
              description="Это место, где беременные и мамы открыто делятся опытом, общаются и обсуждают все, что считают нужным."
              link="https://t.me/nappyclubforum"
              color="pink"
            />
            <ChannelCard 
              title="Канал для беременных мам" 
              description="Советы, поддержка и новости для будущих мамочек."
              link="https://t.me/nappymoms"
              color="teal"
            />
            <ChannelCard 
              title="Канал для мам с малышами" 
              description="Полезные ресурсы и истории для уже родивших мам."
              link="https://t.me/nappyclub"
              color="blue"
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Link to="/">
              <Button variant="outline" className="text-nappy-blue border-nappy-blue hover:bg-nappy-blue-bg/50">
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

export default Community;
