import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

// Данные для презентации
const moscowHistorySlides = [
  {
    id: 1,
    title: "Основание Москвы",
    period: "1147 год",
    content:
      "Первое летописное упоминание о Москве относится к 1147 году, когда суздальский князь Юрий Долгорукий пригласил своего союзника князя Святослава Ольговича на встречу в Москву. Этот год традиционно считается датой основания города.",
    image:
      "https://images.unsplash.com/photo-1520106212299-d99c443e4568?q=80&w=1000&auto=format&fit=crop",
    backgroundColor: "#9b2226",
    layout: "image-left",
    style: "classic",
  },
  {
    id: 2,
    title: "Московское княжество",
    period: "XIII-XV века",
    content:
      "В XIII веке Москва становится центром удельного княжества. При Иване Калите (1325-1340) город получает статус религиозного центра Руси. При Дмитрии Донском одерживается победа над татаро-монголами в Куликовской битве (1380), что укрепляет авторитет Москвы.",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1000&auto=format&fit=crop",
    backgroundColor: "#003049",
    layout: "image-right",
    style: "modern",
  },
  {
    id: 3,
    title: "Столица Российского государства",
    period: "XV-XVII века",
    content:
      "При Иване III (1462-1505) Москва становится столицей единого Русского государства. Строится современный Кремль и закладываются основы архитектурного облика города. В XVI-XVII веках город переживает расцвет, возводятся многие знаковые храмы и укрепления.",
    image:
      "https://images.unsplash.com/photo-1520106386595-a3254d6a335d?q=80&w=1000&auto=format&fit=crop",
    backgroundColor: "#ffb703",
    layout: "image-full",
    style: "vintage",
  },
  {
    id: 4,
    title: "Петербургский период",
    period: "XVIII - начало XX века",
    content:
      "В 1712 году Пётр I переносит столицу в Санкт-Петербург, но Москва сохраняет значение как место коронации императоров. В 1812 году город переживает пожар во время Отечественной войны. Во второй половине XIX века Москва становится крупным промышленным и культурным центром.",
    image:
      "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=1000&auto=format&fit=crop",
    backgroundColor: "#457b9d",
    layout: "image-right",
    style: "minimal",
  },
  {
    id: 5,
    title: "Советская и современная Москва",
    period: "XX-XXI века",
    content:
      "В 1918 году Москва вновь становится столицей — теперь советской России. Город активно перестраивается: появляются сталинские высотки, метрополитен, ВДНХ. После 1991 года Москва — столица Российской Федерации, один из крупнейших мегаполисов мира и финансовый центр Восточной Европы.",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1000&auto=format&fit=crop",
    backgroundColor: "#1d3557",
    layout: "image-gradient",
    style: "futuristic",
  },
];

const PresentationSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Функция для рендеринга контента слайда в зависимости от его макета и стиля
  const renderSlideContent = (
    slide: (typeof moscowHistorySlides)[0],
    index: number,
  ) => {
    switch (slide.layout) {
      case "image-right":
        return (
          <CardContent
            className={`flex flex-col md:flex-row p-0 rounded-xl overflow-hidden ${
              slide.style === "modern"
                ? "shadow-lg"
                : slide.style === "minimal"
                  ? "border-2 border-white/20"
                  : ""
            }`}
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-white order-2 md:order-1">
              <div className="mb-2 text-sm md:text-lg font-light tracking-wider">
                {slide.period}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base font-sans leading-relaxed">
                {slide.content}
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm">
                  Слайд {index + 1} из {moscowHistorySlides.length}
                </div>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative order-1 md:order-2">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
          </CardContent>
        );

      case "image-full":
        return (
          <CardContent className="p-0 rounded-xl overflow-hidden relative h-[500px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center p-8 ${
                slide.style === "vintage"
                  ? "bg-gradient-to-r from-black/80 to-transparent"
                  : "bg-black/50"
              }`}
            >
              <div className="max-w-lg">
                <div className="mb-2 text-sm md:text-lg font-light tracking-wider text-white/90">
                  {slide.period}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base font-sans leading-relaxed text-white/90">
                  {slide.content}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-sm text-white/80">
                    Слайд {index + 1} из {moscowHistorySlides.length}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        );

      case "image-gradient":
        return (
          <CardContent className="p-0 rounded-xl overflow-hidden relative h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1d3557] to-black z-0"></div>
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-60">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 z-10">
              <div className="h-full flex flex-col justify-center p-8">
                <div className="max-w-lg">
                  <div className="mb-2 text-lg font-light tracking-wider text-blue-200">
                    {slide.period}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans text-white">
                    {slide.title}
                  </h2>
                  <p className="text-base font-sans leading-relaxed text-gray-200">
                    {slide.content}
                  </p>
                  <div className="flex justify-between items-center mt-6">
                    <div className="text-sm text-gray-300">
                      Слайд {index + 1} из {moscowHistorySlides.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        );

      case "image-left":
      default:
        return (
          <CardContent
            className={`flex flex-col md:flex-row p-0 rounded-xl overflow-hidden ${
              slide.style === "classic" ? "border border-white/10" : ""
            }`}
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-white">
              <div className="mb-2 text-sm md:text-lg font-light tracking-wider">
                {slide.period}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-sans">
                {slide.title}
              </h2>
              <p className="text-sm md:text-base font-sans leading-relaxed">
                {slide.content}
              </p>
              <div className="flex justify-between items-center mt-6">
                <div className="text-sm">
                  Слайд {index + 1} из {moscowHistorySlides.length}
                </div>
              </div>
            </div>
          </CardContent>
        );
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 px-4">
      <header className="w-full max-w-5xl text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 font-sans">
          История Москвы
        </h1>
        <p className="text-xl text-gray-300 font-sans">
          Путешествие через века
        </p>
      </header>

      <Carousel
        className="w-full max-w-5xl"
        onSelect={(index) => handleSlideChange(index)}
      >
        <CarouselContent>
          {moscowHistorySlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="md:basis-full">
              <div className="p-1">
                <Card className="border-none overflow-hidden">
                  {renderSlideContent(slide, index)}
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <CarouselPrevious className="relative static transform-none bg-white/20 hover:bg-white/30 border-none text-white hover:text-white" />
          <div className="flex space-x-2">
            {moscowHistorySlides.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 p-0 rounded-full ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
          <CarouselNext className="relative static transform-none bg-white/20 hover:bg-white/30 border-none text-white hover:text-white" />
        </div>
      </Carousel>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>
          © 2025 История Москвы | Презентация создана с использованием React
        </p>
      </footer>
    </div>
  );
};

export default PresentationSlider;
