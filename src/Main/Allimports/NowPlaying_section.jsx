import axios from "../../Components/axois/axois";
import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import { Bars } from "react-loader-spinner";
const NowPlaying_cards = lazy(() => import("./NowPlaying_cards"));

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

  return (
    <div className="slider-container w-full h-[65vh] relative px-14 ">
      <h1 className="text-2xl py-6 px-5 text-white">Now Playing</h1>

      <Suspense
        fallback={
          <div className="flex justify-center py-20 w-full h-full">
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
        <NowPlaying_cards images={images} />
      </Suspense>
    </div>
  );
}

export default NowPlaying_section;
