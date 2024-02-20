/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import pageHeadingBg from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const PageHeading = ({ pageName }) => {
  return (
    <div
      className="h-[250px] w-full px-4 lg:px-[100px]"
      style={{
        background: `url(${pageHeadingBg}) no-repeat center center / cover`,
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 bg-black backdrop-blur-sm flex flex-col justify-center items-center text-white">
        <div className="text-center mt-[50px]">
          <h1 className="text-4xl">{pageName}</h1>
          <p className="text-sm mt-1">
            {" "}
            <Link to="/">Home</Link> / {pageName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeading;
