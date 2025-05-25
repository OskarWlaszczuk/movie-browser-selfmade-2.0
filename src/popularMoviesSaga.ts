import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";
import { popularMoviesActions } from "./popularMoviesSlice";
import { PopularMovieApi } from "./common/aliases/interfaces/TMDBRList";

function* fetchPopularMoviesHandler(): SagaIterator {
    try {
        const typedFetch = fetchFromAPI<PopularMovieApi>;
        const popularMovies: PopularMovieApi = yield call(typedFetch, "/popularMovies.json");
        yield put(popularMoviesActions.setFetchedPopularList(popularMovies));
    } catch {
        yield put(popularMoviesActions.handlePopularListFailed());
    };
};

type FetchPopularMoviesAction = ReturnType<typeof popularMoviesActions.fetchPopularList>;

export function* popularMoviesSaga() {
    yield takeLatest<FetchPopularMoviesAction>(
        popularMoviesActions.fetchPopularList.type,
        fetchPopularMoviesHandler
    );
};