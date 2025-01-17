import axios from "../Components/axois/axois";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
const Tv_cards = lazy(() => import("./Tv_cards"));

function Tv_shows() {
  const [tvshows, settvshows] = useState([]);
  const [tvcategory, settvcategory] = useState("popular");
  console.log(tvshows);

  const AlltvShows = async () => {
    try {
      const { data } = await axios.get(`/tv/${tvcategory}`);
      settvshows(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    AlltvShows();
  }, [tvcategory]);

  return (
    <div className=" w-full h-screen text-white py-[5rem] overflow-y-scroll scroll-smooth">
      <div className="flex items-center justify-between text-white px-14 py-6">
        <h1 className="text-[1.5rem] uppercase text-white">{tvcategory}</h1>
        {/* dropdown menu  */}
        <select
          onClick={(e) => settvcategory(e.target.value)}
          className="w-[10rem] py-2 px-2 rounded-lg outline-none bg-[#202020] "
          name="cars"
          id="cars"
        >
          <option value="popular">Popular</option>
          <option value="airing_today">Airing Today</option>
          <option value="top_rated">Top Rated</option>
        </select>
      </div>
      {/* main cards div   */}
      <div>
        <Suspense
          fallback={
            <div className="fixed top-[50%] left-[50%] translate-[-50%,-50%]">
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
          <Tv_cards tvshows={tvshows} />
        </Suspense>
      </div>
    </div>
  );
}

export default Tv_shows;
