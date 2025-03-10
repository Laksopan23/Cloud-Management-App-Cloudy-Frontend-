import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div>
          <div className="absolute w-full max-w-[760px] left-1/2 bottom-[5%] transform -translate-x-1/2 bg-zinc-200 border border-gray-300 rounded-xl shadow-lg p-6 text-center flex flex-col items-center">
            <p className="text-lg font-semibold">Data Services</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <p className="flex items-center text-slate-500">
                <CloudUploadIcon className="h-6 text-indigo-600 mr-2" /> App
                Security
              </p>
              <p className="flex items-center text-slate-500">
                <DatabaseIcon className="h-6 text-indigo-600 mr-2" /> Dashboard
                Design
              </p>
              <p className="flex items-center text-slate-500">
                <ServerIcon className="h-6 text-indigo-600 mr-2" /> Cloud Data
              </p>
              <p className="flex items-center text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600 mr-2" /> API
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
