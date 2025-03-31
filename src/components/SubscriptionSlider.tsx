
import React, { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { Brain, Book, Sticker, Baby, Image, Key } from 'lucide-react';

const plans = [
  {
    title: "🌟 Бесплатная подписка",
    items: [
      { icon: <Brain size={16} />, text: "10 запросов в ассистент (раз в неделю)" },
      { icon: <Book size={16} />, text: "4 запроса на генерацию сказки (раз в месяц)" },
      { icon: <Sticker size={16} />, text: "4 запроса на создание стикеров (раз в месяц)" },
      { icon: <Baby size={16} />, text: "2 запроса на генерацию ребёнка (раз в месяц)" },
      { icon: <Image size={16} />, text: "4 запроса на обработку фотографии (раз в месяц)" }
    ],
    isPremium: false,
    price: "0 ₽"
  },
  {
    title: "💎 Платная подписка",
    items: [
      { icon: <Brain size={16} />, text: "40 запросов в ассистент (раз в неделю)" },
      { icon: <Book size={16} />, text: "60 запросов на генерацию сказки (раз в месяц)" },
      { icon: <Sticker size={16} />, text: "10 запросов на создание стикеров (раз в месяц)" },
      { icon: <Baby size={16} />, text: "6 запросов на генерацию ребёнка (раз в месяц)" },
      { icon: <Image size={16} />, text: "10 запросов на обработку фотографии (раз в месяц)" }
    ],
    isPremium: true,
    price: "499 ₽"
  },
  {
    title: "💎 Платная подписка",
    items: [
      { icon: <Brain size={16} />, text: "80 запросов в ассистент (раз в неделю)" },
      { icon: <Book size={16} />, text: "30 запросов на генерацию сказки (раз в месяц)" },
      { icon: <Sticker size={16} />, text: "20 запросов на создание стикеров (раз в месяц)" },
      { icon: <Baby size={16} />, text: "12 запросов на генерацию ребёнка (раз в месяц)" },
      { icon: <Image size={16} />, text: "20 запросов на обработку фотографии (раз в месяц)" }
    ],
    isPremium: true,
    price: "999 ₽"
  },
  {
    title: "🔑 Дополнительные возможности",
    items: [
      { icon: <Key size={16} />, text: "100 запросов за 999 ₽ для любых целей (неиспользованные запросы сохраняются до полного расходования)" },
    ],
    isPremium: true,
    price: "999 ₽",
    isAdditional: true
  },
  {
    title: "Периоды подписки",
    items: [
      { icon: null, text: "1 месяц" },
      { icon: null, text: "3 месяца (скидка 100 ₽)" },
      { icon: null, text: "1 год (скидка 200 ₽)" },
    ],
    isPremium: false,
    isAdditional: true
  },
];

const SubscriptionSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  
  useEffect(() => {
    if (!carouselApi) return;
    
    const onSelect = () => {
      setActiveIndex(carouselApi.selectedScrollSnap());
    };
    
    carouselApi.on("select", onSelect);
    
    // Initialize active index
    setActiveIndex(carouselApi.selectedScrollSnap());
    
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
  
  return (
    <div className="relative mx-auto max-w-full">
      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          containScroll: "trimSnaps",
        }}
        className="w-full"
        setApi={setCarouselApi}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {plans.map((plan, index) => (
            <CarouselItem 
              key={index} 
              className="pl-2 md:pl-4 basis-[60%] md:basis-[50%] first:pl-2 md:first:pl-4"
            >
              <div 
                className={`h-full rounded-xl p-5 border shadow-sm transition-all duration-300 ${
                  plan.isPremium 
                    ? 'bg-nappy-pink-bg border-nappy-pink' 
                    : 'bg-white border-gray-200'
                } ${
                  activeIndex === index 
                    ? 'opacity-100 shadow-md scale-100' 
                    : 'opacity-60 scale-95'
                }`}
              >
                <h3 className={`text-lg font-bold mb-3 ${
                  plan.isPremium ? 'text-nappy-pink' : 'text-gray-700'
                }`}>
                  {plan.title}
                  {!plan.isAdditional && <div className="text-sm font-normal mt-1">{plan.price}</div>}
                </h3>
                <ul className="space-y-2">
                  {plan.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      {item.icon && (
                        <span className={`mt-0.5 mr-2 ${plan.isPremium ? 'text-nappy-pink' : 'text-nappy-teal'}`}>
                          {item.icon}
                        </span>
                      )}
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SubscriptionSlider;
