import React, { useState } from "react";
import pikupyan from "../images/pikupyan.png";
import vmarc from "../images/vmarc.png";
import temple from "../images/temple.png";
import techno from "../images/techno-web.png";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div
      id="portfolio-container"
      className="container relative h-[90vh] w-[90vw] lg:flex justify-center lg:px-12 shadow-md shadow-[#8ec5fc] rounded-md fade-in border-b-2 border-[#e0c3fc]"
    >
      {/* circle */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <h2 className="mb-8 font-semibold text-center text-2xl p-1">Projects</h2>

      {/* boxes */}
      <div
        className="project-boxes absolute w-full h-[80%] top-[10%] flex justify-around items-center gap-4 overflow-x-auto overflow-y-hidden flex-nowrap scrollbar-thin scrollbar-thumb-[#8ec5fc] scrollbar-track-[#e0c3fc] no-scrollbar px-4"
        style={{
          scrollBehavior: "smooth",
        }}
      >
        <div className="box min-w-full lg:min-w-[40%] h-[75%] bg-gradient-to-br from-[#8ec5fc] to-[#b321a4] flex flex-col justify-center items-center opacity-50">
          <img src={pikupyan} alt="error" className="h-[70%] mb-8" />
          <button
            className="home-button w-[90%] text-center font-semibold"
            style={{ color: "white" }}
          >
            <a href="https://pickupyan.netlify.app/">View Project</a>
          </button>
        </div>

        <div className="box min-w-full lg:min-w-[40%] h-[75%] bg-gradient-to-br from-[#8ec5fc] to-[#b321a4] flex flex-col justify-center items-center opacity-50">
          <img src={vmarc} alt="error" className="h-[70%] mb-8" />
          <button
            className="home-button w-[90%] text-center font-semibold"
            style={{ color: "white" }}
          >
            <a href="https://v-marc.netlify.app/">View Project</a>
          </button>
        </div>
        <div className="box min-w-full lg:min-w-[40%] h-[75%] bg-gradient-to-br from-[#8ec5fc] to-[#b321a4] flex flex-col justify-center items-center opacity-50">
          <img src={temple} alt="error" className="h-[70%] mb-8" />
          <button
            className="home-button w-[90%] text-center font-semibold"
            style={{ color: "white" }}
          >
            <a href="https://mahankal.netlify.app/">View Project</a>
          </button>
        </div>
        <div className="box min-w-full lg:min-w-[40%] h-[75%] bg-gradient-to-br from-[#8ec5fc] to-[#b321a4] flex flex-col justify-center items-center opacity-50">
          <img src={techno} alt="error" className="h-[70%] mb-8" />
          <button
            className="home-button w-[90%] text-center font-semibold"
            style={{ color: "white" }}
          >
            <a href="https://thunderous-shortbread-9a0cb7.netlify.app/">
              View Project
            </a>
          </button>
        </div>
      </div>

      <div className="icon absolute z-20 top-0 right-0 text-4xl p-8">
        <Link to="/Menu">
          <RiMenu2Fill
            className="bg-white rounded-full shadow-md hover:shadow-red-950 home-button"
            style={{ padding: "6px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
