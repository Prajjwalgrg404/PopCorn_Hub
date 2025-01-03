import React from "react";
import logo from "../assets/Popcorn_Hub_Logo.png";

function Header() {
  return (
    <header>
      <div className="w-full h-[5rem] flex bg-black justify-between shadow-zinc-900 items-center px-6">
        <div className="w-[13rem] h-[5rem]">
          <img className="w-full h-full" src={logo} alt="" />
        </div>
        <div className="uppercase text-[#686B68] flex cursor-pointer font-semibold ml-5">
          <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
            Home
          </h3>
          <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
            Genre
          </h3>
          <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
            Movies
          </h3>
          <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
            Tv shows
          </h3>
          <h3 className="px-4 py-[1.64rem] border-b-2 border-transparent hover:border-b-[3px] hover:border-white hover:text-white">
            Top IMDB
          </h3>
        </div>
        <div className="flex gap-3">
          <div className="w-[11rem] px-2 border rounded-md flex items-center bg-white">
            <input
              className="outline-none rounded-md w-full py-1 text-[1.1rem]"
              type="text"
              placeholder="Search..."
            />
            <i className="fa-solid fa-magnifying-glass text-[1.3rem]"></i>
          </div>
          <button className="px-3 text-white bg-[#E50914] hover:bg-red-700 rounded-lg">
            <i className="fa-solid fa-user text-white"></i> Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
