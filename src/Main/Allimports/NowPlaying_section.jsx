import axios from "../../Components/axois/axois";
import React, { useEffect, useState } from "react";
import NowPlaying_cards from "./NowPlaying_cards";

function NowPlaying_section() {
  const [images, setimages] = useState([]);
  // console.log(images);
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

  return (
    <div className="slider-container w-full h-[65vh] relative px-14 ">
      <h1 className="text-2xl py-6 px-5 text-white">Now Playing</h1>

      <NowPlaying_cards images={images} />
    </div>
  );
}

export default NowPlaying_section;
