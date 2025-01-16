import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "../../Components/axois/axois";

const MovieSlider = () => {
  const [wallpaper, setWallpaper] = useState([]);
  // console.log(wallpaper);

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get("/trending/all/week");
      setWallpaper(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    GetWallpaper();
  }, []);

  const sliderSettings = {
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3500, // Autoplay speed in ms
    pauseOnHover: false,
  };

  return (
    <div className="slider-container py-[5rem] w-full h-screen overflow-hidden text-white">
      {wallpaper.length > 0 ? (
        <Slider {...sliderSettings}>
          {wallpaper.map((image, index) => (
            <div key={index}>
              <div
                style={{
                  background: `url(https://image.tmdb.org/t/p/original/${
                    image.backdrop_path || image.profile_path
                  }) no-repeat center center / cover`,
                }}
                className="w-[79vw] h-screen ml-[19.2rem]"
              ></div>

              {/* div for details */}

              <div className="w-[28vw] h-screen flex flex-col items-center gap-3 justify-center bg-black fixed ml-3 top-0 shadow-[60px_-35px_50px_rgba(0,0,0,1)] px-4 ">
                {/* Name of the movie or tv shows */}
                <h1 className="text-[2rem] font-semibold mb-5">
                  {image.name ||
                    image.title ||
                    image.original_name ||
                    image.original_title}
                </h1>
                {/* description and all things related to the movie or tv shows */}
                <div className="flex items-center gap-5 mb-8">
                  <h5 className="text-sm text-[#737373] uppercase">
                    <i className="fa-solid fa-play"></i> {image.media_type}
                  </h5>
                  <span className="text-white">•</span>

                  <h5 className="text-sm text-[#737373]">
                    {image.origin_country || "N/A"}
                  </h5>
                  <span className="text-white">•</span>

                  <h5 className="text-sm text-[#737373]">
                    <i className="fa-solid fa-calendar"></i>{" "}
                    {image.first_air_date || image.release_date || "N/A"}
                  </h5>
                </div>
                <h4 className="text-sm text-[#737373]">
                  Rating: <i className="fa-solid fa-star text-xs"></i>{" "}
                  {image.vote_average}
                </h4>
                <h4 className="text-sm text-[#737373] mb-8">
                  {image.overview || "No description available"}
                  ...
                </h4>

                {/* Watch Now button */}

                <div className="px-10 py-4 mb-[6rem] rounded-3xl bg-[#252629] hover:bg-white hover:text-black">
                  <button>
                    <i className="fa-solid fa-play text-center text-xs mr-1"></i>{" "}
                    WATCH NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading...</p>
        // yaha pur bhi loader lagana hai
      )}
    </div>
  );
};

export default MovieSlider;
