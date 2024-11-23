import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Menu = () => {
  return (
    <div className="relative menu-container w-[90%] h-[90%] flex flex-col gap-3 justify-center items-center text-3xl fade-in text-center shadow-md shadow-[#8ec5fc] rounded-md fade-in border-b-2 border-[#e0c3fc] ">
      <Link to="/" className="w-[12vw] home-button">
        Home
      </Link>
      <Link to="/about" className="w-[12vw] home-button">
        About
      </Link>
      <Link to="/portfolio" className="w-[12vw] home-button">
        Portfolio
      </Link>
      <Link to="/contact" className="w-[12vw] home-button">
        Contact
      </Link>
      <div>
        <Link to="/">
          <FiX
            className="absolute text-4xl z-20 top-0 right-0 m-8 bg-white rounded-full shadow-md hover:shadow-red-950 home-button"
            style={{ padding: "6px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
