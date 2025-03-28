
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Baby, BookOpen, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Assistant = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="assistant" title="Возможности ассистента">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <FeatureCard 
              title="Информация и консультации" 
              description="Получите всю необходимую информацию о беременности, развитии плода, материнстве и уходе за малышом."
              icon={<BookOpen size={18} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Персональные рекомендации" 
              description="Рецепты, гайды, инструкции и персональные рекомендации по сну, самочувствию, эмоциональному состоянию."
              icon={<Baby size={18} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Эмоциональная поддержка" 
              description="Персональный психолог или лучший друг - ресурсы для медитации, техники дыхания, работа с тревогой и стрессом."
              icon={<Heart size={18} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Консультации по товарам" 
              description="Ответы на вопросы о товарах NappyClub и других продуктах на рынке, например, о пользе тех или иных витаминов."
              icon={<ShoppingBag size={18} className="text-nappy-pink" />}
            />
          </div>
          
          <div className="mt-6 flex justify-center">
            <Link to="/">
              <Button variant="outline" className="text-nappy-pink border-nappy-pink hover:bg-nappy-pink-bg/50">
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

export default Assistant;
