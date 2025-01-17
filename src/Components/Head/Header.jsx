import React, { lazy,Suspense,useEffect } from "react";
import image from "../../assets//images/noimage.png";
import axios from "../axois/axois";
import { useState } from "react";
import Header_main from "./Header_main";
import { Bars } from "react-loader-spinner";
const Search_section = lazy(() => import("./Search_section"));

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
      <div className="w-full h-[5rem] flex fixed z-[5] bg-black justify-between shadow-md shadow-gray-950 items-center px-6">
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
        <Suspense
          fallback={
            <div className="flex items-center justify-center w-full h-screen">
              <Bars
                height="80"
                width="80"
                color="#737373"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          }
        >
          <Search_section movieList={movieList} />
        </Suspense>
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
