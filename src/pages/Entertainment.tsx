
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { SparkleIcon, MessageCircle, Baby, Image } from 'lucide-react';

const Entertainment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="entertainment" title="Дари радость себе и малышу" className="bg-nappy-pink-bg/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FeatureCard 
              title="Придумать сказку" 
              description="Создавай интересные персонализированные сказки с картинками, чтобы увлечь и успокоить даже самого активного малыша."
              icon={<SparkleIcon size={18} className="text-nappy-teal" />}
              className="bg-white/90"
              noHover={true}
            />
            <FeatureCard 
              title="Стикеры для Telegram" 
              description="Классные, яркие стикеры с изображением вашего малыша - для весёлого общения с подругами и близкими"
              icon={<MessageCircle size={18} className="text-nappy-teal" />}
              className="bg-white/90"
              noHover={true}
            />
            <FeatureCard 
              title="Как будет выглядеть ваш малыш?" 
              description="Если ты планируешь малыша и сгораешь от любопытства, каким он будет — можно подсмотреть)"
              icon={<Baby size={18} className="text-nappy-teal" />}
              className="bg-white/90"
              noHover={true}
            />
            <FeatureCard 
              title="Обработка фотографий" 
              description="Обрабатывай фотографии без сторонних сервисов прямо в боте и радуй себя, друзей и близких."
              icon={<Image size={18} className="text-nappy-teal" />}
              className="bg-white/90"
              noHover={true}
            />
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Entertainment;
