import React from "react";

export default function Navbar() {
  return (
    <div className="navbar w-full flex justify-between h-[3.5rem] items-center bg-blue-500">
      <div className=" w-full md:w-1/2">
        <ul>
          <li className=" text-xl font-bold px-[20px]">
            <span className=" text-white font-bold text-2xl mx-1">ChatBot</span>
            Website
          </li>
        </ul>
      </div>

      <div className="md:w-1/2 hidden md:block">
        <div className=" text-end px-[20px]">
          <ul>
            <li className=" font-mono font-bold">
              <a href="#" className="name">
                Basant kumar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
