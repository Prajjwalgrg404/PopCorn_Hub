import React from "react";
import logo from "../Head/Popcorn_Hub_Logo.png";

function Header_main() {
  return (
    <>
      <div className="w-[13rem] h-[5rem]">
        <img className="w-full h-full" src={logo} alt="" />
      </div>
      <div className=" text-[#686B68] flex cursor-pointer font-semibold ml-5">
        <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
          Home
        </h3>

        <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
          Movies
        </h3>
        <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
          Tv shows
        </h3>
      </div>
    </>
  );
}

export default Header_main;
