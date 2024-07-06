import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TicketInfo {
    movieId: number;
    movieName: string;
    movieScreen: number;
    bookingId: string;
    name: string;
    email: string;
    mobile: string;
    bookingCost: number;
};

export interface MovieDetails {
    movieId: number;
    bookingCost: number;
    movieScreen: number;
    movieName: string;
};

export interface MovieTicketDetails {
    movieDetails: MovieDetails;
    ticketDetails: TicketInfo;
}

const initialState: MovieTicketDetails = {
    movieDetails: {
        movieId: 0,
        bookingCost: 0,
        movieScreen: 0,
        movieName: ""
    },
    ticketDetails: {
        movieId: 0,
        movieName: "",
        movieScreen: 0,
        bookingId: "",
        name: "",
        email: "",
        mobile: "",
        bookingCost: 0
    }
}

export const ticketSlice = createSlice({
    name: "Ticket",
    initialState,
    reducers: {
        setMovieDetails: (state, action: PayloadAction<MovieDetails>) => {
            state.movieDetails = action.payload;
        },
        setTicket: (state, action: PayloadAction<TicketInfo>) => {
            state.ticketDetails = action.payload;
        }
    }
});

export const { setMovieDetails, setTicket } = ticketSlice.actions;
export default ticketSlice.reducer;