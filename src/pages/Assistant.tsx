
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Brain, Heart, CheckCircle2, CreditCard } from 'lucide-react';

const Assistant = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="assistant" title="Ассистент НэппиКлаб">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FeatureCard 
              title="Что такое ассистент НэппиКлаб?"
              description="Это твой персональный помощник на базе искусственного интеллекта, созданный специально для мам. Его знания основаны на экспертной базе Школы Материнства под руководством Марии Алешкиной. Школа придерживается научного подхода и поддерживает принципы осознанного родительства, а также имеет лицензию на образовательную деятельность."
              icon={<Brain size={18} className="text-nappy-pink" />}
              className="bg-white"
              noHover={true}
            />
            
            <FeatureCard 
              title="Как он поможет именно тебе?"
              description={
                <div>
                  <p className="mb-2">НэппиКлаб создал этого ассистента, чтобы ты могла:</p>
                  <p className="mb-1">✅ Получать круглосуточную поддержку — даже ночью или в моменты тревоги</p>
                  <p className="mb-1">✅ Доверять проверенной информации — без мифов и непроверенных советов</p>
                  <p className="mb-2">✅ Чувствовать себя увереннее — зная, что у тебя всегда есть «помощник под рукой»</p>
                  <p className="mb-1">Например, спроси у него:</p>
                  <p className="mb-1">• "Как понять, что у малыша колики?"</p>
                  <p className="mb-1">• "Какие документы нужны для оформления декрета?"</p>
                  <p className="mb-1">• "Как восстановиться после родов?"</p>
                  <p>• "Придумай сказку на ночь про космос для 4-летки"</p>
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
                  <ul className="space-y-1 pl-5 list-disc">
                    <li>Найдет всю информацию по теме беременности, развитию плода, материнству и уходу за малышом;</li>
                    <li>Напишет рецепт, гайд, инструкцию по запросу материнства и детей, а также персональные рекомендации, например, по сну, самочувствию, эмоциональному состоянию;</li>
                    <li>Побудет твоим личным психологом или лучшим другом - предложит ресурсы для медитации, техники дыхания, способы справляться с тревогой и стрессом;</li>
                    <li>Придумает сказку с картинкой для твоего малыша;</li>
                    <li>Сгенерирует изображение на основе реального фото тебя или малыша;</li>
                    <li>Даст консультацию по разным товарам НэппиКлаб, а также другим товарам на рынке, например, о пользе тех или иных витаминов.</li>
                  </ul>
                  <p className="mt-2">Это малая часть его возможностей, просто задавай любые вопросы ассистенту НэппиКлаб!</p>
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
