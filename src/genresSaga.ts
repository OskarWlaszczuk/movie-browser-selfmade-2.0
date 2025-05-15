import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGenres, handleGenresFailed, setFetchedGenres } from "./genresSlice";
import { GenreResponse } from "./common/aliases/types/GenresIds";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";

function* fetchGenresHandler() {
    try {
        const typedFetch = fetchFromAPI<GenreResponse[]>;
        const genresList: GenreResponse[] = yield call(typedFetch, "/genres.json");
        yield put(setFetchedGenres(genresList));
    } catch {
        put(handleGenresFailed());
    };
};

type FetchGenresAction = ReturnType<typeof fetchGenres>;

export function* genresSaga() {
    yield takeLatest<FetchGenresAction>(
        fetchGenres.type,
        fetchGenresHandler
    );
};