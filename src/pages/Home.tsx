import React from 'react';
import Hero from '../components/Hero';
import LatestSermon from '../components/LatestSermon';
import Services from '../components/Services';
import Calendar from '../components/Calendar';
// import Donation from '../components/Donation';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import { useEffect } from 'react';
import QuienesSomos from '../components/QuienesSomos';

const Home = () => {
  useEffect(() => {
    document.title = 'Iglesia Río Nuevo - Inicio';
  }, []);

  return (
    <>
      <Hero />
      <QuienesSomos/>
      <LatestSermon />
      <Services />
      <Calendar />
      {/* <Donation /> */}
      <SocialMedia />
      <Contact />
    </>
  );
};

export default Home;