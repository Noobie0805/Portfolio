import React from 'react'
// import {Image} from 'react/native';
import Style from './heroSection.module.css';
import heroBackground from '../../media/HeroSection.png';

const HeroSection = () => {
  return (
    <div id="home" className={Style.heroSection}>
      <div className={Style.heroContent}>
      <h1> Hey! I'm <span>Sarvjeet</span></h1>
        <h2>MERN Developer  |  Web3 Enthusiast  |  Algorithmic Thinker </h2>
        <h3>A novice, but making <span>progress</span> on a daily basis.</h3>
      </div>
    </div>
  )
}

export default HeroSection;