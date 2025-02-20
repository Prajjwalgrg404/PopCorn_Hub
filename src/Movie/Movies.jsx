import axios from "../Components/axois/axois";
import React, { useEffect, useState } from "react";

import { lazy, Suspense } from "react";
import { Bars } from "react-loader-spinner";
const Movies_card = lazy(() => import("./Movies_card"));

function Movies() {
  const [movies, setmovies] = useState([]);
  const [category, setcategory] = useState("popular");
  // console.log(category)

  const Popularmovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}`);
      setmovies(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Popularmovies();
  }, [category]);

  return (
    <div className=" w-full h-screen text-white py-[5rem] overflow-y-scroll scroll-smooth">
      <div className="flex items-center justify-between text-white px-14 py-6">
        <h1 className="text-[1.5rem] uppercase text-white">{category}</h1>
        {/* dropdown menu  */}

        <select
          onClick={(e) => setcategory(e.target.value)}
          className="w-[10rem] py-2 px-2 rounded-lg outline-none bg-[#202020]"
          name="cars"
          id="cars"
        >
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
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
          <Movies_card movies={movies} />
        </Suspense>
      </div>
    </div>
  );
}

export default Movies;
