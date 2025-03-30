
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import SubscriptionCard from '@/components/SubscriptionCard';
import Footer from '@/components/Footer';
import SubscriptionSlider from '@/components/SubscriptionSlider';

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
                "Полный доступ ко всем функциям"
              ]}
            />
          </div>
          <div className="mt-4 p-3 bg-nappy-yellow-light/20 rounded-lg text-center">
            <p className="text-xs text-gray-700">
              Для управления подпиской, перейди в бота и выбери "Профиль" → "Моя подписка" или "Купить подписку".
            </p>
          </div>
          
          <div className="mt-8 mb-2">
            <SubscriptionSlider />
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Subscription;
