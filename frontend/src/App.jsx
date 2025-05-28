import React from 'react';
import NavBar from './components/custom/NavBar.jsx';
import HeroSection from './components/custom/HeroSection.jsx';
import DescriptionSection from './components/custom/DescriptionSection.jsx';
import BrandingSection from './components/custom/BrandingSection.jsx';

function App() {


  return (
    <div className='style-text bg-[#070707] w-full min-h-screen scroll-smooth'>
      <NavBar />
      <HeroSection />
      <DescriptionSection />
      <BrandingSection />
    </div>
  )
}

export default App
