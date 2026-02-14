import React, { useRef, useState, useEffect } from 'react';
import { motion } from "framer-motion";

import Hero from '../Components/Hero';
import Aboutrental from '../Components/Aboutrental';
import CategorySlide from '../Components/CategorySlide';
import HeroSlider from '../Components/HeroSlider';
import Whychoose from '../Components/Whychoose';
import Certificate from '../Components/Certificate';
import Testimonials from '../Components/Testimonial';
import Location from '../Components/Location';
import Footer from '../Components/Footer';
import LandingSection from '../Components/Landingsection';
import Posters from '../Components/Posters';
import StatsSection from '../Components/Stats';
import Industries from '../Components/Industries';
import CategoryGrid from '../Components/CatergoryGrid';

// ✅ Fade-in Wrapper (Only Framer Motion)
const FadeInSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% is visible
    transition={{ duration: 0.6, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const aboutRef = useRef(null);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('hasSeenLanding');
    if (!hasSeenLanding) {
      setShowLanding(true);
    }
  }, []);

  const handleCountryClick = () => {
    sessionStorage.setItem('hasSeenLanding', 'true');
    setShowLanding(false);
  };

  if (showLanding) {
    return <LandingSection onCountryClick={handleCountryClick} />;
  }

  return (
    <>
      <FadeInSection><Hero aboutRef={aboutRef} /></FadeInSection>
      <FadeInSection delay={0.1}><Aboutrental aboutRef={aboutRef} /></FadeInSection>
      {/* <FadeInSection delay={0.2}><CategorySlide /></FadeInSection> */}
      <FadeInSection delay={0.2}><CategoryGrid /></FadeInSection>
      <FadeInSection delay={0.8}><Industries /></FadeInSection>
      <FadeInSection delay={0.4}><Whychoose /></FadeInSection>
      <FadeInSection delay={0.5}><Posters /></FadeInSection>
      <FadeInSection delay={0.6}><Certificate /></FadeInSection>
      <FadeInSection delay={0.7}><Testimonials /></FadeInSection>
      <FadeInSection delay={0.8}><StatsSection /></FadeInSection>
      <FadeInSection delay={0.9}><Location /></FadeInSection>
      <Footer />
    </>
  );
};

export default Home;
