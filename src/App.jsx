import { Route, Routes } from "react-router-dom";
import Movies from "./Movie/Movies.jsx";
import All from "./Main/All.jsx";
import Header from "./Components/Head/Header.jsx";
import Tv_shows from "./Tv shows/Tv_shows.jsx";

function App() {
  return (
    <>
      <div className="bg-black w-full h-full">
        <Header />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<Tv_shows />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
