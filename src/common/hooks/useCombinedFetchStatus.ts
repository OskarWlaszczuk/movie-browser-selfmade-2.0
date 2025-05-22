import { useEffect, useState } from "react";
import { FetchStatus } from "../aliases/types/FetchStatus";
import { FETCH_STATUSES } from "../constants/FETCH_STATUSES";

const areStatusesMatching = (
    fetchStatuses: FetchStatus[],
    targetStatus: FetchStatus,
    matchAll: boolean = false
) => (
    matchAll ?
        fetchStatuses.every(fetchState => fetchState === targetStatus) :
        fetchStatuses.some(fetchState => fetchState === targetStatus)
);

export const useCombinedFetchStatus = (fetchStatuses: FetchStatus[]): FetchStatus => {
    const { IDLE, LOADING, FAILED, SUCCESS } = FETCH_STATUSES;
    const [combinedFetchStatus, setCombinedFetchStatus] = useState<FetchStatus>(IDLE);

    useEffect(() => {
        const isIdle = areStatusesMatching(fetchStatuses, IDLE);
        const isLoading = areStatusesMatching(fetchStatuses, LOADING);
        const isFailed = areStatusesMatching(fetchStatuses, FAILED);
        const isSuccess = areStatusesMatching(fetchStatuses, SUCCESS, true);

        if (isIdle) setCombinedFetchStatus(IDLE);
        if (isLoading) setCombinedFetchStatus(LOADING);
        if (isFailed) setCombinedFetchStatus(FAILED);
        if (isSuccess) setCombinedFetchStatus(SUCCESS);

    }, [fetchStatuses, IDLE, LOADING, FAILED, SUCCESS]);

    return combinedFetchStatus;
};