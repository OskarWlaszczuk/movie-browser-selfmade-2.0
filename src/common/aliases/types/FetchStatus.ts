import { failed, idle, loading, success } from "../../constants/fetchStatuses";

export type FetchStatus = typeof idle | typeof loading | typeof success | typeof failed;