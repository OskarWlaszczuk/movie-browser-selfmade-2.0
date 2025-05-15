import { createSlice } from "@reduxjs/toolkit";

const idle = "idle";
const loading = "loading";
const success = "success";
const failed = "failed";

const genresSlice = createSlice({
    name: "genres",
    initialState: {
        list: [],
        status: idle,
    },
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