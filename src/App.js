import React from 'react';
import './App.css';

// Import components
import NavBar from './components/NavBar/navBar';
import HeroSection from './components/HeroSection/heroSection';
import WorkSection from './components/WorkSection/workSection';
import StackSection from './components/StackSection/stackSection';
import LeetSection from './components/LeetSection/leetSection';
import ContactSection from './components/ContactSection/contactSection';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';
import ChatWidget from './components/ChatWidget/ChatWidget';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <WorkSection />
      <StackSection />
      <LeetSection />
      <ContactSection />
      <BackToTop />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
