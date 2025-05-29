import React from 'react';
import NavBar from './components/custom/NavBar.jsx';
import HeroSection from './components/custom/HeroSection.jsx';
import DescriptionSection from './components/custom/DescriptionSection.jsx';
import BrandingSection from './components/custom/BrandingSection.jsx';
import Heading from './components/custom/Heading.jsx';
import DisplayItem from './components/custom/DisplayItem.jsx';
import FeaturesSection from './components/custom/FeaturesSection.jsx';
import TestimonialsSection from './components/custom/TestimonialsSection.jsx';
import LowerSection from './components/custom/LowerSection.jsx';
import Footer from './components/custom/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Checkout from './components/custom/Checkout.jsx';

function App() {


  return (
    <div className='style-text bg-[#070707] w-full min-h-screen scroll-smooth'>

      <Routes>
        <Route
          path="/"
          element={
            <div id='top'>
              <NavBar />
              <HeroSection />
              <DescriptionSection />
              <BrandingSection />
              <Heading />
              <DisplayItem />
              <FeaturesSection />
              <TestimonialsSection />
              <LowerSection />
              <Footer />
            </div>
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>


    </div>
  )
}

export default App
