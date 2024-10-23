import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import banner from "../../assets/images/banner.jpg";
import { TypeAnimation } from "react-type-animation";
import PrimaryButton from "../primarybutton/PrimaryButton";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center h-screen overflow-hidden"
      style={{
        background: `url(${banner}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full px-4 lg:px-0 text-white">
        <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] lg:text-[60px] tracking-wide uppercase font-bold">
              Hello, I'm Antor
            </h1>
            <p className="text-[40px] md:text-[50px] lg:text-[60px] tracking-wide font-bold">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Web Designer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-white"
                style={{
                  fontSize: "clamp(35px, 5vw, 60px)", // Responsive font size between 24px to 60px
                  fontWeight: "bold", // Optional for better appearance
                  textAlign: "center", // Ensures it aligns well across devices
                }}
              />
            </p>
            <p className="w-full md:w-2/4 mt-5">
              It’s Antor, Professional Web Developer. I love to write code, it’s
              my passoin. I am here to help you, I am here to design your web
              page.I can help you to describe yourself in the best way. No
              matter how difficult your web page is, I'll find an easy way and
              complete your work anyway. Stay connect with me……..😊
            </p>
          </div>
          <div className="flex gap-4 items-center mt-10">
            <PrimaryButton btnText="About Me" link="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
