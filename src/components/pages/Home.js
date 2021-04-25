import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Carousel from '../Carousel';
import Footer from '../Footer';
import About from '../About';
import ImageSlider from '../ImageSlider';
import { SliderData } from '../SliderData';

function Home() {
  return (
    <>
      <ImageSlider slides={SliderData}/>
      <About />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
