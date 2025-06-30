import { call, put, takeLatest } from "redux-saga/effects";
import { fetchGenres, handleGenresFailed, setFetchedGenres } from "./genresSlice";
import { Genre } from "./common/aliases/types/genre.types";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";

interface GenresApiResponse {
    genres: Genre[]
}

function* fetchGenresHandler(): SagaIterator {
    try {
        const typedFetch = fetchFromAPI<GenresApiResponse>;
        const genresList: GenresApiResponse = yield call(typedFetch, "genre/movie/list");
        yield put(setFetchedGenres(genresList.genres));
    } catch {
        yield put(handleGenresFailed());
    };
};

type FetchGenresAction = ReturnType<typeof fetchGenres>;

export function* genresSaga() {
    yield takeLatest<FetchGenresAction>(
        fetchGenres.type,
        fetchGenresHandler
    );
};