// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import ExperienceSection from "../components/home/ExperienceSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <ExperienceSection />
    </div>
  );
};

export default Home;
