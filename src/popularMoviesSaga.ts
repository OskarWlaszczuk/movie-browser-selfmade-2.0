import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";
import { fetchPopularMovies, handlePopularMoviesFailed, setFetchedPopularMovies } from "./popularMoviesSlice";
import { PopularMoviesResponse } from "./common/aliases/interfaces/TMDBRList";

function* fetchPopularMoviesHandler(): SagaIterator {
    try {
        const typedFetch = fetchFromAPI<PopularMoviesResponse>;
        const popularMovies: PopularMoviesResponse = yield call(typedFetch, "/popularMovies.json");
        yield put(setFetchedPopularMovies(popularMovies));
    } catch {
        yield put(handlePopularMoviesFailed());
    };
};

type FetchPopularMoviesAction = ReturnType<typeof fetchPopularMovies>;

export function* popularMoviesSaga() {
    yield takeLatest<FetchPopularMoviesAction>(
        fetchPopularMovies.type,
        fetchPopularMoviesHandler
    );
};