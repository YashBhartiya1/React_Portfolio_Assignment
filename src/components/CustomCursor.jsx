// CustomCursor.js
import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.querySelector(".custom-cursor");
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    };

    const handleMouseEnter = (e) => {
      if (e.target.classList.contains("hovered")) {
        setCursorType("hovered");
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.classList.contains("hovered")) {
        setCursorType("default");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".hoverable").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className={`custom-cursor ${cursorType}`}></div>;
};

export default CustomCursor;
