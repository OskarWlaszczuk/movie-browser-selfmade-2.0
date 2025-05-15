import { createSlice } from "@reduxjs/toolkit";
import { GenreId } from "./common/aliases/types/GenresIds";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { failed, idle, loading, success } from "./common/constants/fetchStatuses";
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
        fetchGenresSuccess: (state, action) => {
            state.status = success;
            state.list = action.payload;
        },
        fetchGenresFailed: (state) => {
            state.status = failed;
        },
    },
});

export const {
    fetchGenres,
    fetchGenresSuccess,
    fetchGenresFailed,
} = genresSlice.actions;