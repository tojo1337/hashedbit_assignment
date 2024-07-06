import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Movie {
    name: string;
    description: string;
    ticketPrice: number;
    hallNumber: number;
}

export interface MovieList {
    movieList: Movie[];
}

const initialState: MovieList = {
    movieList: []
}

export const movieSlice = createSlice({
    name: "Movies",
    initialState,
    reducers: {
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movieList = action.payload;
        },
    }
});

// Exported actions
export const { setMovies } = movieSlice.actions;

// Exported reducer
export default movieSlice.reducer;