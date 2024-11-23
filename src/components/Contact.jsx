import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div
      id="contact-container"
      className="container relative h-[90vh] w-[90vw] lg:flex justify-center items-center lg:px-12 shadow-md shadow-[#8ec5fc] rounded-md fade-in border-b-2 border-[#e0c3fc]"
    >
      <form
        className="bg-transparent p-8 rounded-md w-full h-full flex flex-col items-center justify-center lg:block lg:w-1/2 space-y-6 "
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Contact Us
        </h2>

        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-lg bg-transparent outline-none border-none"
            placeholder="Your name"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-lg bg-transparent outline-none border-none"
            placeholder="Your email"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-lg bg-transparent outline-none border-none"
            placeholder="Your phone number"
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-lg bg-transparent outline-none border-none"
            placeholder="Subject"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-[#8ec5fc] to-[#e0c3fc] text-white font-semibold rounded-md shadow-md hover:opacity-90 transition-opacity about-button"
        >
          Submit
        </button>
      </form>

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

export default Contact;
