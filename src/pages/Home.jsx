// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import WelcomeSite from "../components/home/WelcomeSite";
import HomeAvailable from "../components/home/HomeAvailable";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <WelcomeSite />
      <HomeAvailable />
    </div>
  );
};

export default Home;
