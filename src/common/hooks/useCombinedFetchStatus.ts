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

export const useCombinedFetchStatus = (fetchStatuses: FetchStatus[], pausedFlags: boolean[]): FetchStatus => {
    const { PENDING, ERROR, SUCCESS, PAUSED } = FETCH_STATUSES;
    const [combinedFetchStatus, setCombinedFetchStatus] = useState<FetchStatus>(PENDING);

    useEffect(() => {
        const isLoading = areStatusesMatching(fetchStatuses, PENDING);
        const isFailed = areStatusesMatching(fetchStatuses, ERROR);
        const isSuccess = areStatusesMatching(fetchStatuses, SUCCESS, true);
        const isAnyPaused = pausedFlags.some(isPaused => isPaused === true);

        if (isAnyPaused && isLoading) setCombinedFetchStatus(PAUSED)
        if (isLoading && !isAnyPaused) setCombinedFetchStatus(PENDING);
        if (isFailed) setCombinedFetchStatus(ERROR);
        if (isSuccess) setCombinedFetchStatus(SUCCESS);

    }, [fetchStatuses, PENDING, ERROR, SUCCESS, PAUSED, pausedFlags]);

    return combinedFetchStatus;
};