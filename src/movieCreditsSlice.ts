import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FETCH_STATUSES } from "./common/constants/FETCH_STATUSES";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { RootState } from "./core/store";

interface CastMember {
    id: number;
    name: string;
    profile_path: string;
    character: string;
}

interface CrewMember {
    id: number;
    name: string;
    profile_path: string;
    job: string;
}

interface MovieCreditsState {
    cast: CastMember[];
    crew: CrewMember[];
    status: FetchStatus;
}

interface MovieCreditsApiResponse {
    cast: CastMember[];
    crew: CrewMember[];
}

const initialState: MovieCreditsState = {
    cast: [],
    crew: [],
    status: FETCH_STATUSES.IDLE,
}

const movieCreditsSlice = createSlice({
    name: "movieCredits",
    initialState,
    reducers: {
        fetchMovieCredits: (state, { payload }: PayloadAction<{ movieId: string }>) => {
            state.status = FETCH_STATUSES.LOADING;
        },
        setFetchedMovieCredits: (state, { payload }: PayloadAction<MovieCreditsApiResponse>) => {
            state.cast = payload.cast;
            state.crew = payload.crew;
            state.status = FETCH_STATUSES.SUCCESS;
        },
        handleMovieCreditsFail: (state) => {
            state.status = FETCH_STATUSES.FAILED;
        },
    },
});

export const { fetchMovieCredits, setFetchedMovieCredits, handleMovieCreditsFail } = movieCreditsSlice.actions;

export const movieCreditsReducer = movieCreditsSlice.reducer;

export const selectMovieCreditsState = (state: RootState) => state.movieCredits;
export const selectMovieCast = (state: RootState) => selectMovieCreditsState(state).cast;
export const selectMovieCrew = (state: RootState) => selectMovieCreditsState(state).crew;
export const selectMovieCreditsStatus = (state: RootState) => selectMovieCreditsState(state).status;