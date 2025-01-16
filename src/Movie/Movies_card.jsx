import React from 'react'
import Play_button from "../assets/Play_button_logo.png";

function Movies_card({movies}) {
  return (
    <div className="flex flex-wrap items-center justify-center w-[95vw] h-screen mx-auto gap-5 ">
    {movies.map((image, id) => {
              return (
                <div
                  key={id}
                  className="cards bg-[#0f0f0f] w-[15rem] h-[19rem] rounded-md relative duration-300"
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
                    className="w-full h-[70%] object-cover rounded-md"
                    src={
                      image.backdrop_path || image.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            image.backdrop_path || image.profile_path
                          }`
                        : Noimage
                    }
                    alt={image.title || "Movie"}
                  />
                  <div className="px-2 py-1 ">
                    <h2 className="text-[1.05rem] text-white font-semibold overflow-auto">
                      {image.name ||
                        image.title ||
                        image.original_name ||
                        image.original_title}
                    </h2>
                    <p className="text-sm text-[#737373] mb-2">
                      {image.overview.slice(0, 50) || "No description available"}
                      ...
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
  )
}

export default Movies_card