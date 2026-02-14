import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"; // assuming React Router v6
import AboutBanner from "../Components/AboutBanner";
import AboutInfo from "../Components/AboutInfo";
import Vision from "../Components/Vision";
import Industries from "../Components/Industries";
import StatsSection from "../Components/Stats";
import MessageSection from "../Components/Message";
import Footer from "../Components/Footer";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <AboutBanner />
      <AboutInfo />
      <Vision />
      <Industries />
      <StatsSection />
      <MessageSection />
      <Footer />
    </div>
  );
};

export default About;
