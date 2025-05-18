import { all } from "redux-saga/effects";
import { genresSaga } from "../genresSaga";
import { popularMoviesSaga } from "../popularMoviesSaga";

export function* rootSaga() {
    yield all([
        genresSaga(),
        popularMoviesSaga(),
    ]);
};