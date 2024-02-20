// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "../components/home/Hero";
import HomeAbout from "../components/home/HomeAbout";
import WelcomeSite from "../components/home/WelcomeSite";
import HomeAvailable from "../components/home/HomeAvailable";
import HomeServices from "../components/home/HomeServices";
import HomeDo from "../components/home/HomeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <WelcomeSite />
      <HomeAvailable />
      <HomeServices />
      <HomeDo />
    </div>
  );
};

export default Home;
