import React, { useState } from 'react';
import Style from './ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={Style.slider}>
      <div className={Style.slider_container}>
        <button className={Style.slider_button} onClick={prevSlide}>
          &#8249;
        </button>
        
        <div className={Style.slider_content}>
          <img 
            src={images[currentIndex].src} 
            alt={images[currentIndex].alt} 
            className={Style.slider_image}
          />
          <div className={Style.slider_caption}>
            {images[currentIndex].caption}
          </div>
        </div>
        
        <button className={Style.slider_button} onClick={nextSlide}>
          &#8250;
        </button>
      </div>
      
      <div className={Style.slider_dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${Style.slider_dot} ${index === currentIndex ? Style.slider_dot_active : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
