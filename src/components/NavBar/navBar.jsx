import React, { useState, useEffect } from 'react'
import Style from './navBar.module.css';
import logo from '../../media/logo.png';
import logo2 from '../../media/logo2.png';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`${Style.navbar} ${isScrolled ? Style.scrolled : ''}`}>
      <div className={Style.navContainer}>
        <div className={Style.navLogo}>
          <img src={logo2} alt="Logo" className={Style.logoImage} onClick={scrollToTop} />
        </div>

        <div className={Style.navMenu}>
          <button
            className={Style.navLink}
            onClick={() => handleNavClick('work')}
          >
            Work
          </button>

          <button
            className={Style.navLink}
            onClick={() => handleNavClick('stack')}
          >
            Stack
          </button>

          <button
            className={Style.navLink}
            onClick={() => handleNavClick('leet')}
          >
            Leet
          </button>

          <button
            className={Style.navLink}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar