import React, { useEffect } from "react";
import image from '../Assets/home.gif'
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import ScrollReveal from 'scrollreveal'
import './Home.css'
function Home() {
  useEffect(() => {
 
    ScrollReveal().reveal(".subheading",{delay:200,distance:'50px', reset:true})
    ScrollReveal().reveal(".heading",{delay:200,scale:'.56', reset:true})
  
  },[])
  return (
    <div className="h-[100vh]">
      <div className="flex p-2 justify-end items-center">
      <ul className="list-style-none flex">
        <li className="text-teal-400 font-bold mx-2 px-4 mt-2 py-2  navi">Home</li>
        <li className="text-teal-400 font-bold mx-2 px-4 mt-2 py-2  navi">About Me</li>
        <li className="text-teal-400  font-bold mx-2 px-4 mt-2 py-2 navi">Skills</li>
        <li className="text-teal-400  font-bold mx-2 px-4 mt-2 py-2 navi">Projects</li>
      </ul>
      </div>
      <div className="flex items-center justify-around mt-[10vh]">
        <div>
      <h1 className="heading text-8xl text-teal-400	font-bold	break-normal"><span className="text-4xl ml-1">Hi I am, <br/></span> Prasad <br />Karmalkar</h1>
         <h4 className="subheading text-2xl text-white font-semibold mt-5">Full Stack Developer || Freelancer</h4>      
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Home;
