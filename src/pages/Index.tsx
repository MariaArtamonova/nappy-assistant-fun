
import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import ChannelCard from '@/components/ChannelCard';
import SubscriptionCard from '@/components/SubscriptionCard';
import Footer from '@/components/Footer';
import { 
  Baby, 
  BookOpen, 
  Heart, 
  MessageCircle, 
  SparkleIcon, 
  Image, 
  Wand2, 
  ShoppingBag,
  MessageSquare,
  HeartHandshake
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-nappy-pink-bg/30">
      <Header />
      <Banner />
      <Navigation />
      
      <main className="flex-grow">
        <Section id="assistant" title="Возможности ассистента" className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              title="Информация и консультации" 
              description="Получите всю необходимую информацию о беременности, развитии плода, материнстве и уходе за малышом."
              icon={<BookOpen size={20} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Персональные рекомендации" 
              description="Рецепты, гайды, инструкции и персональные рекомендации по сну, самочувствию, эмоциональному состоянию."
              icon={<Baby size={20} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Эмоциональная поддержка" 
              description="Персональный психолог или лучший друг - ресурсы для медитации, техники дыхания, работа с тревогой и стрессом."
              icon={<Heart size={20} className="text-nappy-pink" />}
            />
            <FeatureCard 
              title="Консультации по товарам" 
              description="Ответы на вопросы о товарах NappyClub и других продуктах на рынке, например, о пользе тех или иных витаминов."
              icon={<ShoppingBag size={20} className="text-nappy-pink" />}
            />
          </div>
        </Section>

        <Section id="entertainment" title="Развлечения" className="bg-nappy-teal-bg/20 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              title="Придумать сказку" 
              description="Создавайте интересные, сюжетные сказки с картинками. Идеально для того, чтобы увлечь и успокоить даже самого активного малыша."
              icon={<SparkleIcon size={20} className="text-nappy-teal" />}
              className="bg-white/80"
            />
            <FeatureCard 
              title="Стикеры для телеграм" 
              description="Классные, яркие стикеры для общения с подругами и близкими, чтобы сделать общение еще красочнее."
              icon={<MessageCircle size={20} className="text-nappy-teal" />}
              className="bg-white/80"
            />
            <FeatureCard 
              title="Как будет выглядеть ваш малыш?" 
              description="Если вы планируете малыша и сгораете от любопытства, каким он будет — можно подсмотреть с помощью AI."
              icon={<Baby size={20} className="text-nappy-teal" />}
              className="bg-white/80"
            />
            <FeatureCard 
              title="Обработка фотографий" 
              description="Обрабатывайте и улучшайте фотографии без сторонних сервисов прямо в боте и радуйте себя, друзей и близких."
              icon={<Image size={20} className="text-nappy-teal" />}
              className="bg-white/80"
            />
          </div>
        </Section>

        <Section id="community" title="Наши каналы и сообщества" className="mt-6">
          <div className="space-y-3">
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
        </Section>

        <Section id="subscription" title="Тарифы подписки" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SubscriptionCard 
              title="ТЕСТОВЫЙ (Бесплатный)" 
              isPremium={false}
              features={[
                "Обновляется раз в месяц",
                "Ограниченное количество запросов",
                "Доступ ко всем видам запросов",
                "Базовая поддержка"
              ]}
            />
            <SubscriptionCard 
              title="РАСШИРЕННЫЙ (Платный)" 
              isPremium={true}
              features={[
                "Большое количество запросов",
                "Приоритетная обработка",
                "Полный доступ ко всем функциям",
                "Расширенная поддержка"
              ]}
            />
          </div>
          <div className="mt-6 p-4 bg-nappy-yellow-light/30 rounded-lg">
            <p className="text-sm text-center">
              Чтобы узнать больше о подписках или приобрести расширенную подписку, перейдите в бота и нажмите "Профиль" → "Моя подписка" или "Купить подписку".
            </p>
          </div>
        </Section>

        <Section id="support" title="Поддержка и отзывы" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://t.me/NappyClub_bot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-5 rounded-xl border border-nappy-green/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-nappy-green/10">
                  <HeartHandshake size={20} className="text-nappy-green" />
                </div>
                <h3 className="font-bold text-nappy-green">Служба поддержки</h3>
              </div>
              <p className="text-sm text-gray-700">Если у вас возникли вопросы или проблемы с использованием бота, обратитесь в нашу службу поддержки.</p>
            </a>
            
            <a 
              href="https://t.me/nappyclubforum/1976" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-5 rounded-xl border border-nappy-blue/20 bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 rounded-lg bg-nappy-blue/10">
                  <MessageSquare size={20} className="text-nappy-blue" />
                </div>
                <h3 className="font-bold text-nappy-blue">Отзывы и предложения</h3>
              </div>
              <p className="text-sm text-gray-700">Поделитесь своим мнением о работе бота и предложите идеи для его улучшения.</p>
            </a>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
