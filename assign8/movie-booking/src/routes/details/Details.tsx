import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { MovieDetails, setMovieDetails } from "../../store/ticetSlice";
import { useDispatch } from "react-redux";

function Details() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const movieList = useSelector((state: RootState) => state.movies.movieList);
    const movieDetails = useSelector((state: RootState) => state.ticket.movieDetails);

    useEffect(() => {
        let arr = [...movieList];
        let movie = arr[Number(movieId)];

        let details: MovieDetails = {
            movieId: Number(movieId),
            movieScreen: movie.hallNumber,
            bookingCost: movie.ticketPrice,
            movieName: movie.name
        };

        dispatch(setMovieDetails(details));
    }, [movieId]);

    function MovieDetails() {
        let arr = [...movieList];
        let movie = arr[Number(movieId)];
        return (
            <div className="movieDetails">
                <div className="placeHolderImage"></div>
                <div className="name">Movie name : {movie.name}</div>
                <div className="movieDetails">Movie details : {movie.description}</div>
                <div className="ticketPrice">Ticket price : {movie.ticketPrice}</div>
                <div className="hallNumber">Hall : {movie.hallNumber}</div>
                <button onClick={handleBooking}>book now</button>
            </div>
        )
    }

    function handleBooking() {
        navigate("/book");
    }

    return (
        <div className="details">
            <h3>Movie details</h3>
            <MovieDetails />
        </div>
    )
}

export default Details;