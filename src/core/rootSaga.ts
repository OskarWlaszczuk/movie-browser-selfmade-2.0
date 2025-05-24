import { all } from "redux-saga/effects";
import { genresSaga } from "../genresSaga";
import { popularMoviesSaga } from "../popularMoviesSaga";
import { popularPeopleSaga } from "../popularPeopleSaga";

export function* rootSaga() {
    yield all([
        genresSaga(),
        popularMoviesSaga(),
        popularPeopleSaga(),
    ]);
};