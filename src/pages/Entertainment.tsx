
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
        <Section id="entertainment" title="Развлечения" className="bg-nappy-pink-bg/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FeatureCard 
              title="Придумать сказку" 
              description="Создавайте интересные, сюжетные сказки с картинками. Идеально для того, чтобы увлечь и успокоить даже самого активного малыша."
              icon={<SparkleIcon size={18} className="text-nappy-teal" />}
              className="bg-white/90"
            />
            <FeatureCard 
              title="Стикеры для телеграм" 
              description="Классные, яркие стикеры для общения с подругами и близкими, чтобы сделать общение еще красочнее."
              icon={<MessageCircle size={18} className="text-nappy-teal" />}
              className="bg-white/90"
            />
            <FeatureCard 
              title="Как будет выглядеть ваш малыш?" 
              description="Если вы планируете малыша и сгораете от любопытства, каким он будет — можно подсмотреть с помощью AI."
              icon={<Baby size={18} className="text-nappy-teal" />}
              className="bg-white/90"
            />
            <FeatureCard 
              title="Обработка фотографий" 
              description="Обрабатывайте и улучшайте фотографии без сторонних сервисов прямо в боте и радуйте себя, друзей и близких."
              icon={<Image size={18} className="text-nappy-teal" />}
              className="bg-white/90"
            />
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Entertainment;
