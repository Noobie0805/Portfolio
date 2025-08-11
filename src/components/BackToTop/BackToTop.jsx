import React, { useState, useEffect } from 'react';
import Style from './BackToTop.module.css';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className={Style.backToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp className={Style.arrowIcon} />
        </button>
      )}
    </>
  );
};

export default BackToTop; 