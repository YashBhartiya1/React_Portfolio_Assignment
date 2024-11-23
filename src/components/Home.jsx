import React, { useState } from "react";
import "./Home.css";
import homeImg from "../images/cloud2.png";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const [move, setMove] = useState(false);
  const [button, setButton] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  let timeout;

  const cursorMove = () => {
    setMove(true);

    // Clear the previous timeout to avoid multiple calls
    clearTimeout(timeout);

    // Set a timeout to reset the shadow effect after 300ms
    timeout = setTimeout(() => {
      setMove(false); // Reset shadow effect
    }, 300);
  };

  const buttonOver = () => {
    setButton(true);
    setShowAboutPage(true);
  };

  const buttonOut = () => {
    setButton(false);
    setShowAboutPage(false);
  };

  return (
    <div
      id="home-container"
      className={`container relative h-[90vh] w-[90vw] lg:flex items-center justify-between rounded-md fade-in border-b-2 border-[#e0c3fc] duration-300  ${
        move ? "shadow-2xl shadow-[#8ec5fc]" : ""
      } ${
        button
          ? "skew-x-1 skew-y-1 duration-300 shadow-2xl shadow-[#8ec5fc]"
          : ""
      }`}
      onMouseMove={cursorMove} // Fixed typo here
    >
      {/* circle */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div
        className={`home-left h-[50%] lg:h-full w-[100%] lg:w-[50%] flex flex-col justify-center items-center text-left`}
      >
        <p className="text-[1.5rem] md:text-[2rem]">Hi there, I'm</p>
        <h2 className="text-[1.7rem] md:text-[2.2rem] font-semibold">
          Yash Bhartiya
        </h2>
        <p className="text-[1.3rem] md:text-[1.2rem] text-gray-700 text-center">Building User-Centric Front-End Solutions</p>

        <div className="flex gap-4 md:gap-6 mt-4">
          <button
            className="home-button capitalize"
            onMouseOver={buttonOver}
            onMouseOut={buttonOut}
          >
            <Link to="/about">more about me</Link>
          </button>
          <button
            className="home-button capitalize"
            onMouseOver={buttonOver}
            onMouseOut={buttonOut}
          >
            <Link to="/portfolio">portfolio</Link>
          </button>
        </div>
      </div>

      <div className="home-right h-[50%] w-[100%] lg:h-full lg:w-[50%] flex items-center justify-center ">
        <div className="relative w-60 h-60 md:w-96 md:h-96 flex items-center justify-center">
          <img
            src={homeImg}
            alt="profile"
            className="w-full h-full rounded-full object-cover border-4 shadow-md shadow-[#8ec5fc]"
          />
        </div>
      </div>

      {/* github link */}
      <div className="absolute top-0 p-4">
        <a href="https://github.com/YashBhartiya1">
          <FaGithub className="text-3xl" />
        </a>
      </div>

      <div className="icon absolute z-20 top-0 right-0 text-4xl p-8">
        <Link to="Menu">
          <RiMenu2Fill
            className="home-button rounded-full"
            style={{ padding: "6px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
