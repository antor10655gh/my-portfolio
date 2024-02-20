/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import avatar from "../../assets/images/about-avatar.png";

const HomeAbout = () => {
  return (
    <div className="min-h-screen w-full px-4 lg:px-[100px] bg-gray-100 flex justify-center items-center">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-5 items-center overflow-hidden">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:col-span-2"
        >
          <img
            src={avatar}
            alt=""
            className="w-full h-full lg:w-[400px] lg:h-[500px] rounded-[5px] object-cover"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="lg:col-span-3"
        >
          <h1 className="text-5xl">
            I am <span className="text-[#22DDAE]">Antor</span>
          </h1>
          <p className="my-5 text-gray-500 text-sm">
            Greetings! I'm Antor, a dedicated full-stack web developer. My
            expertise spans both front-end and back-end technologies, including
            languages like HTML, CSS, JavaScript, React, and Node.js. With a
            problem-solving mindset, I excel in crafting seamless user
            experiences and tackling complex challenges. I am committed to
            staying updated on industry trends and delivering high-quality,
            scalable web solutions. Let's build something incredible together!
          </p>
          <button className="button my-3">About Me</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
