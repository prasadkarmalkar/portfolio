import React from "react";
import './Project.css'
import readeasy from '../Assets/readeasy.PNG'
import tictactoe from '../Assets/tictactoe.PNG'
import amazonclone from '../Assets/amazonclone.PNG'
import trademanager from '../Assets/trademanager.PNG'
import Zoom from 'react-reveal/Zoom';
function Projects() {
  return (
    <div className="">
      <h1 className="text-center pt-14 text-4xl font-bold text-teal-400 ">
        Projects
      </h1>
      <div className="flex justify-around mt-10 flex-wrap">
        <div className="card cursor-pointer" onClick={()=>window.location='http://reeadeasy.herokuapp.com'}>
          <img src={readeasy} />
          <div className="info">
            <h1 className="font-bold text-lg">Readeasy: Online Bookselling Web Application</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">HTML</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">CSS</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Bootstrap</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Java</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">MY SQL</li>
            </ul>
          </div>
        </div>
        <div className="card cursor-pointer" onClick={()=>window.location='https://tictactoebyprasad.web.app/'}>
          <img src={tictactoe} />
          <div className="info">
            <h1 className="font-bold text-lg">TIC TAC TOE: Multiplayer</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">HTML</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">CSS</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">React Js</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Node Js</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Socket IO</li>
            </ul>
          </div>
        </div>
        <div className="card cursor-pointer" onClick={()=>window.location='https://clone-87fb5.web.app/'}>
          <img src={amazonclone} />
          <div className="info">
                <h1 className="font-bold text-lg">Amazon Clone</h1>
                <ul className="flex mt-2 text-black font-bold">
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">HTML</li>
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">CSS</li>
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">React Js</li>
                    <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Firebase</li>
                </ul>
          </div>
        </div>
        <div className="card cursor-pointer" onClick={()=>window.location='https://trademanager202020.web.app/'}>
          <img src={trademanager} />
          <div className="info">
            <h1 className="font-bold text-lg">Trade Manager</h1>
            <ul className="flex mt-2 text-black font-bold">
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">HTML</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">CSS</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">React Js</li>
                <li className="bg-teal-500 rounded-lg text-sm px-2 py-1 mx-1">Material UI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
