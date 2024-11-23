import React, { useState } from "react";
import "./About.css";
import aboutImg from "../images/about.png";
import alphanzo from "../images/alphanzo-img.png";
import microsoft from "../images/micro.png";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const About = () => {
  const [activeSkill, setActiveSkill] = useState("tech");
  const [activeQualification, setActiveQualification] = useState("education");

  return (
    <div
      id="about-container"
      className="container relative h-[90vh] w-[90vw] lg:flex justify-center items-center lg:px-12 shadow-md shadow-[#8ec5fc] rounded-md fade-in border-b-2 border-[#e0c3fc]"
    >
      {/* circle */}
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>

      <div className="about-left lg:absolute lg:left-0 w-full lg:w-[40%] h-[40%] lg:h-full p-4 lg:p-8 rounded-lg shadow-lg">
        <img src={aboutImg} alt="error" className="h-[100%] w-full" />
      </div>

      <div className="about-right lg:absolute lg:right-0 w-full lg:w-[60%] max-h-full p-4 lg:p-8 overflow-y-auto scroll-smooth no-scrollbar flex flex-col items-center lg:items-start">
        <h2 className="text-center text-3xl font-semibold">About Me</h2>
        <p className="about-text mt-4 text-center lg:text-left text-sm md:text-base">
          I'm a web alchemist with a knack for turning ideas into interactive,
          user-centric digital experiences. With experience in front-end
          technologies and a strong foundation in modern frameworks like React,
          I specialize in crafting engaging and responsive websites.
        </p>
        {/* skills */}
        <div className="skills mt-4">
          <h4 className="text-xl font-semibold mb-4 text-center lg:text-left mt-5">
            Skills
          </h4>
          <div className="skill flex gap-8">
            {/* Skill Section Headers */}
            <h5
              className={`mb-2 cursor-pointer${
                activeSkill === "tech" ? "font-bold text-red-950" : ""
              }`}
              onClick={() => setActiveSkill("tech")}
            >
              Front End Technology
            </h5>
            <h5
              className={`mb-2 cursor-pointer ${
                activeSkill === "tool" ? "font-bold text-red-950" : ""
              }`}
              onClick={() => setActiveSkill("tool")}
            >
              Software & Tools
            </h5>
            <h5
              className={`mb-2 cursor-pointer ${
                activeSkill === "script" ? "font-bold text-red-950" : ""
              }`}
              onClick={() => setActiveSkill("script")}
            >
              Scripting Languages & Frameworks
            </h5>
          </div>

          {/* Skill Content */}
          <div className="mt-4">
            {activeSkill === "tech" && (
              <div className="flex gap-4">
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  HTML 5
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  CSS 3
                </p>
              </div>
            )}
            {activeSkill === "tool" && (
              <div className="flex gap-4">
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  Visual Studio
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  GitHub
                </p>
              </div>
            )}
            {activeSkill === "script" && (
              <div className="flex flex-wrap gap-4">
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  JavaScript
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  ES6
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  Bootstrap
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  Tailwind CSS
                </p>
                <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw]">
                  React JS
                </p>
              </div>
            )}
          </div>
        </div>

        {/* education */}
        <div className="education-experience mt-4 ">
          <h4 className="text-xl font-semibold mb-4 text-center lg:text-left mt-5">
            Education
          </h4>
          <div className="education-header flex gap-8 capitalize mb-4">
            <h5
              className={`cursor-pointer ${
                activeQualification == "education"
                  ? "font-bold text-red-950"
                  : ""
              }`}
              onClick={() => setActiveQualification("education")}
            >
              education
            </h5>
            <h5
              className={`cursor-pointer ${
                activeQualification == "experience"
                  ? "font-bold text-red-950"
                  : ""
              }`}
              onClick={() => setActiveQualification("experience")}
            >
              experience
            </h5>
            <h5
              className={`cursor-pointer ${
                activeQualification == "certificate"
                  ? "font-bold text-red-950"
                  : ""
              }`}
              onClick={() => setActiveQualification("certificate")}
            >
              certificate
            </h5>
          </div>

          <div className="content flex relative">
            {activeQualification == "education" && (
              <div className="education-content flex flex-col gap-6">
                <div className="line absolute bg-red-950 h-full w-[2px] flex flex-col justify-around items-center">
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                </div>

                <div className="ms-4">
                  <p className="">2016-2019</p>
                  <h4>
                    Bachelor of Commerce - <span>Davv University</span>
                  </h4>
                </div>
                <div className="ms-4">
                  <p>2014-2016</p>
                  <h4>
                    Higher Secondary School -
                    <span>Shree Vidhya Sagar girls higer secondary school</span>
                  </h4>
                </div>
                <div className="ms-4">
                  <p>2012-2014</p>
                  <h4>
                    High School - <span>Adarsh Shishu Mandir high School</span>
                  </h4>
                </div>
              </div>
            )}

            {activeQualification == "experience" && (
              <div className="experience-content">
                <div className="line absolute bg-red-950 h-full w-[2px] flex flex-col justify-around items-center">
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                </div>
                <div className="ms-4">
                  <p>Apr 2023 - Dec 2023</p>
                  <h4>
                    Software Developer Intern - <span>Alphanzo Technology</span>
                  </h4>
                </div>
              </div>
            )}

            {activeQualification == "certificate" && (
              <div className="certificate-content">
                <div className="line absolute bg-red-950 h-full w-[2px] flex flex-col justify-around items-center">
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                  <div className="about-circle w-[0.8vw] h-[0.8vw] rounded-full bg-red-600"></div>
                </div>

                {/* certificates */}
                <div className="lg:flex gap-4 ms-4">
                  <div className="flex flex-col gap-2">
                    <img
                      src={alphanzo}
                      alt="error"
                      className=" w-full lg:w-[20vw] rounded-md"
                    />
                    <button className="home-button">
                      <a
                        href="/certificates/alphanzo-certificate.pdf"
                        target="_blank"
                      >
                        View Certificate
                      </a>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 lg:mt-0">
                    <img
                      src={microsoft}
                      alt="error"
                      className=" w-full lg:w-[20vw] rounded-md"
                    />
                    <button className="home-button">
                      <a
                        href="/certificates/workshop-certificate.pdf"
                        target="_blank"
                      >
                        View Certificate
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* cv and contact */}
        <div className="flex gap-4 mt-12">
          <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw] cursor-pointer">
            <a href="CV.pdf" target="_blank">
              Download CV
            </a>
          </p>
          <p className="about-button w-[35vw] md:w-[20vw] lg:w-[10vw] cursor-pointer">
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>

      <div className="icon absolute z-20 top-0 right-0 text-4xl p-8">
        <Link to="/Menu">
          <RiMenu2Fill
            className="bg-white rounded-full home-button"
            style={{ padding: "6px" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default About;
