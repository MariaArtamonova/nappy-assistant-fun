
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
    bgColor: "bg-gradient-to-br from-purple-900 to-purple-700",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
  },
  {
    title: "Придумать сказку",
    description: "Создавай интересные персонализированные сказки с картинками, чтобы увлечь и успокоить даже самого активного малыша.",
    icon: <SparkleIcon size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-indigo-900 to-indigo-700",
    image: "/lovable-uploads/c7f748d9-c4e1-4e1e-884d-616a266428e5.png"
  },
  {
    title: "Стикеры для Telegram",
    description: "Классные, яркие стикеры с изображением вашего малыша - для весёлого общения с подругами и близкими",
    icon: <MessageCircle size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-blue-900 to-blue-700",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
  },
  {
    title: "Как будет выглядеть ваш малыш?",
    description: "Если ты планируешь малыша и сгораешь от любопытства, каким он будет — можно подсмотреть)",
    icon: <Baby size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-pink-900 to-pink-700",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
  },
  {
    title: "Обработка фотографий",
    description: "Обрабатывай фотографии без сторонних сервисов прямо в боте и радуй себя, друзей и близких.",
    icon: <ImageIcon size={24} className="text-white" />,
    bgColor: "bg-gradient-to-br from-teal-900 to-teal-700",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800"
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
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                {/* Background image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                  style={{ objectPosition: index === 1 ? "center" : "center" }} // Adjust the fairy tale image position
                />
                
                <div className="relative h-full flex flex-col justify-between p-6 z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-black/30">
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
