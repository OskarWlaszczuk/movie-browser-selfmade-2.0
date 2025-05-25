import { call, put, takeLatest } from "redux-saga/effects";
import { fetchFromAPI } from "./common/functions/fetchFromAPI";
import { SagaIterator } from "redux-saga";
import { popularPeopleActions } from "./popularPeopleSlice";
import { PopularPeopleApi } from "./common/aliases/interfaces/TMDBRList";

function* fetchPopularPeopleHandler(): SagaIterator {
    try {
        const typedFetch = fetchFromAPI<PopularPeopleApi>;
        const popularPeople: PopularPeopleApi = yield call(typedFetch, "/popularPeople.json");
        yield put(popularPeopleActions.setFetchedPopularList(popularPeople));
    } catch {
        yield put(popularPeopleActions.handlePopularListFailed());
    };
};

type FetchPopularPeopleAction = ReturnType<typeof popularPeopleActions.fetchPopularList>;

export function* popularPeopleSaga() {
    yield takeLatest<FetchPopularPeopleAction>(
        popularPeopleActions.fetchPopularList.type,
        fetchPopularPeopleHandler
    );
};