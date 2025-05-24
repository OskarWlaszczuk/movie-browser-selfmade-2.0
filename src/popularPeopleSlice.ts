import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchStatus } from "./common/aliases/types/FetchStatus";
import { FETCH_STATUSES } from "./common/constants/FETCH_STATUSES";
import { RootState } from "./core/store";
import { PopularPeopleResponse } from "./common/aliases/interfaces/TMDBRList";

interface PopularPeopleState {
    list: PopularPeopleResponse["results"];
    currentPage: PopularPeopleResponse["page"];
    totalPages: PopularPeopleResponse["total_pages"];
    totalResults: PopularPeopleResponse["total_results"];
    status: FetchStatus;
}

const initialState: PopularPeopleState = {
    list: [],
    currentPage: 0,
    totalPages: 0,
    totalResults: 0,
    status: FETCH_STATUSES.IDLE,
};

const popularPeopleSlice = createSlice({
    name: "popularPeople",
    initialState,
    reducers: {
        fetchPopularPeople: (state) => {
            state.status = FETCH_STATUSES.LOADING;
        },
        setFetchedPopularPeople: (state, { payload }: PayloadAction<PopularPeopleResponse>) => {
            state.status = FETCH_STATUSES.SUCCESS;
            state.list = payload.results;
            state.currentPage = payload.page;
            state.totalPages = payload.total_pages;
            state.totalResults = payload.total_results;
        },
        handlePopularPeopleFailed: (state) => {
            state.status = FETCH_STATUSES.FAILED;
        },
    },
});

export const {
    fetchPopularPeople,
    setFetchedPopularPeople,
    handlePopularPeopleFailed,
} = popularPeopleSlice.actions;

export const selectPopularPeople = (state: RootState) => state.popularPeople;
export const selectPopularPeopleList = (state: RootState) => selectPopularPeople(state).list;
export const selectPopularPeopleStatus = (state: RootState) => selectPopularPeople(state).status;
export const selectPopularPeopleTotalPages = (state: RootState) => selectPopularPeople(state).totalPages;
export const selectPopularPeopleTotalResults = (state: RootState) => selectPopularPeople(state).totalResults;
export const selectPopularPeopleCurrentPage = (state: RootState) => selectPopularPeople(state).currentPage;

export const popularPeopleReducer = popularPeopleSlice.reducer;