import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "../axois/axois";

const MovieSlider = () => {
  const [wallpaper, setwallpaper] = useState([]);

  console.log(wallpaper);

  const GetWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data.results);
      setwallpaper(data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    GetWallpaper();
  }, []);

    const settings = {
      infinite: true, // Loop through slides
      speed: 500, // Transition speed in ms
      slidesToShow: 1, // Number of slides visible
      slidesToScroll: 1, // Number of slides scrolled at a time
      autoplay: true, // Auto-slide functionality
      autoplaySpeed: 3000, // Time between slides (ms)
    };

  return (
    <div className="slider-container py-[5rem] w-full h-screen overflow-y-hidden flex  text-white">
      {/* <Slider {...settings}> */}
      {wallpaper.map((image, index) => (
          <div
            key={index}
            style={{
              background: `url(https://image.tmdb.org/t/p/original/${
                image.backdrop_path || image.profile_path
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="min-w-full h-[90vh]"
          ></div>
        ))
      }
      {/* </Slider> */}
    </div>
  );
};

export default MovieSlider;
