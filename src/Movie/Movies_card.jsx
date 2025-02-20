import React from "react";
import Play_button from "../assets/Play_button_logo.png";

function Movies_card({ movies }) {
  return (
    <div className="flex flex-wrap items-center justify-center w-[95vw] mx-auto gap-6 ">
      {movies.map((image, id) => {
        return (
          <div
            key={id}
            className="cards bg-[#0f0f0f] shadow-lg shadow-[#2a2a2a] w-[15rem] h-[19rem] hover:scale-105 rounded-md relative duration-300"
          >
            {/* Backdrop */}
            <div className="absolute overflow-hidden duration-300 flex items-center justify-center inset-0 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.6)]">
              <img
                className="w-10 h-10 cursor-pointer "
                src={Play_button}
                alt="Play button"
              />
            </div>
            {/* Main Image */}
            <img
              className="w-full h-[86%] object-contain"
              src={
                image.poster_path
                  ? `https://image.tmdb.org/t/p/original/${image.poster_path}`
                  : Noimage
              }
              alt={image.title || "Movie"}
            />
           
              <h2 className="text-[1rem] pl-4 py-2 text-white font-semibold overflow-auto">
                {(image.name ||
                  image.title ||
                  image.original_name ||
                  image.original_title).slice(0,26)}
              </h2>
              
          
          </div>
        );
      })}
    </div>
  );
}

export default Movies_card;
