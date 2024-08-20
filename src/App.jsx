import React from 'react';
import About from './sections/About';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Works from './sections/Works';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <div id="content" className="bg-[#f5f7f8]">
        <About />
        <Works />
      </div>
      <Footer /> 
    </>
  );
};

export default App;
