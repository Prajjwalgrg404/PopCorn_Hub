import React from "react";
import image from "../../assets//images/noimage.png";
import { Bars } from "react-loader-spinner";
function Search_section({ movieList }) {
  return (
    <div className="w-full h-full">
      {/* if no movie is found then loader will appear and we have to Implement loader here!!! */}

      {movieList.length > 0 ? (
        movieList.map((items, id) => {
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
        })
      ) : (
        <div className="flex items-center justify-center h-[30rem]">
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
      )}
    </div>
  );
}

export default Search_section;
