import { all } from "redux-saga/effects";
import { genresSaga } from "../genresSaga";

export function* rootSaga() {
    yield all([
        genresSaga()
    ]);
};