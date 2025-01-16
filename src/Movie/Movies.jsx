import axios from "../Components/axois/axois";
import React, { useEffect, useState } from "react";

import Movies_card from "./Movies_card";

function Movies() {
  const [movies, setmovies] = useState([]);
  const [category,setcategory] = useState("popular")
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
        <h1 className="text-[1.5rem] uppercase text-white">Popular movie</h1>
        {/* dropdown menu  */}
        <select onClick={(e)=>setcategory(e.target.value)} className="w-[10rem] py-2 px-2 rounded-lg outline-none bg-[#202020]" name="cars" id="cars">
          <option value="popular">popular</option>
          <option value="upcoming">upcoming</option>
          <option value="top_rated">top rated</option>

        </select>
      </div>
      {/* main cards div   */}
      <div>
        <Movies_card movies={movies}/>
      </div>
    </div>
  );
}

export default Movies;
