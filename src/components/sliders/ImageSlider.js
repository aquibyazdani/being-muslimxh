import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

const ImageSlider = ({ images, duration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex >= images.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  const selectSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }

    if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex >= images.length - 2 ? 0 : prevIndex + 1
      );
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("touchstart", handleTouchStart);
      slider.addEventListener("touchmove", handleTouchMove);
      slider.addEventListener("touchend", handleTouchEnd);

      return () => {
        slider.removeEventListener("touchstart", handleTouchStart);
        slider.removeEventListener("touchmove", handleTouchMove);
        slider.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [touchStartX, touchEndX]);

  return (
    <div className="slider-container">
      <div className="shadow-add"></div>
      <div
        className="slider"
        style={{
          transform: `translateX(-${
            (currentImageIndex / images.length) * 100
          }%)`,
        }}
        ref={sliderRef}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentImageIndex || index === currentImageIndex + 1
                ? "slide active"
                : "slide"
            }
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
      <div className="dots-slider">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "dot active" : "dot"}
            onClick={() => selectSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
