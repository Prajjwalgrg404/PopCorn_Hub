import React, { useState } from "react";
import Hero_img from "../JSON/Images";


function Hero_section() {
  const [count, setCount] = useState(0);
  // console.log(count)

  // const Slide = setInterval(() => {
  //   setCount();
  // }, 10000);

  return (
    <div>
      <div  className="w-full h-screen overflow-x-hidden flex bg-[#0B0B0B] pb-2
      ">
        {Hero_img.map((items,i) => {
          return (
            <div key={i} style={{ backgroundImage: `url(${items.img})` }} className="min-w-full mx-auto h-full bg-cover">
              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero_section;
