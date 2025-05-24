import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";
import { fetchPopularPeople, handlePopularPeopleFailed, setFetchedPopularPeople } from "./popularPeopleSlice";
import { PopularPeopleResponse } from "./common/aliases/interfaces/TMDBRList";

function* fetchPopularPeopleHandler(): SagaIterator {
    try {
        const typedFetch = fetchFromAPI<PopularPeopleResponse>;
        const popularPeople: PopularPeopleResponse = yield call(typedFetch, "/popularPeople.json");
        yield put(setFetchedPopularPeople(popularPeople));
    } catch {
        yield put(handlePopularPeopleFailed());
    };
};

type FetchPopularPeopleAction = ReturnType<typeof fetchPopularPeople>;

export function* popularPeopleSaga() {
    yield takeLatest<FetchPopularPeopleAction>(
        fetchPopularPeople.type,
        fetchPopularPeopleHandler
    );
};