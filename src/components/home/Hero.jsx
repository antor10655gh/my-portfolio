/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import avatar from "../../assets/images/avatar.jpg";
import banner from "../../assets/images/banner.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen overflow-hidden"
      style={{
        background: `url(${banner}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 bg-black backdrop-blur-sm flex flex-col justify-center items-center text-white">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="rounded-full mt-12 w-[270px] h-[270px] lg:w-[140px] lg:h-[140px] bg-white flex justify-center items-center"
        >
          <img
            src={avatar}
            alt="avatar.jpg"
            className="rounded-full w-60 h-60 lg:w-32 lg:h-32"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="mt-5 text-center"
        >
          <h1 className="text-[60px] tracking-wide uppercase">
            Hello, I'm Antor
          </h1>
          <p className="text-[20px] tracking-wide mt-2">
            I am a{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Web Developer",
                1000,
                "Web Designer",
                1000,
                "Full Stack Developer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "20px", color: "#22DDAE" }}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="flex gap-4 items-center mt-10">
          <button
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="button"
          >
            Get More
          </button>
          <button
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="button"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
