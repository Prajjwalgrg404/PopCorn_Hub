import axios from "../Components/axois/axois";
import React, { useEffect, useState } from "react";
import Noimage from "../assets/images/noimage.png";
import Play_button from "../assets/Play_button_logo.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NowPlaying_section() {
  const [images, setimages] = useState([]);
  console.log(images);
  const Nowplaying = async () => {
    try {
      const { data } = await axios.get(`movie/now_playing`);
      setimages(data.results);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Nowplaying();
  }, []);

  // custom button

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
    slidesToShow: 6,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  

  return (
    <div className="slider-container w-full h-[65vh] relative px-14 ">  
      <h1 className="text-2xl py-6 px-5 text-white">Now Playing</h1>
        <Slider {...settings}>
          {images.map((image, id) => {
            return (
              <div
                key={id}
                className="cards min-w-[15%] h-[17rem] rounded-md relative "
              >
                {/* Backdrop */}
                <div className="absolute duration-300 flex items-center justify-center inset-0 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.6)]">
                  <img
                    className="w-10 h-10"
                    src={Play_button}
                    alt="Play button"
                  />
                </div>
                {/* Main Image */}
                <img
                  className="w-full h-full object-cover object-center"
                  src={
                    image.backdrop_path || image.profile_path
                      ? `https://image.tmdb.org/t/p/original/${
                          image.backdrop_path || image.profile_path
                        }`
                      : Noimage
                  }
                  alt={image.title || "Movie"}
                />
              </div>
            );
          })}
        </Slider>
    </div>
  );
}

export default NowPlaying_section;
