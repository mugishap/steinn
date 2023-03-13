import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import Player from "../Player/Player";
import Sidebar from "../Sidebar/Sidebar";


const CommonComponent: React.FC<{ children: ReactNode }> = ({ children }) => {

  return (
    <div className="relative  h-screen max-w-screen flex flex-row justify-between">
      <div className=' w-full flex items-center justify-between'>
        <Sidebar />
        <div className="flex flex-col bg-[#f0f0f0] w-10/12 h-full relative">
          <div className="w-full h-[92%] flex flex-col items-center">{children}</div>
          <div className=" z-20 absolute w-full bottom-0">
            <Player />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonComponent;
