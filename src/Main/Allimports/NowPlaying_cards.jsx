import React from "react";
import Noimage from "../../assets/images/noimage.png";
import Play_button from "../../assets/Play_button_logo.png";
import Slider from "react-slick";

function NowPlaying_cards({ images }) {

    // custom buttons
  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute top-[8.5rem] left-[-3.5rem] transform -translate-y-1/2 bg-black hover:bg-[#5F6368] text-white w-12 h-full flex items-center justify-center z-10"
      >
        <i className="fa-solid fa-angles-left text-3xl "></i>
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="absolute top-[8.5rem] right-[-3.5rem] transform -translate-y-1/2 bg-black  hover:bg-[#5F6368] text-white w-12 h-full flex items-center justify-center  z-10"
      >
        <i className="fa-solid fa-angles-right text-3xl"></i>
      </button>
    );
  };

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <Slider {...settings}>
      {images.map((image, id) => {
        return (
          <div
            key={id}
            className="cards bg-[#0f0f0f] w-[15rem] h-[19rem] rounded-md relative hover:scale-105  duration-300"
          >
            {/* Backdrop */}
            <div className="absolute duration-300  flex items-center justify-center inset-0 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.6)]">
              <img
                className="w-10 h-10 cursor-pointer "
                src={Play_button}
                alt="Play button"
              />
            </div>
            {/* Main Image */}
            <img
              className="w-full h-[65%] object-contain object-center rounded-md"
              src={
                image.backdrop_path || image.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      image.backdrop_path || image.profile_path
                    }`
                  : Noimage
              }
              alt={image.title || "Movie"}
            />
            <div className="px-2 py-1">
              <h2 className="text-lg text-white font-semibold overflow-auto">
                {(image.name ||
                  image.title ||
                  image.original_name ||
                  image.original_title).slice(0,27)}
              </h2>
              <p className="text-sm text-[#737373] py-2">
                {image.overview.slice(0, 60) || "No description available"}
                ...
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

export default NowPlaying_cards;
