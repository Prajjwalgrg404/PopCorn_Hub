import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjU0NTgxMzJjOTRhMTYwY2QwNDI3ZDg5OTdjNGM4YiIsIm5iZiI6MTczNjY3MzQwNC41NjQsInN1YiI6IjY3ODM4ODdjNGJmZDdlZjU1ZGJhZmRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.klVCcWUiU61J3lspDWni21NBMAY1XClMDqIC-Q7G6oc",
  },
});
export default instance;
