
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import SubscriptionCard from '@/components/SubscriptionCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Subscription = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="subscription" title="Тарифы подписки">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SubscriptionCard 
              title="ТЕСТОВЫЙ" 
              isPremium={false}
              features={[
                "Бесплатный",
                "Обновляется раз в месяц",
                "Ограниченное количество запросов",
                "Доступ ко всем видам запросов"
              ]}
            />
            <SubscriptionCard 
              title="РАСШИРЕННЫЙ" 
              isPremium={true}
              features={[
                "Платный",
                "Большое количество запросов",
                "Приоритетная обработка",
                "Полный доступ ко всем функциям"
              ]}
            />
          </div>
          <div className="mt-4 p-3 bg-nappy-yellow-light/20 rounded-lg text-center">
            <p className="text-xs text-gray-700">
              Для управления подпиской, перейдите в бота и выберите "Профиль" → "Моя подписка" или "Купить подписку".
            </p>
          </div>
          
          <div className="mt-6 flex justify-center">
            <Link to="/">
              <Button variant="outline" className="text-nappy-yellow border-nappy-yellow hover:bg-nappy-yellow-light/30">
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

export default Subscription;
