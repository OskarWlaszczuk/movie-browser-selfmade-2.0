import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";
import { PopularListApi } from "../aliases/interfaces/TMDBRList";
import { FetchStatus } from "../aliases/types/FetchStatus";
import { Movie } from "../aliases/interfaces/Movie";
import { Person } from "../aliases/interfaces/Person";
import { FETCH_STATUSES } from "../constants/FETCH_STATUSES";


interface PopularListState<PopularListItemType> {
    list: PopularListApi<PopularListItemType>["results"];
    currentPage: PopularListApi<PopularListItemType>["page"];
    totalPages: PopularListApi<PopularListItemType>["total_pages"];
    totalResults: PopularListApi<PopularListItemType>["total_results"];
    status: FetchStatus;
}

interface CreatePopularListSliceParams {
    stateName: "popularMovies" | "popularPeople";
}

export const createPopularListSlice = <PopularListItemType extends Movie | Person>(
    { stateName }: CreatePopularListSliceParams
) => {

    const initialState: PopularListState<PopularListItemType> = {
        list: [],
        currentPage: 0,
        totalPages: 0,
        totalResults: 0,
        status: FETCH_STATUSES.IDLE,
    };

    const slice = createSlice({
        name: stateName,
        initialState,
        reducers: {
            fetchPopularList: (state) => {
                state.status = FETCH_STATUSES.LOADING;
            },
            setFetchedPopularList: (state, { payload }: PayloadAction<PopularListApi<PopularListItemType>>) => {
                state.status = FETCH_STATUSES.SUCCESS;
                state.list = payload.results;
                state.currentPage = payload.page;
                state.totalPages = payload.total_pages;
                state.totalResults = payload.total_results;
            },
            handlePopularListFailed: (state) => {
                state.status = FETCH_STATUSES.FAILED;
            },
        },
    });

    return {
        reducer: slice.reducer,
        actions: slice.actions,
        selectors: {
            selectPopularList: (state: any) => state[stateName].list as PopularListItemType[],
            selectPopularListStatus: (state: RootState) => state[stateName].status,
            selectPopularListTotalPages: (state: RootState) => state[stateName].totalPages,
            selectPopularListTotalResults: (state: RootState) => state[stateName].totalResults,
            selectPopularListCurrentPage: (state: RootState) => state[stateName].currentPage,
        },
    };
};