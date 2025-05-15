import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GenreId } from "./common/aliases/types/GenresIds";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { failed, idle, loading, success } from "./common/constants/fetchStatuses";
import { RootState } from "./core/store";
interface Genre {
    id: GenreId,
    name: string;
}

interface GenresState {
    list: Genre[] | [];
    status: FetchStatus;
}

const initialState: GenresState = {
    list: [],
    status: idle,
};

const genresSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        fetchGenres: (state) => {
            state.status = loading;
        },
        setFetchedGenres: (state, { payload }: PayloadAction<Genre[]>) => {
            state.status = success;
            state.list = payload;
        },
        handleGenresFailed: (state) => {
            state.status = failed;
        },
    },
});

export const {
    fetchGenres,
    setFetchedGenres,
    handleGenresFailed: fetchGenresFailed,
} = genresSlice.actions;

export const selectGenres = (state: RootState) => state.genres;
export const selectGenresList = (state: RootState) => selectGenres(state).list;
export const selectGenresStatus = (state: RootState) => selectGenres(state).status;

export const genresReducer = genresSlice.reducer;