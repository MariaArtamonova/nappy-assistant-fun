
import React from 'react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const Assistant = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        <Section id="assistant" title="Что такое ассистент НэппиКлаб и как он поможет мамам?">
          <div className="prose prose-sm max-w-none">
            <p className="text-base mb-4">
              Это твой персональный ассистент на базе искусственного интеллекта.
            </p>
            
            <p className="mb-4">
              Его экспертность основана на большой библиотеке знаний Школы Материнства под руководством Марии Алешкиной. Школа отстаивает научный подход и осознанное родительство и имеет лицензию на образовательную деятельность.
            </p>
            
            <p className="mb-6">
              НэппиКлаб запустил этот проект, как инструмент круглосуточной помощи всем женщинам. Главное, чтобы мама была спокойна и довольна!
            </p>
            
            <h2 className="text-base sm:text-lg font-semibold mb-2 text-nappy-pink">
              А что он умеет?
            </h2>
            
            <p className="mb-4">
              Если кратко, вот часть запросов, с которыми он справится для тебя в любое время:
            </p>
            
            <ul className="space-y-2 mb-6 pl-0 list-none">
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Найдет всю информацию по теме беременности, развитию плода, материнству и уходу за малышом;</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Напишет рецепт, гайд, инструкцию по запросу материнства и детей, а также персональные рекомендации, например, по сну, самочувствию, эмоциональному состоянию;</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Побудет твоим личным психологом или лучшим другом - предложит ресурсы для медитации, техники дыхания, способы справляться с тревогой и стрессом;</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Придумает сказку с картинкой для твоего малыша;</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Сгенерирует изображение на основе реального фото тебя или малыша;</span>
              </li>
              <li className="flex items-start">
                <Check size={16} className="text-nappy-pink mt-1 mr-2 flex-shrink-0" />
                <span>Даст консультацию по разным товарам НэппиКлаб, а также другим товарам на рынке, например, о пользе тех или иных витаминов.</span>
              </li>
            </ul>
            
            <p className="font-medium">
              Это малая часть его возможностей, просто задавай любые вопросы ассистенту НэппиКлаб!
            </p>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Assistant;
