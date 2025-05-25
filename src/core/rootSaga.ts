import { all } from "redux-saga/effects";
import { genresSaga } from "../genresSaga";
import { popularMoviesSaga } from "../popularMoviesSaga";
import { popularPeopleSaga } from "../popularPeopleSaga";
import { movieCreditsSaga } from "../movieCreditsSaga";

export function* rootSaga() {
    yield all([
        genresSaga(),
        popularMoviesSaga(),
        popularPeopleSaga(),
        movieCreditsSaga(),
    ]);
};