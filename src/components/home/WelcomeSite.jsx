/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import welcomeSiteBg from "../../assets/images/background.png";
import { FaBriefcase, FaDollarSign, FaShieldAlt } from "react-icons/fa";

const WelcomeSite = () => {
  return (
    <div
      className="min-h-screen w-full px-4 lg:px-[100px] flex justify-center items-center pt-12 lg:pt-0"
      style={{
        background: `url(${welcomeSiteBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <header
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-3xl lg:text-5xl">Welcome To My Site</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-[60px] h-[2px] bg-[#22ddae]"></div>
            <div className="w-4 h-4 bg-[#22ddae] rounded-full"></div>
            <div className="w-[60px] h-[2px] bg-[#22ddae]"></div>
          </div>
          <p className="my-3 lg:w-3/4 text-gray-500 text-sm">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            Nulla mollis dapibus nunc
          </p>
        </header>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 my-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaBriefcase className="text-[#22ddae]" size={30} />
            <h1 className="text-xl font-bold">Want An Expert</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaShieldAlt className="text-[#22ddae]" size={30} />
            <h1 className="text-xl font-bold">Unlimited Revisions</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="card"
          >
            <FaDollarSign className="text-[#22ddae]" size={30} />
            <h1 className="text-xl font-bold">Let's Discuss</h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet sed consectetur adipisicing elit.
              doloret quas saepe autem, dolor set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSite;
