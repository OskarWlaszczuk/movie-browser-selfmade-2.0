import { FETCH_STATUSES } from "../../constants/FETCH_STATUSES";

export type FetchStatus = typeof FETCH_STATUSES[keyof typeof FETCH_STATUSES];