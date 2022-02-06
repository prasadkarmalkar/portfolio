import React, { useEffect } from "react";
import image from "../Assets/home.gif";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import ScrollReveal from "scrollreveal";
import "./Home.css";
function Home() {
  useEffect(() => {
    ScrollReveal().reveal(".subheading", {
      delay: 200,
      distance: "50px",
      reset: true,
    });
    ScrollReveal().reveal(".heading", {
      delay: 200,
      scale: ".56",
      reset: true,
    });
  }, []);
  return (
    <div className="home h-[100vh]" id="home">
      <div className="flex p-2 justify-end items-center">
        <ul className="list-style-none flex">
          <li className="text-teal-400 text-sm  font-bold mx-2 px-4 mt-2 py-2 navi md:text-base">
            <a href="#home">Home</a>
          </li>
          <li className="text-teal-400 text-sm  font-bold mx-2 px-4 mt-2 py-2 navi md:text-base">
            <a href="#about">About Me</a>
          </li>
          <li className="text-teal-400 text-sm  font-bold mx-2 px-4 mt-2 py-2 navi md:text-base">
            <a href="#skills">Skills</a>
          </li>
          <li className="text-teal-400 text-sm  font-bold mx-2 px-4 mt-2 py-2 navi md:text-base">
            <a href="#project">Projects</a>
          </li>
        </ul>
      </div>
      <div className=" h-full pt-8  sm:block   md:flex md:pt-0  mt-[-5vh] items-center justify-around ">
        <div>
          <h1 className="heading text-6xl text-teal-400	font-bold	break-normal lg:text-8xl">
            <span className="text-3xl  ml-1 lg:text-4xl">
              Hi I am, <br />
            </span>{" "}
            Prasad <br />
            Karmalkar
          </h1>
          <h4 className="subheading text-xl text-white font-semibold mt-5 md:text-2xl">
            Full Stack Developer || Freelancer
          </h4>
        </div>
        <img className="w-80 h-80 text-center" src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
