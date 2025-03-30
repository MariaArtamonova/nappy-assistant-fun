
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Brain, Heart, CheckCircle2, CreditCard, CheckCheck, MessageSquare, Star } from 'lucide-react';

const Assistant = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="assistant" title="Ассистент НэппиКлаб">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FeatureCard 
              title="Что такое ассистент НэппиКлаб?"
              description={
                <div>
                  <p className="mb-2">Это твой персональный помощник на базе искусственного интеллекта, созданный специально для мам.</p>
                  <p>Его знания основаны на экспертной базе Школы Материнства под руководством Марии Алешкиной. Школа придерживается научного подхода и поддерживает принципы осознанного родительства, а также имеет лицензию на образовательную деятельность.</p>
                </div>
              }
              icon={<Brain size={18} className="text-nappy-pink" />}
              className="bg-white"
              noHover={true}
            />
            
            <FeatureCard 
              title="Как он поможет именно тебе?"
              description={
                <div>
                  <p className="mb-2">НэппиКлаб создал этого ассистента, чтобы ты могла:</p>
                  <div className="mb-2">
                    <p className="mb-1 flex items-start">
                      <CheckCheck size={16} className="text-nappy-pink mr-1 mt-0.5 flex-shrink-0" />
                      <span>Получать круглосуточную поддержку — даже ночью или в моменты тревоги</span>
                    </p>
                    <p className="mb-1 flex items-start">
                      <CheckCheck size={16} className="text-nappy-pink mr-1 mt-0.5 flex-shrink-0" />
                      <span>Доверять проверенной информации — без мифов и непроверенных советов</span>
                    </p>
                    <p className="flex items-start">
                      <CheckCheck size={16} className="text-nappy-pink mr-1 mt-0.5 flex-shrink-0" />
                      <span>Чувствовать себя увереннее — зная, что у тебя всегда есть «помощник под рукой»</span>
                    </p>
                  </div>
                  <p className="mb-1">Например, спроси у него:</p>
                  <p className="mb-1 flex items-start">
                    <MessageSquare size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                    <span>"Как понять, что у малыша колики?"</span>
                  </p>
                  <p className="mb-1 flex items-start">
                    <MessageSquare size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                    <span>"Какие документы нужны для оформления декрета?"</span>
                  </p>
                  <p className="mb-1 flex items-start">
                    <MessageSquare size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                    <span>"Как восстановиться после родов?"</span>
                  </p>
                  <p className="flex items-start">
                    <MessageSquare size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                    <span>"Придумай сказку на ночь про космос для 4-летки"</span>
                  </p>
                </div>
              }
              icon={<Heart size={18} className="text-nappy-pink" />}
              className="bg-white"
              noHover={true}
            />
            
            <FeatureCard 
              title="Что умеет ассистент?"
              description={
                <div>
                  <p className="mb-2">Если кратко, вот часть запросов, с которыми он справится для тебя в любое время:</p>
                  <ul className="space-y-1 mb-2">
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Найдет всю информацию по теме беременности, развитию плода, материнству и уходу за малышом;</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Напишет рецепт, гайд, инструкцию по запросу материнства и детей, а также персональные рекомендации, например, по сну, самочувствию, эмоциональному состоянию;</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Побудет твоим личным психологом или лучшим другом - предложит ресурсы для медитации, техники дыхания, способы справляться с тревогой и стрессом;</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Придумает сказку с картинкой для твоего малыша;</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Сгенерирует изображение на основе реального фото тебя или малыша;</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={14} className="text-nappy-teal mr-1 mt-0.5 flex-shrink-0" />
                      <span>Даст консультацию по разным товарам НэппиКлаб, а также другим товарам на рынке, например, о пользе тех или иных витаминов.</span>
                    </li>
                  </ul>
                  <p className="font-bold">Это малая часть его возможностей, просто задавай любые вопросы ассистенту НэппиКлаб!</p>
                </div>
              }
              icon={<CheckCircle2 size={18} className="text-nappy-pink" />}
              className="bg-white"
              noHover={true}
            />
            
            <FeatureCard 
              title="Это бесплатно?"
              description={
                <div>
                  <p className="mb-2">Да! Ты можешь пользоваться ассистентом бесплатно с некоторыми ограничениями по количеству запросов. Если тебе нужно больше возможностей, доступна платная подписка с расширенными лимитами.</p>
                  <p className="mb-1">Подробнее о тарифах ты можешь узнать:</p>
                  <p className="mb-1">
                    <Link to="/subscription" className="text-nappy-pink hover:underline">
                      В разделе «Подписка»
                    </Link>
                  </p>
                  <p>В боте: «Профиль» → «Купить подписку»</p>
                </div>
              }
              icon={<CreditCard size={18} className="text-nappy-pink" />}
              className="bg-white"
              noHover={true}
            />
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assistant;
