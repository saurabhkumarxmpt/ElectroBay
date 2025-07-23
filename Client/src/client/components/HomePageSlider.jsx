import React, { useState, useEffect } from "react";
const slides = [
  {
    id: 1,
    image: "/ClientImages/slide1.jpg",
    title: "Welcome to ShopEase",
    subtitle: "Your one-stop shop for everything!",
  },
  {
    id: 2,
    image: "/ClientImages/slide2.jpg",
    title: "Latest Gadgets",
    subtitle: "Top deals on electronics & more!",
  },
  {
    id: 3,
    image: "/ClientImages/slide3.jpg",
    title: "Fashion Fiesta",
    subtitle: "Trendy clothes at best prices!",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // ✅ Move this ABOVE

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[87vh] overflow-hidden mt-2 rounded-sm">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex flex-col justify-center items-start text-gray-800 px-6 md:px-10 lg:px-24">
          <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
          <p className="text-lg md:text-2xl mt-4 mb-6">{slide.subtitle}</p>
          <button className="border text-gray-800 px-6 py-2 rounded-md text-sm md:text-base hover:bg-gray-800 hover:text-white transition cursor-pointer">
            More Info
          </button>
        </div>
        </div>
      ))}

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-20"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-20"
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
