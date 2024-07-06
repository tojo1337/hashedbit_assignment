import "./App.css";
import { useSelector } from "react-redux";
import { setMovies } from "../../store/movieSlice"
import type { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { movies } from "./movies";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => state.movies.movieList);
  const navigate = useNavigate();

  useEffect(() => {
    let movieList = movies;
    dispatch(setMovies(movieList));
  }, []);

  function MovieList() {
    let arr = [...movieList];
    let movieListArr = arr.map((item, index) => (
      <div className="movieCard" key={index} onClick={e=>sendToDetails(index)}>
        <div className="imageDisplay"></div>
        <div className="movieTitle">Name : {item.name}</div>
        <div className="hallNumber">Hall number : {item.hallNumber}</div>
      </div>
    ));
    return (
      <div className="movieListShow">
        {movieListArr}
      </div>
    );
  }

  function sendToDetails(index: number){
    navigate("/details/"+index);
  }

  return (
    <div className="App">
      <h4>Movie booking app</h4>
      <div className="movieList">
        <MovieList />
      </div>
    </div>
  )
}

export default App
