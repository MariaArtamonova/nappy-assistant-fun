
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Assistant = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="assistant" title="Ассистент">
          <div className="prose prose-sm max-w-none">
            <p className="text-base mb-4">
              Я твой персональный ассистент на базе искусственного интеллекта.
            </p>
            
            <p className="mb-4">
              Моя экспертность основана на большой библиотеке знаний Школы Материнства под руководством Марии Алешкиной.
              Школа отстаивает научный подход и осознанное родительство и имеет лицензию на образовательную деятельность.
            </p>
            
            <p className="mb-6">
              НэппиКлаб запустил этот проект, как инструмент круглосуточной помощи всем женщинам. Главное, чтобы мама была спокойна и довольна!
              Если кратко, вот часть запросов, с которыми я справлюсь для тебя в любое время:
            </p>
            
            <ul className="space-y-2 mb-6 pl-5 list-disc">
              <li>Найду всю информацию по теме беременности, развитию плода, материнству и уходу за малышом;</li>
              <li>Напишу рецепт, гайд, инструкцию по запросу материнства и детей, а также персональные рекомендации, например, по сну, самочувствию, эмоциональному состоянию;</li>
              <li>Побуду твоим личным психологом или лучшим другом - предложу ресурсы для медитации, техники дыхания, способы справляться с тревогой и стрессом;</li>
              <li>Придумаю сказку с картинкой для Вашего малыша;</li>
              <li>Сгенерирую изображение на основе реальной фото тебя или малыша;</li>
              <li>Дам консультацию по разным товарам НэппиКлаб, а также другим товарам на рынке, например, о пользе тех или иных витаминов.</li>
            </ul>
            
            <p className="font-medium">
              Это малая часть моих возможностей, просто задавай мне любые вопросы!
            </p>
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
