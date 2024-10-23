import React from "react";
import "./PrimaryButton.css";
import { useNavigate } from "react-router-dom";

const PrimaryButton = ({ btnText, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${link}`);
  };

  return (
    <button className="primary-btn" onClick={handleClick}>
      <span>{btnText}</span>
    </button>
  );
};

export default PrimaryButton;
