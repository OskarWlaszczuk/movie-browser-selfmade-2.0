import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { FETCH_STATUSES } from "./common/constants/FETCH_STATUSES";
import { RootState } from "./core/store";
import { GenreResponse } from "./common/aliases/types/genre.types";
interface GenresState {
    list: GenreResponse[] | [];
    status: FetchStatus;
}

const initialState: GenresState = {
    list: [],
    status: FETCH_STATUSES.PENDING,
};

const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        fetchGenres: (state) => {
            state.status = FETCH_STATUSES.PENDING;
        },
        setFetchedGenres: (state, { payload }: PayloadAction<GenreResponse[]>) => {
            state.status = FETCH_STATUSES.SUCCESS;
            state.list = payload;
        },
        handleGenresFailed: (state) => {
            state.status = FETCH_STATUSES.ERROR;
        },
    },
});

export const {
    fetchGenres,
    setFetchedGenres,
    handleGenresFailed,
} = genresSlice.actions;

export const selectGenres = (state: RootState) => state.genres;
export const selectGenresList = (state: RootState) => selectGenres(state).list;
export const selectGenresStatus = (state: RootState) => selectGenres(state).status;

export const genresReducer = genresSlice.reducer;