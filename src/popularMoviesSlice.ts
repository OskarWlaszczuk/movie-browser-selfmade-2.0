import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { FETCH_STATUSES } from "./common/constants/FETCH_STATUSES";
import { RootState } from "./core/store";
import { PopularMoviesResponse } from "./common/aliases/types/popularMovies.types";

interface PopularMoviesState {
    list: PopularMoviesResponse["results"];
    currentPage: PopularMoviesResponse["page"];
    totalPages: PopularMoviesResponse["total_pages"];
    totalResults: PopularMoviesResponse["total_results"];
    status: FetchStatus;
}

const initialState: PopularMoviesState = {
    list: [],
    currentPage: 0,
    totalPages: 0,
    totalResults: 0,
    status: FETCH_STATUSES.IDLE,
};

const popularMoviesSlice = createSlice({
    name: "popularMovies",
    initialState,
    reducers: {
        fetchPopularMovies: (state) => {
            state.status = FETCH_STATUSES.LOADING;
        },
        setFetchedPopularMovies: (state, { payload }: PayloadAction<PopularMoviesResponse>) => {
            state.status = FETCH_STATUSES.SUCCESS;
            state.list = payload.results;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
        },
        handlePopularMoviesFailed: (state) => {
            state.status = FETCH_STATUSES.FAILED;
        },
    },
});

export const {
    fetchPopularMovies,
    setFetchedPopularMovies,
    handlePopularMoviesFailed,
} = popularMoviesSlice.actions;

export const selectPopularMovies = (state: RootState) => state.popularMovies;
export const selectPopularMoviesList = (state: RootState) => selectPopularMovies(state).list;
export const selectPopularMoviesStatus = (state: RootState) => selectPopularMovies(state).status;

export const popularMoviesReducer = popularMoviesSlice.reducer;