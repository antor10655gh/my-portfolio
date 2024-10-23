/* eslint-disable no-unused-vars */
import React from "react";
import homeServicetBg from "../../assets/images/background.png";
import { ImEmbed2 } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { TbSettingsCode } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaInfo, FaMobileAlt } from "react-icons/fa";
import { LuBarChart3 } from "react-icons/lu";

const HomeServices = () => {
  return (
    <div
      className="min-h-screen w-full px-4 lg:px-[100px] pb-12 lg:pb-0"
      style={{
        background: `url(${homeServicetBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center overflow-hidden">
        <header
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-center text-center mt-8 lg:mt-12"
        >
          <h1 className="text-3xl lg:text-5xl">My Services</h1>
          <div className="flex justify-center items-center gap-2 mt-2">
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
            <div className="w-4 h-4 bg-[#00637e] rounded-full"></div>
            <div className="w-[60px] h-[2px] bg-[#00637e]"></div>
          </div>
          <p className="my-3 lg:w-3/4 text-gray-500 text-sm">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis
            sodales quis. Integer sit amet mattis quam.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-5 lg:mt-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <ImEmbed2 className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">Website Design</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <TbSettingsCode className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">Website Development</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <FaMobileAlt className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">App Development</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <IoLockClosed className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">Cyber Security</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <LuBarChart3 className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">Digital Marketing</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="hover:shadow-inner-md hover:bg-gray-100 p-5 transition-all duration-300 rounded-md flex items-start gap-4"
          >
            <div>
              <div className="bg-[#00637e] p-3 rounded-md">
                <FaInfo className="text-white inline" size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xxl font-bold">Other Category</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do
                eiusmod tempor incididunt
              </p>
              <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 readmore-btn">
                  Read more
                  <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
