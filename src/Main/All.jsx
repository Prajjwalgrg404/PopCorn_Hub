import React from "react";
import NowPlaying_section from "./Allimports/NowPlaying_section";
// import Header from "../Components/Head/Header";
import MovieSlider from "./Allimports/MovieSlider";
import Footer from "./Allimports/Footer";

function All() {
  return (
    <div className="w-full h-full">
      {/* <Header_main /> */}
      <MovieSlider />
      <NowPlaying_section />
      <Footer />
    </div>
  );
}

export default All;
