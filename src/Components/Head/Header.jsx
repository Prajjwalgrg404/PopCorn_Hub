import React, { useEffect } from "react";

import image from "../../assets//images/noimage.png";
import axios from "../axois/axois";
import { useState } from "react";
import Header_main from "./Header_main";

function Header() {
  const [inputval, setinputval] = useState("");
  const [movieList, setmovieList] = useState([]);
  const [loading, setloading] = useState(false);

  const input_Toggle = () => {
    setloading(!loading);
  };
  // console.log(loading)

  const Getsearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${inputval}`);
      // console.log(data);
      setmovieList(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    Getsearches();
  }, [inputval]);

  return (
    <header>
      <div className="w-full h-[5rem] flex fixed z-[5] bg-black justify-between shadow-lg shadow-gray-950 items-center px-6">
        <Header_main />
        <div className="flex gap-3">
          <div className="w-[11rem] px-2 border rounded-md flex items-center bg-white">
            <input
              onClick={input_Toggle}
              onChange={(e) => setinputval(e.target.value)}
              value={inputval}
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

      {/* search section */}

      <div
        className={` ${
          inputval.length === 0 ? "w-0" : "w-[30rem]"
        } h-[30rem] overflow-y-scroll overflow-x-hidden scroll-smooth bg-[#1F1F1F] fixed ${
          loading === true ? "top-[5rem]" : "top-[-30rem]"
        } right-10 z-10`}
      >
        <div className="w-full h-full">
          {/* if no movie is found then loader will appear and we have to Implement loader here!!! */}

          {movieList.map((items, id) => {
            return (
              <div
                key={id}
                className="w-full h-[7rem] border border-[#313131] shadow-lg shadow-[#313131] flex items-center gap-10 px-5 hover:scale-95 duration-150 py-4"
              >
                <img
                  className="w-[35%] h-full object-cover rounded-lg"
                  src={
                    items.backdrop_path || items.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          items.backdrop_path || items.profile_path
                        }`
                      : image
                  }
                />

                <div>
                  {/* problem in movie name slice function */}

                  <h1 className="text-white text-lg">
                    {items.name ||
                      items.title ||
                      items.original_name ||
                      items.original_title}
                  </h1>
                  <h4 className="text-xs text-[#737373]">
                    {items.overview?.slice(0, 40) || "No description available"}
                    ...
                  </h4>
                  <div className="flex items-center gap-3 mt-2">
                    {/* if movie release date and origin country is not available then it will show N/A */}
                    <h5 className="text-xs text-[#737373]">
                      {items.first_air_date || items.release_date || "N/A"}
                    </h5>
                    <span className="text-white">•</span>
                    <h5 className="text-xs text-[#737373] uppercase">
                      {items.media_type}
                    </h5>
                    <span className="text-white">•</span>

                    <h5 className="text-xs text-[#737373]">
                      {items.origin_country || "N/A"}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Backdrop Section */}

      <div
        onClick={input_Toggle}
        className={`w-full h-screen fixed z-[4] top-0 left-0 ${
          loading === true ? "bg-[rgba(0,0,0,.4)]" : "hidden"
        }`}
      ></div>
    </header>
  );
}

export default Header;
