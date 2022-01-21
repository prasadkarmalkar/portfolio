import React, { useEffect } from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import java from "../Assets/java.png";
import mongo from "../Assets/mongo.png";
import mysql from "../Assets/mysql.png";
import react from "../Assets/react.png";
import node from "../Assets/node.png";
import Zoom from "react-reveal/Zoom";
import ScrollReveal from "scrollreveal";

import "./Skills.css";
function Skills() {
  useEffect(() => {
    ScrollReveal().reveal(".skill", { delay: 200 ,    reset: true, easing: 'ease-in-out' ,scale: 0.65 });
  }, []);
  return (
    <div className="h-[100vh]">
      <h1 className="text-center pt-14 text-4xl font-bold text-teal-400 ">
        My Skills
      </h1>

      <div className="flex justify-around mt-16">
        <div className="skill">
          <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={html} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2 ">
                HTML
              </h1>
            </div>
            <div className="skill_back">
              <h1 className="text-2xl font-bold m-auto pt-16 text-white">
                EXPERIENCE 1 YEAR
              </h1>
            </div>
          </div>
        </div>
        <div className="skill">
            <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={css} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                CSS
              </h1>
            </div>
            <div className="skill_back">
                <h1 className="text-2xl font-bold m-auto pt-16 text-white">EXPERIENCE 1 YEAR</h1>
            </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={js} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                JavaScript
              </h1>
            </div>
            <div className="skill_back">
                <h1 className="text-2xl font-bold m-auto pt-16 text-white">EXPERIENCE 1 YEAR</h1>
            </div>
            </div>
          </div>
          <div className="skill">
            <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={react} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                React JS
              </h1>
            </div>
            <div className="skill_back">
                <h1 className="text-2xl font-bold m-auto pt-16 text-white">EXPERIENCE 1 YEAR</h1>
            </div>
            </div>
          </div>
      </div>

      <div className="flex justify-around mt-14">
        <div className="skill">
          <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={node} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                Node Js
              </h1>
            </div>
            <div className="skill_back">
              <h1 className="text-2xl font-bold m-auto pt-16 text-white">
                EXPERIENCE 1 YEAR
              </h1>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={java} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                Java
              </h1>
            </div>
            <div className="skill_back">
              <h1 className="text-2xl font-bold m-auto pt-16 text-white">
                EXPERIENCE 1 YEAR
              </h1>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={mongo} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                Mongo DB
              </h1>
            </div>
            <div className="skill_back">
              <h1 className="text-2xl font-bold m-auto pt-16 text-white">
                EXPERIENCE 1 YEAR
              </h1>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skill_inner">
            <div className="skill_front">
              <img className="h-32 text-center m-auto" src={mysql} alt="" />
              <h1 className="text-center text-white text-xl font-bold mt-2">
                MySQL
              </h1>
            </div>
            <div className="skill_back">
              <h1 className="text-2xl font-bold m-auto pt-16 text-white">
                EXPERIENCE 1 YEAR
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
