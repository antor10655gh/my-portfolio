// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeAbout from "../components/home/HomeAbout";
import Hero from "../components/home/Hero";
import HomeServices from "../components/home/HomeServices";
import ExperienceSection from "../components/home/ExperienceSection";
import ClientSay from "../components/home/ClientSay";
import HomePortfolio from "../components/home/HomePortfolio";
import LatestBlogs from "../components/home/LatestBlogs";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <ExperienceSection />
      <ClientSay />
      <HomePortfolio />
      <LatestBlogs />
    </div>
  );
};

export default Home;
