
import React, { useState, useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
} from "@/components/ui/carousel";
import { 
  Brain, 
  SparkleIcon, 
  MessageCircle, 
  Baby, 
  Image as ImageIcon
} from 'lucide-react';

const slides = [
  {
    title: "Ассистент НэппиКлаб",
    description: "Твой персональный помощник на базе искусственного интеллекта",
    icon: <Brain size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-purple-400 to-pink-300",
    image: "/lovable-uploads/bf804a36-25e4-4364-8580-ce88bf515aac.png"
  },
  {
    title: "Придумать сказку",
    description: "Создавай интересные персонализированные сказки с картинками, чтобы увлечь и успокоить даже самого активного малыша.",
    icon: <SparkleIcon size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-green-300 to-blue-200",
    image: "/lovable-uploads/2e30b78b-fd3f-4cdf-a5f6-5dec5c9534e8.png"
  },
  {
    title: "Стикеры для Telegram",
    description: "Классные, яркие стикеры с изображением вашего малыша - для весёлого общения с подругами и близкими",
    icon: <MessageCircle size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-blue-300 to-purple-200",
    image: "/lovable-uploads/c263116b-5c84-44f6-b689-7961453b9658.png"
  },
  {
    title: "Как будет выглядеть ваш малыш?",
    description: "Если ты планируешь малыша и сгораешь от любопытства, каким он будет — можно подсмотреть)",
    icon: <Baby size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-pink-400 to-orange-200",
    image: "/lovable-uploads/509f2777-807f-427d-bc77-fbfc1f19b44d.png"
  },
  {
    title: "Обработка фотографий",
    description: "Обрабатывай фотографии без сторонних сервисов прямо в боте и радуй себя, друзей и близких.",
    icon: <ImageIcon size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-yellow-300 to-orange-200",
    image: "/lovable-uploads/ae9ce516-6441-4ea9-a423-cc9cf03ef0ca.png"
  }
];

const LogoSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const autoplayRef = useRef<number | null>(null);
  
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
  
  // Setup autoplay
  useEffect(() => {
    if (!carouselApi) return;
    
    const startAutoplay = () => {
      stopAutoplay();
      autoplayRef.current = window.setInterval(() => {
        if (carouselApi.canScrollNext()) {
          carouselApi.scrollNext();
        } else {
          carouselApi.scrollTo(0);
        }
      }, 5000); // Change slide every 5 seconds
    };
    
    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
    
    startAutoplay();
    
    return () => {
      stopAutoplay();
    };
  }, [carouselApi]);
  
  return (
    <div className="relative h-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
        }}
        className="h-full"
        setApi={setCarouselApi}
      >
        <CarouselContent className="-ml-2 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-2 h-full basis-full">
              <div className={`relative h-full rounded-xl overflow-hidden ${slide.bgColor}`}>
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-white opacity-20"></div>
                
                {/* Background image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                
                <div className="relative h-full flex flex-col justify-between p-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-white/30">
                      {slide.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{slide.title}</h3>
                  </div>
                  
                  <p className="mt-4 text-white/90">{slide.description}</p>
                  
                  {/* Dots indicator */}
                  <div className="flex justify-center gap-1 mt-4">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === activeIndex ? "bg-white w-4" : "bg-white/50"
                        }`}
                        onClick={() => carouselApi?.scrollTo(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default LogoSlider;
